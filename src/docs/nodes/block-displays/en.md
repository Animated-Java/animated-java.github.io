---
title: Block Displays
description: A node that renders a block model.
---

# Block Displays

Block Displays render a Minecraft block in your rig. They can be animated just like [Groups](/docs/nodes/groups).

<img src="/images/docs/nodes/block-displays/example1.png" alt="Block Display example"/>

## Element Options

-   #### Block

    The block to display, written like in the `/setblock` command. Set it in the **Block** panel.

    **Examples:**

    -   `minecraft:stone`
    -   `minecraft:redstone_lamp[lit=true]`
    -   `minecraft:oak_stairs[half=top,shape=outer_left]`

    <img src="/images/docs/nodes/block-displays/example2.png" alt="A lit redstone lamp"/>

    The **Blockstates** dropdowns below the field list every property of the block, so you can pick its state without typing it.

    The block is checked against the block registry of your Target Minecraft Version. Invalid blocks get a warning.

    <img src="/images/docs/nodes/block-displays/example3.png" alt="An invalid blockstate"/>

    :::warning[What doesn't render]
    Minecraft can't render everything in a Block Display:

    -   Fluids, like water and lava, don't render.
    -   Mob heads don't render. Use an [Item Display](/docs/nodes/item-displays) instead.
    -   The `facing` property isn't supported. Rotate the Block Display instead.

    :::

-   #### Pivot

    Block Displays rotate and scale around their pivot point. Move it with Blockbench's pivot tool.

## Entity Creation

A Block Display always creates a `block_display` entity.

## Display Entity Config

Right-click a Block Display in the Outliner and choose **Display Entity Config**. See [Display Entity Config](/docs/configs/display-entity).
