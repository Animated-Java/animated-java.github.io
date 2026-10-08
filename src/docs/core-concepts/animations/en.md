---
title: Animations
description: Understand how Animated Java animations are structured, evaluated, and layered on rig instances.
---

# Animations

## What is an Animation?

An **Animation** is a timeline that moves a rig's nodes over time, and can switch [Variants](/docs/core-concepts/variants) and [Texture Slots](/docs/core-concepts/texture-slots) or run commands along the way.

Animations play **per rig instance**. If you summon the same Blueprint ten times, every instance can play a different animation, or the same one at a different frame. That's why animation functions must run **as the rig's root entity**. See [Function API: Animations](/docs/function-api/animations) for how to control them in-game.

## Frames and Timing

Animations run at **20 frames per second**, one frame per game tick, starting from frame `0`. A 1 second animation is 20 frames long, and a 2.5 second animation is 50.

## Loop Modes

Each animation's **Loop Mode** decides what happens when it reaches the last frame:

-   **Once** plays to the end, then stops and snaps back to its first frame. Good for attacks, gestures, and other one-shot actions.
-   **Hold** plays to the end, then pauses on the last frame. Good for poses like aiming or charging.
-   **Loop** starts over from the first frame, after an optional **Loop Delay** in ticks. Good for idles, walk cycles, and anything else that repeats.

Set the Loop Mode in the [Animation Properties](/docs/configs/animation) dialog.

## Keyframes

### Transform Keyframes

Position, rotation, and scale keyframes on Groups and Display nodes. Everything Blockbench offers works, including Molang expressions, Step and Smooth interpolation, and keyframes with separate pre and post values.

Keyframes with **Linear** interpolation can also use the curves in the **Keyframe Easing** panel, like Sine, Elastic, or Bounce.

Child bones follow their parent's interpolation. If a parent snaps to a keyframe with **Step** interpolation, its children snap with it.

### Effect Keyframes

The **Effects** row of the Timeline holds keyframes that change the rig instead of moving it:

-   **Variant** keyframes apply one or more [Variants](/docs/core-concepts/variants), in order. Later Variants override earlier ones on the nodes they change.
-   **Texture Slots** keyframes switch [Texture Slots](/docs/core-concepts/texture-slots) to any of their textures. Requires Minecraft 1.21.4 or newer.
-   **Function** keyframes run commands `as` and `at` the root entity. They support [MC-Build](https://mcbuild.dev) syntax.

When several happen on the same frame, they run in that order: Variants, then Texture Slots, then the Function.

Each effect keyframe has an **Execute Condition**: the condition part of an `execute` command, like `if score @s my_score matches 1..`. When it isn't met, the keyframe is skipped.

:::note
Sound keyframes only play in the editor. To play a sound in-game, use a Function keyframe with `playsound`.
:::

### Locator and Interaction Keyframes

[Locators](/docs/nodes/locators) and [Interactions](/docs/nodes/interactions) have their own **Function** keyframes. Their commands run at the node's position, and `as` its entity if it has one, so they're great for particles or sounds that follow a part of the rig.

They also support an **Execute Condition**, and a **Repeat** option that runs the commands again every **Frequency** ticks until the node's next keyframe.

### Previewing Effects

In Animate mode, Variant and Texture Slot keyframes change the editor preview as the animation plays, and every bone shows what the animation has applied to it so far.

The preview starts from the default Variant. If an animation expects the rig to already be in some other state, set **Preview Variants** and **Preview Texture Slots** in its [Animation Properties](/docs/configs/animation#preview-variants). These only affect the editor.

## Playing Several Animations at Once

A rig can play several animations at the same time, as long as they move different nodes. Use each animation's **Excluded Nodes** list to keep it away from the nodes another animation controls.

For example:

-   a `walk` animation excludes the arms and head,
-   an `attack` animation excludes the legs,
-   so both can play together.

If two playing animations move the same node, they overwrite each other every tick, which usually looks like snapping or jitter.

## Tweening

[Tweening](/docs/function-api/animations#tween) smoothly blends the rig from whatever pose it's in to a frame of another animation. Use it to switch between animations without the rig snapping into place.

## Tips

-   Excluded Nodes also save performance: excluded nodes aren't updated at all.
-   Use **Hold** instead of your own stop logic when you need an animation to end on its final pose.
-   Time events with Function keyframes, instead of checking frame numbers in your own tick functions.
-   Animation names end up in function paths. Renaming an animation breaks any commands that call it.

## Related Reading

-   [Animation Config](/docs/configs/animation)
-   [Function API: Animations](/docs/function-api/animations)
-   [Rigs](/docs/core-concepts/rigs)
