---
title: Animations
description: How to control animations on a Rig instance.
---

## Overview

Animated Java generates a set of functions for each animation defined in your Blueprint. All animation functions must be executed **as the root entity** of a rig instance.

## Function Reference

All functions below live at `<blueprint_id>/animations/<animation_name>/...`.

Replace `<blueprint_id>` and `<animation_name>` with your values. Functions must be executed **as the root entity**.

### play

Starts playing the animation from frame 0. Does not affect other currently-playing animations.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/walk/play
```

### play_exclusive

Pauses all other animations on this rig, then starts playing this animation from frame 0.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/attack/play_exclusive
```

### stop

Pauses all animations and resets the rig back to its default pose.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/walk/stop
```

### pause

Freezes the animation at its current frame.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/walk/pause
```

### resume

Resumes the animation from the frame it was paused on.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/walk/resume
```

### next_frame

Manually advances the animation by exactly one frame, handling loop wrapping internally. Useful for step-by-step control.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/walk/next_frame
```

### set_frame

Seeks the animation to a specific frame **without** triggering keyframe effects (locator callbacks, variant keyframes, function keyframes). The pose is snapped instantly.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/walk/set_frame {frame: 5}
```

### apply_frame

Seeks to a specific frame **and** triggers all keyframe effects for that frame.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/walk/apply_frame {frame: 5}
```

### tween

Smoothly interpolates from the rig's **current pose** into a specific frame of this animation over a given number of ticks. All currently-playing animations are paused during the tween.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/walk/tween {duration: 10, to_frame: 0}
```

-   **`duration`** — The number of ticks the transition takes.
-   **`to_frame`** — The target animation frame to interpolate to.

:::tip[How Tweening Works]
Tweening exploits Minecraft's display entity interpolation: Animated Java sets the current pose as `frame 0` of the tween and the target pose as `frame to_frame`, then sets `interpolation_duration` on all bone entities to `duration` ticks. Minecraft smoothly lerps between the two poses over that many ticks.
:::

### pause_all

Pauses every animation on this rig simultaneously.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/pause_all
```

## Keyframe Types

In addition to transform keyframes, animations support two special keyframe types in Blockbench's **Effects** channel:

-   **Variant Keyframe** — Applies a named variant at a specific frame. Add it in the Effects timeline and select the variant to apply.
-   **Function Keyframe** — Runs an arbitrary MCfunction at a specific frame. The function is executed `as` and `at` the root entity.

## Playing Multiple Animations Simultaneously

Since animations only update the bones in their `modified_nodes` set, you can play multiple animations at the same time — as long as they affect **different bones**.

```mcfunction
# Play a walk cycle and an upper-body attack at the same time
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/walk/play
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/attack/play
```

Configure which bones each animation controls using **Excluded Nodes** in [Animation Properties](#animation-properties).
