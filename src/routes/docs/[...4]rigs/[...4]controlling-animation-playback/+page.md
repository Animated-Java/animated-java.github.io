---
title: Controlling Animation Playback
description: Learn how to control the playback of Animations.
---

# { $frontmatter.title }

{ $frontmatter.description }

Animation playback is controlled using functions. Each animation has a set of functions that can be called to control it. Animation functions _must_ be ran [as the root entity](/docs/rigs/controlling-a-rig-instance#selecting-the-rig-instance) of the Rig Instance.

### Play Function

Starts playing the animation from the beginning.

```rust title=Play the walk animation | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] run \
	function animated_java:<export_namespace>/animations/<animation_name>/play
```

### Pause Function

Pauses the animation at the current frame.

```rust title=Pause the walk animation | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] run \
	function animated_java:<export_namespace>/animations/<animation_name>/pause
```

### Resume Function

Resumes the animation from the current frame.

```rust title=Resume the walk animation | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] run \
	function animated_java:<export_namespace>/animations/<animation_name>/resume
```

### Stop Function

Stops the animation and resets it to the beginning.

```rust title=Stop the walk animation | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] run \
	function animated_java:<export_namespace>/animations/<animation_name>/stop
```

### Apply Frame Function

Sets the animation to a specific frame with interpolation.

#### Arguments

| Name    | Type    | Description                        |
| ------- | ------- | ---------------------------------- |
| `frame` | Integer | The frame to set the animation to. |

```rust title=Set the walk animation to frame 10 with interpolation | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] run \
	function animated_java:<export_namespace>/animations/<animation_name>/apply_frame {frame: 10}
```

### Set Frame Function

Sets the animation to a specific frame instantly without interpolation.

#### Arguments

| Name    | Type    | Description                        |
| ------- | ------- | ---------------------------------- |
| `frame` | Integer | The frame to set the animation to. |

```rust title=Set the walk animation to frame 10 | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] run \
	function animated_java:<export_namespace>/animations/<animation_name>/set_frame {frame: 10}
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
	function animated_java:<export_namespace>/animations/<animation_name>/tween {to_frame: 10, duration: 20}
```
