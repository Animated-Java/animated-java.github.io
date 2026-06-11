---
title: Groups
description: A node that contains other nodes.
---

# Groups

Groups (also called **bones**) are used to create hierarchies and to apply transformations to multiple nodes at once. They are the primary tool for rigging and animating a model in Animated Java.

## Entity Creation

A Group only creates a `minecraft:item_display` entity when exported if it has [Cube](/docs/nodes/cubes) children. Otherwise, it is only used for organizational and rigging purposes in the editor.

:::tip
Groups without Cube children are called **Structure Groups**, and have a unique icon in the editor to distinguish them from regular Groups. Structure Groups are free — they don't create an entity and cost nothing at runtime.
:::

## Display Entity Config

Because Groups that contain Cubes create a `minecraft:item_display` entity, they expose the full **Display Entity Config**. Right-click on the group in the outliner and select **Display Entity Config** to open it.

The config has a **global** section (applies regardless of variant) and a **per-variant** section (can be different for each variant).

### Global Options

-   #### On-Summon Function

    Commands executed `as` and `at` this entity when it is summoned.

    All functions support [MC-Build](https://mcbuild.dev) syntax.

### Per-Variant Options

These options can be configured independently for each variant using the **Variant** selector at the top of the config dialog.

-   #### On-Apply Function

    Commands executed `as` this entity when the selected variant is applied to the rig.

-   #### Billboard

    Controls whether the bone entity pivots to face the player.

    -   `fixed` — No billboarding. The entity faces its rigged direction.
    -   `horizontal` — Pivots around the vertical axis to face the player.
    -   `vertical` — Pivots around the horizontal axis to face the player.
    -   `center` — Always faces the player around both axes.

-   #### Override Brightness

    When enabled, the entity ignores ambient lighting and uses the specified sky and block brightness values instead.

    -   **Sky Brightness** — Sky light level (0–15).
    -   **Block Brightness** — Block light level (0–15).

-   #### Enchanted

    Adds the enchantment glint effect to the bone's item model. Useful for making a glowing sword, magic item, or highlight effect.

-   #### Glowing

    Makes the entity emit a glow outline (as if it has the glowing status effect).

    -   **Override Glow Color** — When enabled, uses a custom color for the glow outline.
    -   **Glow Color** — The hex color for the glow outline.

-   #### Shadow Radius

    The radius of the entity's circular shadow, in blocks. Set to `0` to disable the shadow.

-   #### Shadow Strength

    The opacity of the shadow (0.0 – 1.0).
