---
title: Rigs
description: Understand what a Rig is and how Animated Java structures entities in Minecraft.
---

# Rigs

## What is a Rig?

A **Rig** is the group of entities your Blueprint creates in Minecraft. Every time you [summon](/docs/function-api/summon) a Blueprint, you get a new **rig instance**. A world can hold any number of instances of the same Blueprint, and each one animates independently.

A rig is made of these entities:

:::tree

-   Root Entity `minecraft:item_display`
    -   [Bones](/docs/nodes/groups) `minecraft:item_display` — Groups with Cubes
    -   [Item Displays](/docs/nodes/item-displays) `minecraft:item_display`
    -   [Block Displays](/docs/nodes/block-displays) `minecraft:block_display`
    -   [Text Displays](/docs/nodes/text-displays) `minecraft:text_display`
    -   ~ [Locators](/docs/nodes/locators) any entity type — only with Use Entity, free-floating
    -   ~ [Cameras](/docs/nodes/cameras) `minecraft:item_display`
    -   ~ [Interactions](/docs/nodes/interactions) `minecraft:interaction`

:::

:::tip
The **E:** counter in the Outliner's toolbar shows how many entities one instance of your rig will use. Click it for a breakdown by node type.
:::

## The Root Entity

The **root entity** is the anchor of the rig: an `item_display` placed at the rig's origin. Every other entity in the rig either rides it or is positioned relative to it.

Almost every rig function has to run **as** the root entity. You can select it with the `<blueprint_id>.root` tag:

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/idle/play
```

See [Tags](/docs/core-concepts/tags) for every tag a rig uses.

## Bone Entities

Groups that contain Cubes, Item Displays, Block Displays, and Text Displays each become one display entity. Animated Java calls these **bones**. They're animated by changing their `transformation`, and Minecraft smooths the motion between frames.

By default, bones ride the root entity as passengers, so the whole rig moves with it. With [Use Entity Stacking](/docs/core-concepts/blueprints#use-entity-stacking) turned off, bones are separate entities that are teleported into place instead.

Groups without Cubes don't create an entity. See [Groups](/docs/nodes/groups#structure-groups).

## Floating Entities

Locators (with [Use Entity](/docs/nodes/locators#use-entity) enabled), Cameras, and Interactions don't ride the root entity. Animated Java teleports them to their position on the rig every tick, as long as [Auto Update Rig Orientation](/docs/core-concepts/blueprints#auto-update-rig-orientation) is enabled, or when you call [`move`](/docs/function-api/utilities#move).

## Rig Identity

Each rig instance gets a unique number in the `aj.id` scoreboard objective. Animated Java uses it to find the rig's entry in command storage, which holds the UUIDs of every entity in the rig. That's how rig functions reach a specific bone without searching every entity in the world.

## Rig Lifecycle

1. **Summon:** [`<blueprint_id>/summon`](/docs/function-api/summon) creates the root entity and every node, then runs the On-Summon functions.
2. **Tick:** every tick, `animated_java:global/on_tick` (in the `#minecraft:tick` function tag) runs `<blueprint_id>/root/on_tick` as each rig's root entity. This advances playing animations, moves floating entities, and runs the tick functions. You never need to call it yourself.
3. **Remove:** [`<blueprint_id>/remove/this`](/docs/function-api/remove) runs the On-Remove functions, then removes every entity in the rig.

## Related Reading

-   [Animations](/docs/core-concepts/animations)
-   [Variants](/docs/core-concepts/variants)
-   [Tags](/docs/core-concepts/tags)
-   [Function API: Summon](/docs/function-api/summon)
