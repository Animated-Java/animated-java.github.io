---
title: Animation Config
description: Configure loop behavior, timing, and node exclusions for an animation.
---

The Animation Properties dialog controls how a single animation behaves at runtime.

In Blockbench, open it by right-clicking an animation in the Animations panel and selecting Animation Properties.

## Why It Matters

Animated Java uses these fields to generate per-animation metadata and runtime behavior.

-   Loop behavior decides what happens when the animation reaches the last frame.
-   Timing fields control how quickly the animation advances.
-   Excluded Nodes lets you layer multiple animations without bone conflicts.

## Fields In The Dialog

### Name

The animation identifier used in generated function paths and storage keys.

-   Keep names stable after publishing packs to avoid breaking function calls.
-   Use only safe characters: letters, numbers, underscore, and dot.

Example generated path:

```mcfunction
<blueprint_id>/animations/<animation_name>/play
```

### Loop Mode

Controls behavior at the end of the timeline.

-   once: play to the end, then stop.
-   hold: play to the end and remain on the last frame.
-   loop: return to frame 0 and continue.

Use hold for poses (for example, aiming or charging) and loop for cycles (walk, idle, run).

### Loop Delay

Extra delay in ticks before a looping animation restarts.

-   Only applies when Loop Mode is loop.
-   20 ticks = 1 second.

### Included / Excluded Nodes

A list of bones (groups) this animation should or should not modify.

This is one of the most important controls for advanced rigs.

Use it to:

-   play an upper-body animation while legs continue walking,
-   run facial animation alongside body motion,
-   avoid two animations fighting over the same bones.

## Practical Patterns

### Layered locomotion + action

-   Walk animation: exclude arm and head bones used by combat.
-   Attack animation: exclude leg and root locomotion bones.

Result: both can run at the same time without overriding each other.

### Pose locking

-   Set Loop Mode to hold for a final pose.
-   Trigger a second animation later to exit the pose cleanly.

## Common Mistakes

-   Renaming animations after datapack integration without updating all function calls.
-   Forgetting Excluded Nodes, causing bone conflicts and jitter.
-   Setting Loop Delay and expecting it to affect once or hold modes.
-   Overcomplicating Molang fields when default timing already works.

## Related Reading

-   [Animations](/docs/core-concepts/animations)
-   [Animations Function API](/docs/function-api/animations)
-   [Groups](/docs/nodes/groups)
-   [Your First Blueprint](/docs/getting-started/your-first-blueprint)
