---
title: Cubes
description: A node that renders a cube element.
---

# Cubes

Cubes are the fundamental building blocks of custom models in Animated Java. They work exactly the same as standard Blockbench cubes, and produce custom item model JSON when exported.

## Entity Creation

Cubes do **not** create their own entities when exported. Instead, they are baked into the item model JSON of their parent [Group](/docs/nodes/groups). The parent Group's `minecraft:item_display` entity renders the cube geometry.

## Supported Features

-   #### Tint Index

    Cubes support Minecraft's tint index feature for coloring faces based on biome color maps (e.g. grass, foliage, water tints). Set in the cube's face properties.

-   #### Light Emission

    Allows the cube to emit a constant brightness level regardless of the ambient lighting in the world. Useful for glowing elements like eyes or screens.

-   #### Rescale

    Allows bone entities to be rendered slightly larger than their nominal size by enabling the vanilla `rescale` flag in the model JSON.

## Rotation Limitations

Cube rotations in Animated Java follow the same rules as vanilla Minecraft item models:

### For Minecraft 1.20.4 - 1.21.5:

-   Cubes can only be rotated on **one axis at a time**.
-   Rotation values are limited to **22.5-degree increments** (0°, 22.5°, 45°, -22.5°, -45°).

### For Minecraft 1.21.6 - 1.21.10:

-   Cubes can only be rotated on **one axis at a time**.

### For Minecraft 1.21.11 and above:

-   There are no rotation limitations for cubes in Minecraft 1.21.11 and above — cubes can be rotated freely on all axes with no restrictions.

Animated Java will automatically enforce these limitations based on the target Minecraft version selected in your Blueprint settings.

:::tip
If you need a cube at an arbitrary rotation on a version that doesn't support it, place it inside a [Group](/docs/nodes/groups) and rotate the Group instead. Groups (bones) have no rotation restrictions.
:::

## Size Limitations

Unlike vanilla Minecraft item models, Animated Java **removes all size limits** — cubes can be any size.
