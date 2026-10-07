---
title: Summon
description: How to summon a Rig instance in Minecraft.
---

# Summon

The summon function creates a new [Rig](/docs/core-concepts/rigs) instance at the current execution position and rotation.

```
<blueprint_id>/summon
```

It's a [macro function](<https://minecraft.wiki/w/Function_(Java_Edition)#Macros>), so you always pass an `args` compound, even an empty one:

```mcfunction
function my_pack:my_rig/summon {args: {}}
```

## Arguments

Every argument is optional.

```mcfunction
function <blueprint_id>/summon {args: {
    variant: "variant_name",
    animation: "animation_name",
    frame: 0,
    start_animation: false
}}
```

-   #### `variant`

    The name of a [Variant](/docs/core-concepts/variants) to apply right after summoning. Without it, the rig uses the Default Variant.

    ```mcfunction
    function my_pack:my_rig/summon {args: {variant: "angry"}}
    ```

-   #### `animation`

    The name of an animation to pose the rig in. The rig is set to `frame` of that animation, but the animation doesn't play unless `start_animation` is `true`.

-   #### `frame`

    The frame of `animation` to pose the rig in, starting from `0`. Defaults to `0`. Ignored without `animation`.

-   #### `start_animation`

    When `true`, `animation` starts playing from `frame` right away. Defaults to `false`.

:::warning[Invalid arguments]
If an argument is invalid (an unknown Variant or animation, an empty string, or a negative frame), the new rig is removed again and an error is printed in chat listing the valid options. Passing `variant` to a Blueprint that only has the Default Variant is also an error.
:::

## Position and Rotation

The rig is summoned at the execution position, facing the execution rotation. Use `execute positioned`, `rotated`, or `at` to control where it appears and which way it faces:

```mcfunction
# At a specific spot, facing south
execute positioned 10 64 20 rotated 0 0 run function my_pack:my_rig/summon {args: {}}

# At the nearest player, facing the same way they are
execute at @p run function my_pack:my_rig/summon {args: {}}
```

## Examples

Summon with a Variant:

```mcfunction
function my_pack:my_rig/summon {args: {variant: "blue"}}
```

Summon and start playing `walk`:

```mcfunction
function my_pack:my_rig/summon {args: {animation: "walk", start_animation: true}}
```

Summon posed on frame 10 of `idle`, without playing it:

```mcfunction
function my_pack:my_rig/summon {args: {animation: "idle", frame: 10}}
```

## What Happens When You Summon

1. The root entity and every node entity are created, and the rig is set to its default pose.
2. The `variant` and `animation` arguments are applied.
3. The On-Summon functions run: first each Locator's, then each Interaction's, then each display node's, and finally the Blueprint's own [On-Summon Function](/docs/core-concepts/blueprints#on-summon-function).

## Related Reading

-   [Remove](/docs/function-api/remove)
-   [Rigs](/docs/core-concepts/rigs)
