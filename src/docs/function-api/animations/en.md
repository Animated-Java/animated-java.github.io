---
title: Animations
description: How to control animations on a Rig instance.
---

# Animations

Animated Java generates a set of functions for every animation in your Blueprint:

```
<blueprint_id>/animations/<animation>/<function>
```

`<animation>` is the animation's exported name: lowercase, with anything other than letters, digits, and underscores (including periods) turned into `_`.

Every function on this page must be run **as the root entity** of a rig.

## Playing

### play

Starts the animation from frame `0`. Other playing animations keep playing.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/walk/play
```

### play_exclusive

Pauses every other animation on the rig, then starts this one from frame `0`.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/attack/play_exclusive
```

### pause

Freezes the animation on its current frame.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/walk/pause
```

### resume

Continues the animation from the frame it was paused on.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/walk/resume
```

### stop

Pauses every animation on the rig and snaps it to this animation's first frame.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/walk/stop
```

### pause_all

Pauses every animation on the rig. Lives at `<blueprint_id>/animations/pause_all`.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/pause_all
```

## Jumping to a Frame

These change the rig's pose without playing the animation. Both run the frame's [keyframe effects](/docs/core-concepts/animations#effect-keyframes), like Variant and Function keyframes.

### set_frame

Snaps the rig to a frame instantly.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/walk/set_frame {frame: 5}
```

### apply_frame

Moves the rig to a frame, smoothly over the rig's [Interpolation Duration](/docs/core-concepts/blueprints#interpolation-duration).

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/walk/apply_frame {frame: 5}
```

### next_frame

Applies the animation's next frame, looping back to the start after the last one. Useful for stepping through an animation at your own pace.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/walk/next_frame
```

## Tweening

Tweening smoothly blends the rig from its **current pose** into a frame of another animation, so you can switch animations without the rig snapping.

### tween

Pauses every other animation, blends into `to_frame` over `duration` ticks, then plays the animation from there.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/walk/tween {duration: 10, to_frame: 0}
```

-   **`duration`**: how many ticks the blend takes.
-   **`to_frame`**: the frame to blend into.

### tween_paused

Like `tween`, but the animation stays paused on `to_frame` once the blend finishes. Use it to ease into a pose, then decide when to play.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/aim/tween_paused {duration: 5, to_frame: 0}
```

:::tip[How tweening works]
Animated Java sets the rig's display entities to the target pose with their interpolation duration set to `duration`, and Minecraft blends between the two poses over that many ticks.
:::

## Default Pose

These live at the top of the Blueprint's functions, not under an animation.

### set_default_pose

Snaps the rig back to the pose it has in Edit mode. Doesn't pause any animations.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/set_default_pose
```

### apply_default_pose

Moves the rig back to its default pose smoothly, over the rig's Interpolation Duration. Only generated if the Blueprint has animations.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/apply_default_pose
```

## Playing Several Animations

Animations only move the nodes they aren't told to exclude, so you can play several at once as long as they move different nodes:

```mcfunction
# Walk with the legs while attacking with the arms
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/walk/play
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/animations/attack/play
```

Choose which nodes each animation moves with its **Excluded Nodes**, in the [Animation Config](/docs/configs/animation#excluded-nodes).

## Checking Animation State

While an animation plays, the root entity has the `<blueprint_id>.animation.<animation>.playing` tag, and its current frame is stored in the `<blueprint_id>.<animation>.frame` scoreboard objective:

```mcfunction
# Run something while my_rig's walk animation is past frame 10
execute as @e[tag=my_pack.my_rig.root,tag=my_pack.my_rig.animation.walk.playing] if score @s my_pack.my_rig.walk.frame matches 10.. run say Halfway there!
```

## Related Reading

-   [Animations](/docs/core-concepts/animations)
-   [Animation Config](/docs/configs/animation)
