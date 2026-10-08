---
title: Groups
description: A node that contains other nodes.
---

# Groups

Groups (also called **bones**) hold other nodes, so you can move, rotate, and scale them together. They're the main tool for rigging and animating your model.

## Entity Creation

A Group that contains [Cubes](/docs/nodes/cubes) creates one `item_display` entity when exported, which renders all of its Cubes.

### Structure Groups

A Group without Cubes doesn't create an entity. These **Structure Groups** only organize and move their children, and have their own icon in the Outliner. They cost nothing in-game, so use them freely to build your rig's hierarchy.

## Rotation

Groups can rotate freely, on any axis and at any angle, on every Minecraft version. Put Cubes in a Group when they need a rotation that [Cubes can't do](/docs/nodes/cubes#rotation-limitations) on their own.

## Configuration

Right-click a Group that contains Cubes in the Outliner to open:

-   **[Display Entity Config](/docs/configs/display-entity)**: its On-Summon function, and per-Variant settings like billboard mode, brightness, glowing, and shadows.
-   **[Item Model Properties](/docs/configs/item-model-properties)**: how its faces are tinted in-game. Requires Minecraft 1.21.4 or newer.

## Related Reading

-   [Rigs](/docs/core-concepts/rigs)
-   [Tags](/docs/core-concepts/tags#hierarchy)
