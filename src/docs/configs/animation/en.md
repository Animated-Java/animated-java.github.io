---
title: Animation Config
description: Configure loop behavior, timing, node exclusions, and previews for an animation.
---

# Animation Config

The **Animation Properties** dialog controls how one animation behaves. Open it by right-clicking an animation in the **Animations** panel and choosing **Properties**.

## Fields

### Animation Name

The animation's name, used in its function paths and tags:

```mcfunction
<blueprint_id>/animations/<animation_name>/play
```

Names may only use letters, digits, underscores, and periods. When exported, they're lowercased and periods become `_`.

:::warning
Renaming an animation changes its function paths. Update any commands that call it.
:::

### Loop Mode

What happens when the animation reaches its last frame:

-   **Once**: stop, and snap back to the first frame.
-   **Hold**: stop, and stay on the last frame.
-   **Loop**: start over from the first frame.

### Loop Delay

How many ticks to wait before a **Loop** animation starts over. `20` ticks is one second. Has no effect on the other loop modes.

### Excluded Nodes

Nodes this animation never moves. Drag nodes between the **Included Nodes** and **Excluded Nodes** columns, or use the swap button to flip the two lists.

Use it to:

-   play an upper-body animation while the legs keep walking,
-   run a facial animation alongside body animations,
-   stop two animations from fighting over the same node.

Excluded nodes also aren't updated at all, which saves performance.

### Preview Variants

The [Variants](/docs/core-concepts/variants) shown when you preview this animation in the editor, applied in order. Set these to the state the rig will usually be in when the animation plays. Empty means the Default Variant.

Only affects the editor.

### Preview Texture Slots

The textures [Texture Slots](/docs/core-concepts/texture-slots) show when you preview this animation, applied after the Preview Variants. Empty means the slots show whatever the Preview Variants set.

Only affects the editor.

## Patterns

### Layered locomotion and actions

-   `walk` excludes the arm and head bones.
-   `attack` excludes the leg bones.

Both can play at the same time without overriding each other.

### Holding a pose

-   Set an `aim` animation to **Hold**, so the rig stays aimed.
-   [Tween](/docs/function-api/animations#tween) into another animation to leave the pose smoothly.

## Related Reading

-   [Animations](/docs/core-concepts/animations)
-   [Function API: Animations](/docs/function-api/animations)
