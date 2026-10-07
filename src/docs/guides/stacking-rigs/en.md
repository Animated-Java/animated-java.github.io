---
title: Stacking Rigs
description: Learn how to stack rigs on top of each other to create dynamic models.
---

# Stacking Rigs

"Stacking" means mounting entities on top of each other. With a [Locator](/docs/nodes/locators) that [uses an entity](/docs/nodes/locators#use-entity), you can mount one rig on another, then move or rotate it on its own: a turret on a tank, or a head that turns to watch the player.

## Tutorial

We'll mount a `my_pack:head` rig on top of a `my_pack:body` rig.

1. In the `body` Blueprint, add a [Locator](/docs/nodes/locators) named `head_mount` where the head should sit.
2. Right-click `head_mount`, open its **Locator Config**, and set:

    1. **Use Entity**: enabled
    2. **Entity Type**: `minecraft:item_display`
    3. **On-Summon Function**:

        ```mcfunction
        function my_pack:head/summon {args: {}}
        ride @e[type=minecraft:item_display,tag=my_pack.head.root,sort=nearest,limit=1] mount @s
        ```

3. Export both Blueprints (see [Exporting](/docs/core-concepts/exporting)).
4. In Minecraft, reload your Resource Pack (`F3 + T`) and Data Pack (`/reload`).
5. Summon the body:

    ```mcfunction
    execute rotated 0 0 run function my_pack:body/summon {args: {}}
    ```

The head rig is summoned on the `head_mount` Locator and rides along as the body animates.

## Making the Head Look Around

The head rig turns to match its root entity, so rotate the root entity to aim it. On Minecraft 1.21.2 and newer, run this every tick to make every head look at the nearest player:

```mcfunction
execute as @e[tag=my_pack.head.root] at @s facing entity @p eyes run rotate @s ~ ~
```

:::note
Leave **Sync Passenger Rotation** off on `head_mount` for this. When it's on, the Locator overwrites the head's rotation every tick.
:::

## Removing Stacked Rigs

Removing the body also removes the head, because removing a rig removes everything riding it. The head's own On-Remove functions don't run, so if you rely on them, remove the head first. Run this as the body's root entity, before `remove/this`:

```mcfunction
function my_pack:body/as_locator {name: "head_mount", command: "execute on passengers run function my_pack:head/remove/this"}
```

## Common Issues

-   #### The head lags behind the body when it moves

    This happens when the body's root entity rides another entity that moves with `Motion`, or moves on its own. Move the body with `/tp` instead: it's the only known way to keep stacked rigs together.
