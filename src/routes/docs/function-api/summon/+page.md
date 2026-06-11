---
title: Summon
description: How to summon a Rig instance in Minecraft.
---

## Overview

The summon function spawns a new [Rig](/docs/core-concepts/rigs) instance at the caller's position and rotation. It creates the root entity with all bone passengers, locators, interactions, and cameras, then fires any configured on-summon event functions.

## Function Path

```
<blueprint_id>/summon
```

**Example** (blueprint ID `my_pack:my_rig`):

```mcfunction
function my_pack:my_rig/summon {args: {}}
```

The function must be called with a `{args: {}}` macro compound. You can pass optional arguments inside `args`.

## Arguments

All arguments are optional unless stated otherwise.

```mcfunction
function <blueprint_id>/summon {args: {
    variant: "variant_name",
    animation: "animation_name",
    frame: 0,
    start_animation: false
}}
```

-   #### `variant` (string, optional)

    The [storage name](/docs/core-concepts/blueprints#blueprint-id) of the variant to apply immediately after summoning. If omitted, the **Default** variant is used.

    If the variant name is invalid, the rig is automatically removed and an error is logged.

    **Example:** `variant: "angry"` applies the `angry` variant on spawn.

-   #### `animation` (string, optional)

    The name of the animation to seek to after summoning. The rig is placed at the specified `frame` of this animation but does **not** play it unless `start_animation` is also set.

    If the animation name is invalid or the frame number is negative, the rig is automatically removed and an error is logged.

-   #### `frame` (int, optional, default: `0`)

    The animation frame to seek to. Only used when `animation` is specified. Frame indices are zero-based.

-   #### `start_animation` (boolean, optional, default: `false`)

    When `true`, the animation specified by `animation` begins playing immediately after summoning (equivalent to calling `play` on it). When `false`, the rig is placed at the specified frame but the animation stays paused.

## Examples

Summon with default settings:

```mcfunction
function my_pack:my_rig/summon {args: {}}
```

Summon at the current position with a specific variant:

```mcfunction
function my_pack:my_rig/summon {args: {variant: "blue"}}
```

Summon with a specific rotation (always use `rotated` to control facing direction):

```mcfunction
execute rotated 0 0 run function my_pack:my_rig/summon {args: {}}
```

Summon and immediately start the `walk` animation:

```mcfunction
function my_pack:my_rig/summon {args: {animation: "walk", start_animation: true}}
```

Summon and seek to frame 10 of the `idle` animation without playing it:

```mcfunction
function my_pack:my_rig/summon {args: {animation: "idle", frame: 10}}
```

## Execution Context

The summon function can be called from any context. The rig is spawned **at the caller's position and rotation**. Use `execute positioned` / `execute rotated` / `execute at` before calling summon to control where the rig appears.

```mcfunction
# Summon at a specific location facing north
execute positioned 10 64 20 rotated 0 0 run function my_pack:my_rig/summon {args: {}}

# Summon at a player's position
execute at @p run function my_pack:my_rig/summon {args: {}}
```

## Notes

-   The summon function uses Minecraft's [macro](<https://minecraft.wiki/w/Function_(Java_Edition)#Macro>) syntax — you must always pass the `{args: {...}}` compound even if you pass no arguments.
-   All per-node `on_summon_function` callbacks and the blueprint-level `on_summon_function` are called at the end of the summon sequence.
-   The rig's first tick runs on the **next** game tick after summon.
