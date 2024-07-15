---
title: Controlling a Rig Instance
description: Learn how to control a Rig Instance.
---

# { $frontmatter.title }

## Selecting the Rig Instance

Before we can control a Rig Instance, we need to be able to select it. The following selectors can be used to select Rig Instances:

```rust title=Select all Rig Instances | copy
@e[type=item_display,tag=aj.rig_root]
```

```rust title=Select all Rig Instances from a specific Blueprint | copy
@e[type=item_display, tag=aj.<export_namespace>.root]
```

## Moving and Rotating the Rig Instance

Similar to how we control normal entities in Minecraft, we can move and rotate Rig Instances using the `tp` command.

```rust title=Move a Rig Instance 5 blocks towards positive X | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] at @s run \
	tp @s ~5 ~ ~
```

```rust title=Rotate a Rig Instance 90 degrees | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] at @s run \
	tp @s ~ ~ ~ ~90 ~
```

## Controlling Animation Playback

Animation playback is controlled using functions. Each animation has a set of functions that can be called to control it. Animation functions _must_ be ran as the root entity of the Rig Instance.

### Play Function

Starts playing the animation from the beginning.

```rust title=Play the walk animation | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] run \
	function animated_java:<export_namespace>/animations/walk/play
```

### Pause Function

Pauses the animation at the current frame.

```rust title=Pause the walk animation | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] run \
	function animated_java:<export_namespace>/animations/walk/pause
```

### Resume Function

Resumes the animation from the current frame.

```rust title=Resume the walk animation | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] run \
	function animated_java:<export_namespace>/animations/walk/resume
```

### Stop Function

Stops the animation and resets it to the beginning.

```rust title=Stop the walk animation | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] run \
	function animated_java:<export_namespace>/animations/walk/stop
```

### Apply Frame Function

Sets the animation to a specific frame with interpolation.

#### Arguments

| Name    | Type    | Description                        |
| ------- | ------- | ---------------------------------- |
| `frame` | Integer | The frame to set the animation to. |

```rust title=Set the walk animation to frame 10 with interpolation | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] run \
	function animated_java:<export_namespace>/animations/walk/apply_frame {frame: 10}
```

### Set Frame Function

Sets the animation to a specific frame instantly without interpolation.

#### Arguments

| Name    | Type    | Description                        |
| ------- | ------- | ---------------------------------- |
| `frame` | Integer | The frame to set the animation to. |

```rust title=Set the walk animation to frame 10 | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] run \
	function animated_java:<export_namespace>/animations/walk/set_frame {frame: 10}
```

#### Tween Function

Pauses all currently playing animations, and smoothly transitions to the target frame of this animation over the duration, then resumes the animation from the target frame.

#### Arguments

| Name       | Type    | Description                              |
| ---------- | ------- | ---------------------------------------- |
| `to_frame` | Integer | The frame of this animation to tween to. |
| `duration` | Integer | The duration of the tween in ticks.      |

```rust title=Smoothly transition the walk animation to frame 10 over a second | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] run \
	function animated_java:<export_namespace>/animations/walk/tween {to_frame: 10, duration: 20}
```

## Applying Variants

Variants can be applied to the Rig Instance using the desired Variant's `apply` function.

```rust title=Apply the angry Variant | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] run \
	function animated_java:<export_namespace>/variants/angry/apply
```

There is no way to remove a Variant individually once it has been applied. To reset the Variant to it's default state, you can apply the default Variant.

```rust title=Apply the default Variant | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] run \
	function animated_java:<export_namespace>/variants/default/apply
```

:::admonition type=warning
Applying the default Variant _will not_ remove any NBT the Variant has modified due to bone configs.

You will have to manually reset the NBT to it's default state, or re-summon the Rig Instance.
:::
