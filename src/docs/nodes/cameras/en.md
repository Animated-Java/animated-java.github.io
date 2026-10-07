---
title: Cameras
description: A node that represents a positional/rotational anchor for camera-based commands.
---

# Cameras

Cameras are invisible anchors that follow your rig as it animates. Use them to put a player's view inside a cutscene, or to track a moving point of interest.

## Installing the Camera Plugin

Camera nodes come from Blockbench's [Cameras plugin](https://www.blockbench.net/plugins/cameras). Install it to add Cameras to your Blueprints.

## Entity Creation

A Camera always creates an invisible `item_display` entity. Like Locators and Interactions, it isn't a passenger: Animated Java teleports it into place every tick (see [Floating Entities](/docs/core-concepts/rigs#floating-entities)), with a teleport duration of 2 ticks so it moves smoothly.

Cameras track their position and two axes of rotation (pitch and yaw). Camera roll isn't supported.

## Uses

-   **Cutscenes:** have a spectator player [spectate](https://minecraft.wiki/w/Commands/spectate) the Camera to see through it.
-   **Positional effects:** spawn particles or play sounds at a moving point that isn't attached to a bone.

## Accessing Cameras In-Game

Use the [`as_camera`](/docs/function-api/utilities#as_camera) function:

```mcfunction
# Make the nearest spectator watch through the "eye" Camera
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/as_camera {name: "eye", command: "spectate @s @p[gamemode=spectator]"}
```
