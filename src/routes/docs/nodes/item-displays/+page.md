---
title: Item Displays
description: A node that renders an item model.
---

# Item Displays

Item Displays render a vanilla Minecraft item model in the world. They can be animated just like [Groups](/docs/nodes/groups) - position, rotation, and scale keyframes are all supported.

<img src="/images/docs/nodes/item-displays/example1.png" alt="Item Display example"/>

## Element Options

-   #### Displayed Item

    The namespaced ID of the item to display (e.g. `minecraft:diamond_sword`, `minecraft:oak_log`).

    The item is validated against the Minecraft item registry for the selected target version. Invalid items are highlighted with a warning.

-   #### Item Display Mode

    Controls how the item model is oriented for display. This corresponds to Minecraft's `item_display` NBT field.

    -   `none` — Default orientation.
    -   `thirdperson_righthand` / `thirdperson_lefthand` — Third-person hand display orientation.
    -   `firstperson_righthand` / `firstperson_lefthand` — First-person hand display orientation.
    -   `head` — Head slot display orientation.
    -   `gui` — GUI inventory display orientation.
    -   `ground` — Ground (dropped item) display orientation.
    -   `fixed` — Fixed display orientation (item frame).

## Entity Creation

An Item Display always creates a `minecraft:item_display` entity when exported.

## Display Entity Config

Right-click on an Item Display node in the outliner and select **Display Entity Config** to open its configuration.

See [Configs / Display Entity](/docs/configs/display-entity).
