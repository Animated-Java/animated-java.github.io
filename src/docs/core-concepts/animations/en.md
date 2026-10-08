---
title: Animations
description: Understand how Animated Java animations are structured, evaluated, and layered on rig instances.
---

# Animations

## What is an Animation?

An **Animation** is a timeline that changes a rig's pose over time.

In Animated Java, animations do not exist globally in the world. They are evaluated **per rig instance**. If you summon the same Blueprint ten times, each rig can be playing different animations independently.

Animations primarily drive:

-   bone transforms,
-   display entity transforms,
-   variant changes,
-   function callbacks.

See the [Function API: Animations](/docs/function-api/animations) page for the runtime control functions.

## What an Animation Changes

At a high level, an animation can affect:

-   position,
-   rotation,
-   scale,
-   effect keyframes.

Transform keyframes update the rig pose. Effect keyframes trigger extra behavior such as variant changes or custom functions.

## Frames and Timing

Animation frames are zero-indexed and advance at **20 frames per second**.

-   1 tick = 1 frame
-   20 ticks = 1 second

The total frame count is based on the animation length you set in Blockbench.

For example:

-   1 second animation = 20 frames
-   2.5 second animation = 50 frames

## Loop Modes

Each animation has a **loop mode** that determines its behavior when it reaches the last frame:

-   **`once`** — Plays from frame 0 to the last frame, then stops and resets to frame 0 (the default pose).
-   **`hold`** — Plays from frame 0 to the last frame, then freezes on the last frame.
-   **`loop`** — Plays from frame 0 to the last frame, then loops back to frame 0 (with an optional **Loop Delay** in ticks).

Use these modes for different gameplay needs:

-   `once` for attacks, gestures, or one-shot actions
-   `hold` for poses like aiming, crouching, or charging
-   `loop` for idle, walk, run, fly, and repeated motion

## Loop Delay

Loop Delay adds a pause, in ticks, before a looping animation starts over.

This only matters for `loop` animations.

Use it when you want movement to feel less mechanical, such as:

-   breathing cycles,
-   blinking,
-   idle fidgets.

## Excluded Nodes

Animations support an **excluded nodes** list. Bones in this list are skipped during that animation and receive no transform updates. This lets multiple animations play simultaneously on the same rig — one animation drives the body, another drives the arms, for example.

This is the main tool for animation layering.

Example:

-   A walk animation controls hips and legs.
-   An attack animation controls torso and arms.
-   Because they affect different nodes, both can run at the same time.

## Playing Multiple Animations at Once

Animated Java allows multiple animations to run simultaneously on the same rig instance, as long as they do not compete for the same nodes.

If two animations both try to drive the same bone, you should expect conflicts.

Good layering patterns include:

-   locomotion + upper body action
-   facial animation + body animation
-   additive idle motion + held pose

## Keyframe Types

Animations are not limited to transform keyframes.

### Transform keyframes

These define the pose of nodes over time.

### Variant keyframes

Variant keyframes switch the rig to a different Variant at a specific frame.

Use these for:

-   expression swaps,
-   costume swaps,
-   toggling model states.

### Function keyframes

Function keyframes run custom MCfunction logic at a specific frame.

Use them for:

-   particles,
-   sounds,
-   gameplay events,
-   syncing scripted behavior to motion.

## Animation State

Each live rig tracks its own animation state internally.

That means:

-   one rig can be idle,
-   another can be walking,
-   another can be paused on frame 12,
-   another can be tweening into a new pose.

This is why animation control functions must be run **as the rig root entity**.

## Tweening and Pose Changes

Animated Java can smoothly transition a rig from its current pose into a target animation frame.

This is especially useful when:

-   entering or exiting a pose,
-   switching between movement states,
-   preventing harsh snapping between animations.

See the [Function API: Animations](/docs/function-api/animations) page for the runtime tween functions.

## Animation Properties

In Blockbench, right-click an animation in the **Animations** panel and select **Animation Properties** to configure:

-   **Name** — Must only contain `[a-zA-Z0-9_.]`. Used in function paths and storage keys.
-   **Loop Mode** — `once`, `hold`, or `loop`.
-   **Loop Delay** — Ticks to wait before looping. Only relevant when loop mode is `loop`.
-   **Excluded Nodes** — Bones that this animation does not affect.

For a full field-by-field breakdown, see the [Animation Config](/docs/configs/animation) page.

## Practical Guidelines

-   Use Excluded Nodes aggressively to reduce the number of NBT modifications per tick.
-   Prefer `hold` over custom stop logic when you need a persistent final pose.
-   Use function keyframes for timing-sensitive events instead of manually checking frames in unrelated tick logic.
-   Keep animation names stable once datapack code depends on them.

## Related Reading

-   [Rigs](/docs/core-concepts/rigs)
-   [Animation Config](/docs/configs/animation)
-   [Function API: Animations](/docs/function-api/animations)
-   [Variants](/docs/function-api/variants)
