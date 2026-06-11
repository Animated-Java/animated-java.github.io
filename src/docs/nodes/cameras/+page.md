---
title: Cameras
description: A node that represents a positional/rotational anchor for camera-based commands.
---

# Cameras

Cameras are positional anchors that track a specific point in space as your rig animates. They are useful for attaching player view effects, executing commands at specific view positions, or tracking a point of interest relative to the rig.

## Installing the Camera Plugin

Animated Java does not include camera nodes by default. To use cameras, you must install the [Camera Plugin](https://www.blockbench.net/plugins/cameras) from the Blockbench plugin library.

## Entity Creation

A Camera always creates a `minecraft:item_display` entity when exported. Unlike bone entities, cameras are **not passengers** of the root entity — they are free-floating entities that are repositioned every tick by the rig's tick function using smooth teleportation (`teleport_duration: 2`).

Their position and rotation is stored as `{px, py, pz, rx, ry}` in the rig's data storage entry under `entry.data.cameras.<name>`, and updated each tick from the current animation frame.

## What Cameras Are Good For

-   **Spectator-mode view anchors** — Teleport a spectator player to the camera entity each tick to get a first-person view from within the rig.
-   **Positional effects** — Spawn particles, play sounds, or run commands at an animated position that isn't tied to a physical bone.
-   **Animation-driven targeting** — Point the camera at something of interest and have the engine track it automatically as the animation plays.

## Camera Config

Cameras have no additional configuration dialog beyond what is set in Blockbench. Position, rotation, and animation are controlled in the standard Blockbench viewport and timeline.

## Accessing Camera Entities

Use the `as_camera` [utility function](/docs/function-api/utilities#camera-functions):

```mcfunction
#ARGS: {name: string, command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/as_camera {name: "eye", command: "ride @s mount @p"}
```

## Notes

-   Cameras do not render any visible geometry in Minecraft — the `item_display` entity they create is invisible. They are purely positional anchors.
-   Only position and two-axis rotation (`rx`, `ry`) are stored per-frame. Camera roll is not supported.
