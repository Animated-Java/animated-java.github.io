---
title: Variants
description: Understand what Variants are and how they change a rig's appearance at runtime.
---

# Variants

## What is a Variant?

A **Variant** is a named look for your rig. Applying one changes what the rig looks like without re-summoning it. Variants are applied **per rig instance**, so two copies of the same rig can wear different Variants at the same time.

Common uses:

-   costumes or skins,
-   damaged and undamaged states,
-   lit and unlit props,
-   facial expressions.

Manage Variants in the **Variants** panel. Click a Variant to preview it in the editor, and click its edit (pencil) icon to open its [Variant Config](/docs/configs/variant).

## What a Variant Changes

### Texture Slots

A Variant picks a texture for any of your [Texture Slots](/docs/core-concepts/texture-slots). For example, an `angry` Variant could switch a `face` slot to an angry face texture. Slots the Variant doesn't list are left as they are.

This is the main way Variants change a rig's look.

### Display Entity Config

Each node's [Display Entity Config](/docs/configs/display-entity) can have different settings per Variant, like billboard mode, brightness, glowing, or an On-Apply function. Applying the Variant applies those settings to the node.

### On-Apply Function

Commands that run `as` and `at` the root entity whenever the Variant is applied.

### Excluded Nodes

Nodes in a Variant's **Excluded Nodes** list are never touched when it's applied, even if they have faces in one of its Texture Slots.

## The Default Variant

Every Blueprint has a **Default** Variant. It's your rig's base look, and what the rig starts with when it's summoned. You can rename it, but you can't delete it.

Applying the Default Variant resets every Texture Slot to its default texture, and every node to its default Display Entity Config.

## Applying Variants

-   Run its function: [`<blueprint_id>/variants/<variant>/apply`](/docs/function-api/variants).
-   Pass it when summoning: [`summon {args: {variant: "angry"}}`](/docs/function-api/summon#variant).
-   Use a Variant keyframe in an [animation](/docs/core-concepts/animations#effect-keyframes). One keyframe can apply several Variants in order.

## Layering Variants

Applying a Variant only changes what it sets. It doesn't reset the rig first, and Animated Java doesn't keep track of which Variants are active. So layering is:

-   **order-dependent:** when two Variants set the same slot or node, the last one applied wins,
-   **partial:** anything a Variant doesn't set stays as it was.

This makes it easy to give each Variant one job. A `red_shirt` Variant that only sets the `shirt` slot and an `angry` Variant that only sets the `face` slot can be applied in any order and combine cleanly.

To get back to a known state, apply the Default Variant first, then the Variants you want on top.

:::warning[Before Minecraft 1.21.4]
Older versions can't switch Texture Slots one at a time. Instead, applying a Variant swaps each bone it changes to a model with that Variant's textures, and the bone's other slots go back to their defaults. Layered Variants only combine cleanly if they change different bones.
:::

## Variants or Separate Blueprints?

Use **Variants** when the rig is the same object, shares its animations, and only its look changes.

Use **separate Blueprints** when the model's structure is different, the animations are unrelated, or the rigs need different settings.

## Related Reading

-   [Texture Slots](/docs/core-concepts/texture-slots)
-   [Variant Config](/docs/configs/variant)
-   [Display Entity Config](/docs/configs/display-entity)
-   [Function API: Variants](/docs/function-api/variants)
