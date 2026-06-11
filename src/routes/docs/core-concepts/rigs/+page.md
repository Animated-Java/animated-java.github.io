---
title: Rigs
description: Understand what a Rig is and how Animated Java structures entities in Minecraft.
---

# Rigs

## What is a Rig?

A **Rig** is a live Minecraft entity structure spawned from a Blueprint. Every time you summon a Blueprint in-game, a new **Rig instance** is created. A single world can contain many independent instances of the same Blueprint simultaneously.

A Rig is made up of a hierarchy of Minecraft entities working together:

```
Root Entity (minecraft:item_display)
└── Bone Passengers (minecraft:item_display)       ← custom model cubes & groups
└── TextDisplay Passengers (minecraft:text_display)
└── ItemDisplay Passengers (minecraft:item_display)
└── BlockDisplay Passengers (minecraft:block_display)
└── Interaction Entities (minecraft:interaction)   ← free-floating, nearby
└── Locator Entities (*)                           ← free-floating, if configured
└── Camera Entities (minecraft:item_display)       ← free-floating
```

## Root Entity

The **Root Entity** is the anchor of the entire rig. It is a `minecraft:item_display` entity placed at the rig's origin point. Every other entity in the rig either rides the root entity as a **passenger** or is tracked relative to it.

The root entity carries a set of scoreboard tags identifying it:

| Tag                     | Meaning                                |
| ----------------------- | -------------------------------------- |
| `aj.global.root`        | This entity is a rig root              |
| `aj.global.entity`      | This entity belongs to any AJ rig      |
| `<blueprint_id>.root`   | Root of the specific blueprint         |
| `<blueprint_id>.entity` | Any entity belonging to this blueprint |

## Bone Entities

Each Group node (that contains Cubes) and each display node (Item Display, Block Display, Text Display) in your Blueprint becomes a **passenger** of the root entity. Passengers always move with their parent entity, so the entire rig moves as one when the root entity is teleported.

Bone entities are `minecraft:item_display` entities with a custom item model assigned. Their position and rotation are updated each tick via the `transformation` NBT field using Minecraft's built-in entity interpolation system.

## Rig Identity & Storage

Every rig instance is assigned a unique integer **ID** via the `aj.id` scoreboard objective. This ID is used to look up the rig's data storage entry, which stores the UUIDs of all entities in the rig.
This allows Animated Java to efficiently track and update all entities in the rig each tick, without needing to rely on expensive entity selectors or entity NBT queries.

## Variants

A **Variant** is a named configuration that swaps textures and/or hides specific bones at runtime. Every rig has at least one variant — the **Default** variant. Additional variants can be defined in Blockbench and applied via the [variants function API](/docs/function-api/variants).

When a variant is applied to a rig instance, Animated Java updates the item model/CMD on each affected bone entity to point to the variant's model, and applies any per-variant display entity config (billboard, brightness, glow, etc.).

See [Variants](/docs/core-concepts/blueprints#variants) for configuration details.

## Animations

Animations are played per-rig-instance. Each rig independently tracks its own animation state.

Multiple animations can play simultaneously on the same rig, as long as they do not affect the same bones. Each animation only updates the bones listed in its `Included Nodes` set.

See [Animations](/docs/core-concepts/animations) to learn more about animations.

See the [Function API: Animations](/docs/function-api/animations) for how to control animations in-game.

## Rig Lifecycle

1. **Summon** — `<blueprint_id>/summon` — Spawns the root entity with all passengers. Optionally applies a variant and seeks to an animation frame.
2. **Tick** — `<blueprint_id>/on_tick` — Runs every game tick for every live rig instance. Advances animation frames, updates floating entity positions, fires keyframe callbacks.
3. **Remove** — `<blueprint_id>/remove/this` — Kills the root and all associated entities, fires on-remove hooks, cleans up storage.

Animated Java automatically registers its tick function in `#animated_java:global/root/on_tick`, which is called every tick by AJ's global scheduler. You do not need to manually call tick functions.
