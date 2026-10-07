---
title: Locators
description: A node that represents a point in space that can be used as a reference for commands.
---

# Locators

Locators mark a point on your rig, like a hand, a muzzle, or a mounting point. Use them to run commands at that point, or to attach an entity to it.

<img src="/images/docs/nodes/locators/example1.png" alt="Locator example"/>

## Entity Creation

A Locator only creates an entity if [Use Entity](#use-entity) is enabled. Like Cameras and Interactions, Locator entities aren't passengers: Animated Java teleports them into place every tick (see [Floating Entities](/docs/core-concepts/rigs#floating-entities)).

## Locator Config

Right-click a Locator in the Outliner and choose **Locator Config**.

-   #### Use Entity

    Summons an entity at the Locator and keeps it there.

-   #### Entity Type

    The type of entity to summon, like `minecraft:marker` or `minecraft:item_display`. Only shown with Use Entity enabled.

-   #### Sync Passenger Rotation

    Rotates any entity riding the Locator's entity to match the Locator. Only shown with Use Entity enabled.

-   #### On-Summon Function

    Commands that run `as` and `at` the Locator's entity when the rig is summoned. Only shown with Use Entity enabled.

    :::tip[Example]
    Making the entity invisible and immune to gravity:

    ```mcfunction
    effect give @s invisibility infinite 0 true
    data merge entity @s {NoGravity: 1b}
    ```

    :::

-   #### On-Remove Function

    Commands that run `as` and `at` the Locator's entity when the rig is removed. Only shown with Use Entity enabled.

-   #### On-Tick Function

    Commands that run every tick. With Use Entity enabled, they run `as` and `at` the Locator's entity. Without it, they run `at` the Locator's position and rotation, as the rig's [root entity](/docs/core-concepts/rigs#the-root-entity).

All of these functions support [MC-Build](https://mcbuild.dev) syntax.

## Locator Keyframes

Locators have their own **Function** keyframes in the Timeline. Their commands run at the Locator's position on that frame, and `as` its entity if it has one. They support an **Execute Condition**, and a **Repeat** option that runs them again every **Frequency** ticks until the Locator's next keyframe. See [Locator and Interaction Keyframes](/docs/core-concepts/animations#locator-and-interaction-keyframes).

## Accessing Locators In-Game

Use the [Locator functions](/docs/function-api/utilities#locators):

```mcfunction
# Spawn flames at the "hand" Locator
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/at_locator {name: "hand", command: "particle minecraft:flame ~ ~ ~"}

# Run a command as the "mount" Locator's entity (requires Use Entity)
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/as_locator {name: "mount", command: "say Hello!"}
```

## Plugin Mode

Locators have no config in [Plugin mode](/docs/core-concepts/exporting#plugin-exports). Use your plugin's API to add behavior to them instead.
