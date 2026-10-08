---
title: Cubes
description: A node that renders a cube element.
---

# Cubes

Cubes are the building blocks of your custom models. They work just like standard Blockbench cubes, and are exported as item models.

## Entity Creation

Cubes don't create entities of their own. Each Cube is baked into the model of the [Group](/docs/nodes/groups) it's in, and that Group's `item_display` entity renders it.

## Supported Features

-   #### Tint Index

    A face's **Tint** marks it for recoloring in-game. On Minecraft 1.21.4 and newer, choose what color each tint index uses in the Group's [Item Model Properties](/docs/configs/item-model-properties).

-   #### Light Emission

    Makes the Cube render at a fixed brightness, no matter how dark its surroundings are. Great for eyes, screens, and other glowing details.

-   #### Rescale

    Scales a rotated Cube's faces by 1 / cos(angle), so it still fills the same width after rotating, like vanilla models.

## Rotation Limitations

Cube rotations follow Minecraft's item model rules, which depend on your [Target Minecraft Version](/docs/core-concepts/blueprints#target-minecraft-version):

| Minecraft Version | Rotation rules                                           |
| ----------------- | -------------------------------------------------------- |
| 1.20.4 – 1.21.5   | One axis at a time, in 22.5° steps between -45° and 45°. |
| 1.21.6 – 1.21.10  | One axis at a time, any angle.                           |
| 1.21.11 and newer | Any rotation, on any axes.                               |

Animated Java enforces these rules for your target version. Cubes that break them are outlined in red, and exporting fails until they're fixed.

:::tip
Need a Cube at a rotation your version doesn't allow? Put it in a [Group](/docs/nodes/groups) and rotate the Group instead. Groups can rotate freely on every version.
:::

## Size Limitations

Minecraft limits how big an item model can be, but Animated Java works around it: Cubes can be any size.
