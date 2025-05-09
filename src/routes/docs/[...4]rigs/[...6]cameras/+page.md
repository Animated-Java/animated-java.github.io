---
title: Interacting with Cameras
description: Cameras are specialized Locators optimized to orient a player's screen, and can be used to create cutscenes, custom player perspectives, and more. This page explains how to interact with Cameras in your Rig Instance using commands.
---

# { $frontmatter.title }

{ $frontmatter.description }

## Force the Player to Spectate a Camera

### As Camera - `animated_java:<export_namespace>/as_camera`

Runs a command as **_and at_** a specific camera's entity.

#### Arguments

| Name      | Type   | Description                                   |
| --------- | ------ | --------------------------------------------- |
| `name`    | String | The name of the camera to run the command as. |
| `command` | String | The command to run as the camera.             |

:::admonition type="info" title="Example"

```rust title=Running a command as a camera | copy
execute as @e[tag=aj.<export_namespace>.root] run \
  function animated_java:<export_namespace>/as_camera \
    {name: '<camera_name>', command:'say Hello, World!'}
```

:::
