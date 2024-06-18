---
title: Controlling a Rig Instance
description: Learn how to control a Rig Instance.
---

# { $frontmatter.title }

## Selecting the Rig Instance

Before we can control a Rig Instance, we need to be able to select it. The following selectors can be used to select Rig Instances:

```html title=Select all Rig Instances | copy
@e[type=item_display,tag=aj.rig_root]
```

```html title=Select all Rig Instances from a specific Blueprint | copy
@e[type=item_display, tag=aj.<export_namespace>.root]</export_namespace>
```

## Moving and Rotating the Rig Instance

Similar to how we control normal entities in Minecraft, we can move and rotate Rig Instances using the `tp` command.

```html title=Move a Rig Instance 5 blocks towards positive X | copy
execute as @e[type=item_display,tag=aj.<export_namespace
	>.root] at @s run \ tp @s ~5 ~ ~</export_namespace
>
```

```html title=Rotate a Rig Instance 90 degrees | copy
execute as @e[type=item_display,tag=aj.<export_namespace
	>.root] at @s run \ tp @s ~ ~ ~ ~90 ~</export_namespace
>
```

## Controlling Animation Playback

Animation playback is controlled using functions. Each animation has a set of functions that can be called to control it. Animation functions _must_ be ran as the root entity of the Rig Instance.

### Play Function

Starts playing the animation from the beginning.

```html title=Play the walk animation | copy
execute as @e[type=item_display,tag=aj.<export_namespace
	>.root] run \ function animated_java:<export_namespace
		>/animations/walk/play</export_namespace
	></export_namespace
>
```

### Pause Function

Pauses the animation at the current frame.

```html title=Pause the walk animation | copy
execute as @e[type=item_display,tag=aj.<export_namespace
	>.root] run \ function animated_java:<export_namespace
		>/animations/walk/pause</export_namespace
	></export_namespace
>
```

### Resume Function

Resumes the animation from the current frame.

```html title=Resume the walk animation | copy
execute as @e[type=item_display,tag=aj.<export_namespace
	>.root] run \ function animated_java:<export_namespace
		>/animations/walk/resume</export_namespace
	></export_namespace
>
```

### Stop Function

Stops the animation and resets it to the beginning.

```html title=Stop the walk animation | copy
execute as @e[type=item_display,tag=aj.<export_namespace
	>.root] run \ function animated_java:<export_namespace
		>/animations/walk/stop</export_namespace
	></export_namespace
>
```

### Apply Frame Function

Sets the animation to a specific frame with interpolation.

#### Arguments

- `frame` (int): The frame to set the animation to.

```html title=Set the walk animation to frame 10 with interpolation | copy
execute as @e[type=item_display,tag=aj.<export_namespace
	>.root] run \ function animated_java:<export_namespace
		>/animations/walk/apply_frame {frame: 10}</export_namespace
	></export_namespace
>
```

### Set Frame Function

Sets the animation to a specific frame instantly without interpolation.

#### Arguments

- `frame` (int): The frame to set the animation to.

```html title=Set the walk animation to frame 10 | copy
execute as @e[type=item_display,tag=aj.<export_namespace
	>.root] run \ function animated_java:<export_namespace
		>/animations/walk/set_frame {frame: 10}</export_namespace
	></export_namespace
>
```

#### Tween Function

Pauses all currently playing animations, and smoothly transitions to the target frame of this animation over the duration, then resumes the animation from the target frame.

#### Arguments

- `to_frame` (int): The frame of this animation to tween to.
- `duration` (int): The duration of the tween in ticks.

```html title=Smoothly transition the walk animation to frame 10 over a second | copy
execute as @e[type=item_display,tag=aj.<export_namespace
	>.root] run \ function animated_java:<export_namespace
		>/animations/walk/tween {to_frame: 10, duration: 20}</export_namespace
	></export_namespace
>
```

## Applying Variants

Variants can be applied to the Rig Instance using the desired Variant's `apply` function.

```html title=Apply the angry Variant | copy
execute as @e[type=item_display,tag=aj.<export_namespace
	>.root] run \ function animated_java:<export_namespace
		>/variants/angry/apply</export_namespace
	></export_namespace
>
```

There is no way to remove a Variant individually once it has been applied. To reset the Variant to it's default state, you can apply the default Variant.

```html title=Apply the default Variant | copy
execute as @e[type=item_display,tag=aj.<export_namespace
	>.root] run \ function animated_java:<export_namespace
		>/variants/default/apply</export_namespace
	></export_namespace
>
```

:::admonition type=warning
Applying the default Variant _will not_ remove any NBT the Variant has modified due to bone configs.

You will have to manually reset the NBT to it's default state, or re-summon the Rig Instance.
:::
