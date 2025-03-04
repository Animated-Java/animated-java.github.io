---
title: Stacking Rigs
description: Learn how to stack rigs on top of each other to create dynamic models.
---

# {$frontmatter.title}

{$frontmatter.description}

## Introduction

"Stacking" is a term used to describe the process of mounting multiple entities on top of eachother.

Using [Locators](/docs/the-blueprint-format/locators) and their [Use Entity](/docs/the-blueprint-format/locators#use-entity) and [On-Summon Commands](/docs/the-blueprint-format/locators#on-summon-commands) properties, you can stack multiple rigs on top of each other to add dynamic parts to your model.

## Tutorial

Let's take an existing rig (`body`) and stack our head rig (`head`) on top of it.

1. Inside of your `body` rig, create a new [Locator](/docs/the-blueprint-format/locators) named `head_locator`. Position this Locator where you want the head to be mounted.
2. Open up `head_locator`'s config and configure the following properties:

    1. Enable `Use Entity`
    2. Set the `Entity Type` to `minecraft:item_display`
    3. Set `On-Summon Commands` to

        ```rust
        	function animated_java:head/summon {args:{}}
        	ride @n[type=item_frame,tag=aj.head.root] mount @s
        ```

3. Save and [Export](/docs/getting-started/exporting-your-blueprint) both rigs.
4. In Minecraft, reload your Data Pack and Resource Pack.
5. Run `/execute rotated 0 0 run function animated_java:body/summon {args: {}}` to summon your body rig.
6. You should see the head rig mounted on top of the body rig.

From here, you can use your own commands to adjust the `head` rig's rotation as needed.

:::admonition type=info title=Example
To match the `head` rig's rotation to the `head_locator`'s rotation, you can add the following command to the `head_locator`'s [On Tick Commands](/docs/the-blueprint-format/locators#on-tick-commands):

```rust"
rotate @s ~ ~
```

Or, if you wanted it to face the opposite direction:

```rust"
rotate @s ~180 ~
```

:::

## Common Issues

### The `head` rig falls behind the `body` rig when moving.

1. Open up the exported Data Pack, and locate `datapack/animated_java/data/animated_java/tags/function/global/root/on_tick.json`.
2. Make sure the `head` rig's `on_tick` function is listed _after_ the `body` rig's `on_tick` function.
3. You can manually reorder the functions in this file, or rename the `head` rig to `z_head` to force it to be listed last.
