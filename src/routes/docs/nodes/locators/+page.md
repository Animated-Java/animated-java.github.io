---
title: Locators
description: A node that represents a point in space that can be used as a reference for commands.
---

# Locators

Locators are used to represent points in space that can be used as anchors for commands.

<img src="/images/docs/nodes/locators/example1.png" alt="Locator example"/>

## Entity Creation

A Locator only creates an entity if the [Use Entity](#Use-Entity) option is enabled in the Locator Config.

## Locator Config

A Locator's config can be accessed by right-clicking the node, and selecting `Locator Config`.

-   #### Use Entity

    If enabled, the locator will create an entity when exported.

-   #### Entity Type

    The type of entity to create when [Use Entity](#Use-Entity) is enabled. This can be any valid Minecraft entity type, such as `minecraft:armor_stand` or `minecraft:marker`.

-   #### Sync Passenger Rotation

    If enabled, the rotation of any entities riding the entity created by this locator will be synced to its rotation.

-   #### On-Summon Function

    A list of commands to run `as` and `at` the entity created by this locator when it is summoned. These commands can use `@s` to target the entity created by this locator.

    :::tip[Example]
    Modifying the summoned entity to be invisible and have no gravity:

    ```mcfunction
    effect give @s invisibility infinite 0 true
    data merge entity @s {NoGravity:1b}
    ```

    :::

    Only available if [Use Entity](#Use-Entity) is enabled.

-   #### On-Remove Function

    A list of commands to run `as` and `at` the entity created by this locator when it is removed.

    Only available if [Use Entity](#Use-Entity) is enabled.

-   #### On-Tick Function

    A list of commands to run every tick. If [Use Entity](#Use-Entity) is enabled, these commands will be run `as` and `at` the entity created by this locator. If [Use Entity](#Use-Entity) is disabled, these commands will be run at the location of this locator relative to the [Root Entity](/docs/core-concepts/rigs#root-entity) of the [Rig](/docs/core-concepts/rigs).

## Accessing Locators at Runtime

Use the [locator utility functions](/docs/function-api/utilities#locator-functions) to run commands at a locator's world position:

Execute at the locator's position

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/at_locator {name: "hand", command: "particle minecraft:flame ~ ~ ~"}
```

Execute as the locator entity (requires [Use Entity](#Use-Entity) to be enabled)

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/as_locator {name: "mount", command: "say Hello!"}
```

## Plugin Mode

Locator configs are not available when [Plugin Mode](/docs/core-concepts/blueprints#enable-plugin-mode) is enabled. All locator settings are hidden in plugin mode.
