---
title: Item Model Properties
description: Tint a bone's faces in-game with vanilla tint sources.
---

# Item Model Properties

Item Model Properties control how a bone's faces are **tinted** in-game. A tint multiplies a face's texture by a color, which lets you recolor parts of a rig without making new textures. For example, you could tint a shirt with the color of the player's team, or a potion bottle with its potion's color.

Open it by right-clicking a [Group](/docs/nodes/groups) that contains Cubes and choosing **Item Model Properties**. Requires **Minecraft 1.21.4 or newer**.

## How Tints Work

1. In Blockbench, set the **Tint** of the faces you want to recolor to a tint index (`0`, `1`, `2`, …) in the face properties of the UV panel.
2. In Item Model Properties, add one tint per index. The first tint in the list is index `0`, the second is index `1`, and so on.

Faces without a tint index are never tinted.

If a bone has no tints configured, Animated Java gives it a white **Dye** tint at index `0`. Faces with tint index `0` can then be recolored in-game by setting the bone item's `minecraft:dyed_color` component.

## Tint Types

Each tint has a **Type**. Click a tint to show its settings.

| Type                  | Color comes from                                                                 |
| --------------------- | -------------------------------------------------------------------------------- |
| **Constant**          | Always the same color.                                                           |
| **Dye**               | The item's `dyed_color` component.                                               |
| **Firework**          | The colors of the item's firework explosion component.                           |
| **Potion**            | The color of the item's potion contents.                                         |
| **Map Color**         | The item's map color component. Not available in Minecraft 26.3 and newer.       |
| **Team**              | The team color of the entity displaying the item.                                |
| **Grass**             | The grass colormap, at a set **Temperature** and **Downfall** (each `0` to `1`). |
| **Custom Model Data** | An entry in the item's `custom_model_data` colors list, picked by **Index**.     |

Every type except Constant and Grass also has a **Default Color**, used when the item doesn't have the component (or, for Team, when the entity isn't on a team with a color).

:::note[Transparency]
Alpha only works on **Dye** and **Firework** tints, and only because of a vanilla bug ([MC-278626](https://bugs.mojang.com/browse/MC-278626)). It may stop working in a future Minecraft version. With cutout textures, faces below about 10% alpha disappear, and the rest render fully opaque.
:::

If your Target Minecraft Version doesn't support a tint's type, the dialog warns you, and exporting fails until you change or remove it.

## Related Reading

-   [Groups](/docs/nodes/groups)
-   [Cubes](/docs/nodes/cubes#supported-features)
