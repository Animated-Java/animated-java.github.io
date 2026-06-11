---
title: Display Entity Config
description: Configure how Groups, Item Displays, Block Displays, and Text Displays behave at runtime.
---

The Display Entity Config controls properties for rendered display entities.

You can open it from the outliner context menu on supported nodes:

-   Groups
-   Item Displays
-   Block Displays
-   Text Displays

## What This Config Affects

This dialog stores two kinds of settings:

-   Node-level settings
-   Per-variant settings

### Node-level settings

These are stored once on the node:

-   On Summon Function

### Per-variant settings

These are selected using the variant dropdown in the dialog and can differ per variant:

-   On Apply Function
-   Billboard
-   Brightness override settings
-   Enchanted (not available on Text Displays)
-   Glowing (not available on Text Displays)
-   Glow color override (not available on Text Displays)
-   Shadow settings

## Field Reference

### On Summon Function

Runs when the rig is summoned for that node.

Use this for setup commands that should happen once when the node entity is created.

### Variant Selector

Selects which variant you are editing config for.

-   Default writes to the node default display config.
-   Other entries write per-variant overrides.

### On Apply Function

Runs when that variant is applied and this node has a config override for that variant.

Use this for variant-specific command logic.

### Billboard

Controls how the display entity faces the viewer:

-   Fixed: no billboard pivoting
-   Vertical: pivots on vertical axis
-   Horizontal: pivots on horizontal axis
-   Center: pivots around center

### Override Brightness

Enables explicit light override for the node.

When enabled, two values are used:

-   Sky Brightness: 0 to 15
-   Block Brightness: 0 to 15

### Enchanted

Adds the enchanted glint to applicable display entities.

This option is not available for Text Displays.

### Glowing

Enables vanilla glowing effect for applicable display entities.

This option is not available for Text Displays.

### Override Glow Color

If enabled, sets a custom glow color using Glow Color.

This option is not available for Text Displays.

### Glow Color

Hex color used when Override Glow Color is enabled.

### Shadow Radius

Controls shadow radius. Slider range in the dialog is 0 to 15.

### Shadow Strength

Controls shadow strength. Slider range in the dialog is 0 to 15.

## Important Behavior Notes

-   Per-variant settings are only applied when variant logic runs.
-   If a variant has no override for a node, the node keeps its current/default display config.
-   The Invisible flag exists internally in config data but is not currently exposed in this dialog UI.

## Copy/Paste Config

The context menu also includes:

-   Copy Display Entity Config
-   Paste Display Entity Config

This copies On Summon Function and all display config data from one supported node to another.

## Related Reading

-   [Animation Config](/docs/configs/animation)
-   [Groups](/docs/nodes/groups)
-   [Item Displays](/docs/nodes/item-displays)
-   [Block Displays](/docs/nodes/block-displays)
-   [Text Displays](/docs/nodes/text-displays)
