---
title: Stacking Rigs
description: Learn how to stack rigs on top of each other to create dynamic models.
---

## Introduction

"Stacking" is the process of mounting multiple entities on top of each other.

Using [Locators](/docs/nodes/locators) and their [Use Entity](/docs/nodes/locators#use-entity) and [On-Summon Function](/docs/nodes/locators#on-summon-function) properties, you can stack multiple rigs to add dynamic parts to your model.

## Tutorial

Let's take an existing rig (`body`) and stack our head rig (`head`) on top of it.

1. Inside of your `body` rig, create a new [Locator](/docs/nodes/locators) named `head_locator`. Position this Locator where you want the head to be mounted.
2. Open up `head_locator`'s config and configure the following properties:

    1. Enable `Use Entity`
    2. Set the `Entity Type` to `minecraft:item_display`
    3. Set `On-Summon Function` to

        ```mcfunction
        function animated_java:head/summon {args:{}}
        ride @n[type=item_frame,tag=aj.head.root,distance=..0.01] mount @s
        ```

3. Save and export both rigs (see [Your First Blueprint](/docs/getting-started/your-first-blueprint) for export instructions).
4. In Minecraft, reload your Data Pack and Resource Pack.
5. Run the following command to summon your body rig.
    ```mcfunction
    execute rotated 0 0 run function animated_java:body/summon {args: {}}
    ```
6. You should see the head rig mounted on top of the body rig.

From here, you can use your own commands to adjust the `head` rig's rotation as needed.

## Common Issues

-   #### The `head` rig falls behind the `body` rig when moving.

    This commonly happens when mounting the `body` root entity on an entity, then moving that entity via `Motion` (or the entity moving itself).

    The only (known) way to keep this connection seemless is to use the `tp` command to move the rig.
