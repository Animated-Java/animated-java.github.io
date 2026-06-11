---
title: Variants
description: Understand what Variants are and how they change a rig's appearance at runtime.
---

# Variants

## What is a Variant?

A **Variant** is a named appearance state for a Blueprint.

Variants let one rig switch between multiple visual configurations without being re-summoned. They are evaluated **per rig instance**, so two copies of the same rig can use different variants at the same time.

Common uses include:

-   different costumes or skins,
-   damaged vs. undamaged states,
-   lit vs. unlit props,
-   facial expression swaps,
-   hiding or revealing optional model parts.

See the [Function API: Variants](/docs/function-api/variants) page for the runtime control function.

## What a Variant Changes

A Variant can affect several parts of a rig at once.

### Texture swaps

A variant can replace one texture with another for the affected rig models.

This is the most common use case: one rig structure, multiple looks.

### Excluded Nodes

A variant can exclude specific nodes so they are not modified when the variant is applied.

This is useful when layering variants on top of each other — for example, a `red` variant that recolors the whole rig, and a `hat` variant that only shows a hat without affecting the recolor.

### Per-variant display entity config

Display entity settings can also change per variant.

That includes settings such as:

-   billboard mode,
-   brightness override,
-   glow settings,
-   shadow settings,
-   variant-specific on-apply commands.

These are configured from the [Display Entity Config](/docs/configs/display-entity) dialog.

## Default Variant

Every Blueprint always has a **Default** variant.

The Default variant represents the rig's base appearance. If you summon a rig without explicitly applying another variant, the rig starts in its default state.

Think of all other variants as overrides on top of that baseline.

## Variants Are Per Rig Instance

Variants are not a global toggle for the blueprint.

If you summon the same blueprint multiple times:

-   one rig can use the default variant,
-   another can use an `angry` variant,
-   another can switch variants mid-animation.

This is why variant functions are executed **as the rig root entity**.

## How Variants Fit Into a Rig

Variants do not create a different rig structure.

They operate on the existing rig by changing:

-   which models/textures are used,
-   which nodes are visible,
-   which display entity settings apply.

That means variants are usually much cheaper and cleaner than creating separate blueprints for every look.

## Variants and Animations

Variants work well with animations.

A Variant can be:

-   applied manually through the variants function API,
-   selected when the rig is summoned,
-   triggered by a Variant Keyframe inside an animation.

This makes them useful for stateful animation work such as:

-   changing expression during a cutscene,
-   swapping weapon forms mid-attack,
-   changing prop appearance at a specific frame.

## When To Use Variants vs Separate Blueprints

Use **Variants** when:

-   the rig is fundamentally the same object,
-   animations can be shared,
-   only the appearance or visible parts change.

Use **separate Blueprints** when:

-   the structure is substantially different,
-   the animation set is unrelated,
-   export settings or rig behavior need to diverge heavily.

## Variant Layering

Animated Java does **not** maintain a formal stack of active variants.

Applying a variant simply updates the nodes that variant affects. If you apply another variant afterward, the second variant updates its own target nodes on top of the rig's current state.

That means layering is:

-   **order-dependent**,
-   **partial**,
-   **not automatically reset back to Default** before each apply.

### What This Means In Practice

If Variant A changes one set of nodes and Variant B changes a different set of nodes, you can apply them sequentially and the result will often look like they are layered together.

If both variants affect the same node, the later application wins for whatever it overrides on that node.

Examples:

-   Two variants that swap different bones can be combined safely.
-   Two variants that both replace the same bone model are effectively last-write-wins.
-   Two variants that both apply display entity config to the same node are also order-dependent.

### Safe Layering Pattern

Variant layering works best when each variant is responsible for a separate concern, such as:

-   costume pieces,
-   facial expressions,
-   weapon state,
-   glow or brightness presentation on a separate node.

### Avoid These Assumptions

-   Do not assume applying a variant clears all previous variant effects.
-   Do not assume variants are merged globally into one resolved state object.
-   Do not assume excluded nodes in one variant automatically restore nodes changed by a previous variant.

### Recommended Approach

If you need deterministic combined looks, create an explicit combined variant such as:

-   `angry_armored`
-   `lit_damaged`
-   `smiling_hat`

Use sequential variant application only when you intentionally want order-based partial overrides.

## Related Reading

-   [Blueprints](/docs/core-concepts/blueprints)
-   [Rigs](/docs/core-concepts/rigs)
-   [Animations](/docs/core-concepts/animations)
-   [Display Entity Config](/docs/configs/display-entity)
-   [Function API: Variants](/docs/function-api/variants)
