---
title: Display Entity Config
description: Configure how Groups, Item Displays, Block Displays, and Text Displays behave at runtime.
---

# Display Entity Config

The Display Entity Config controls the in-game settings of a node's display entity. Open it by right-clicking a node in the Outliner and choosing **Display Entity Config**. It's available on:

-   [Groups](/docs/nodes/groups) that contain Cubes,
-   [Item Displays](/docs/nodes/item-displays),
-   [Block Displays](/docs/nodes/block-displays),
-   [Text Displays](/docs/nodes/text-displays).

The dialog has two pages: **General** settings that never change, and **Per-Variant** settings that can be different for each [Variant](/docs/core-concepts/variants).

## General

-   #### On-Summon Function

    Commands that run `as` the node's entity when the rig is summoned. Supports [MC-Build](https://mcbuild.dev) syntax.

## Per-Variant

-   #### Target Variant

    Which Variant you're editing settings for. **Default** sets the node's base settings. Any other Variant sets what the node changes to when that Variant is applied.

-   #### On-Apply Function

    Commands that run `as` the node's entity when the Target Variant is applied.

-   #### Billboard

    Whether the entity turns to face the player:

    -   **Fixed**: never turns.
    -   **Vertical**: turns around the vertical axis.
    -   **Horizontal**: turns around the horizontal axis.
    -   **Center**: turns around both axes.

-   #### Override Brightness

    Ignores the world's lighting and uses fixed **Sky Brightness** and **Block Brightness** values instead, each from `0` to `15`.

-   #### Enchanted

    Adds the enchantment glint. Not available on Block Displays or Text Displays.

-   #### Glowing

    Gives the entity a glowing outline. Not available on Text Displays.

-   #### Override Glow Color

    Overrides the color of the glowing outline. Not available on Text Displays.

-   #### Shadow Radius

    The radius of the entity's shadow.

-   #### Shadow Strength

    How dark the entity's shadow is.

## How Per-Variant Settings Apply

-   Applying a Variant applies its settings to every node that has them, and runs their On-Apply functions.
-   Nodes without settings for a Variant keep whatever they had before.
-   Applying the Default Variant restores every node's Default settings.

## Copying Settings

The node's context menu also has **Copy Display Entity Config** and **Paste Display Entity Config**. They copy the On-Summon Function and every per-Variant setting from one node to another.

## Related Reading

-   [Variants](/docs/core-concepts/variants)
-   [Groups](/docs/nodes/groups)
-   [Text Displays](/docs/nodes/text-displays)
