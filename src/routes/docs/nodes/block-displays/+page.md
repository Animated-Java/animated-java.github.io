---
title: Block Displays
description: A node that renders a block model.
---

# Block Displays

Block Displays render a vanilla Minecraft block in the world. They can be animated just like [Groups](/docs/nodes/groups).

<img src="/images/docs/nodes/block-displays/example1.png" alt="Block Display example"/>

## Element Options

-   #### Displayed Block

    The block state string of the block to display. Written in the same format as the `/setblock` command.

    **Examples:**

    -   `minecraft:stone`
    -   `minecraft:redstone_lamp[lit=true]`
    -   `minecraft:oak_stairs[facing=north,half=bottom,shape=straight]`

    <img src="/images/docs/nodes/block-displays/example2.png" alt="A lit redstone lamp"/>

    The block state is validated against the Minecraft block registry for the selected target version. Invalid blocks are highlighted with a warning in the viewport.

    <img src="/images/docs/nodes/block-displays/example3.png" alt="An invalid blockstate"/>

## Entity Creation

A Block Display always creates a `minecraft:block_display` entity when exported.

## Display Entity Config

Right-click on a Block Display node in the outliner and select **Display Entity Config** to open its configuration.

See [Configs / Display Entity](/docs/configs/display-entity).
