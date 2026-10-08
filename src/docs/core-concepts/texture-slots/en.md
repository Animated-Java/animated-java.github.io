---
title: Texture Slots
description: Swap the textures on parts of your rig at runtime with Texture Slots.
---

# Texture Slots

## What is a Texture Slot?

A **Texture Slot** is a group of interchangeable textures. You paint faces with the slot instead of a single texture, and every one of those faces can then switch to any texture in the slot, in the editor and in-game.

Slots are perfect for anything with a few alternative looks: eyes that blink, a screen with several images, a shirt in different colors.

The first texture in a slot is its **default**. Faces show it until something switches the slot.

## Creating a Slot

1. In the **Textures** panel, select the textures you want in the slot. Hold `Ctrl` or `Shift` to select several.
2. Click **Create Texture Slot** in the Textures panel's toolbar.
3. Name the slot in the dialog that opens.

The slot appears in the Textures panel like any other texture, with its own icon.

### The Texture Slot Dialog

Double-click a slot (or right-click it and choose **Texture Slot Properties**) to edit it:

-   **Name**: used to name the slot's functions and models when exporting.
-   **Textures**: every texture in the slot. Drag them to reorder; the first one is the default. Use **Add Texture** to add more, and the eye icon to show a texture in the editor.

## Using a Slot

Apply a slot to faces the same way you'd apply a texture: select the faces or Cubes, then right-click the slot and choose **Apply to Faces** or **Apply to Elements**.

-   To preview another texture in the editor, right-click the slot and pick one under **Preview**. Previews aren't saved.
-   Painting on a slot paints whichever texture it's currently showing.
-   Deleting a slot moves its faces back to the slot's default texture.

## Switching Slots In-Game

There are three ways to change what a slot shows:

-   **Functions:** each slot gets a function per texture, like `my_pack:my_rig/texture_slots/eyes/closed`. See [Function API: Texture Slots](/docs/function-api/texture-slots).
-   **[Variants](/docs/core-concepts/variants):** a Variant picks a texture for any of your slots, and applies them all at once.
-   **Texture Slot keyframes:** switch slots at a specific frame of an [animation](/docs/core-concepts/animations#effect-keyframes).

Each slot switches independently. Changing `eyes` never affects `shirt`, even on the same bone.

### Names

Slot and texture names are turned into function names when exporting: they're lowercased, a trailing `.png` is removed, and anything other than letters, digits, and underscores becomes `_`. A texture named `Eyes Closed.png` becomes `eyes_closed`. If two names end up the same, Animated Java adds a number to keep them unique.

## Version Support

Switching a single slot needs **Minecraft 1.21.4 or newer**. On older versions, the slot functions and Texture Slot keyframes aren't available, and slots only change when a Variant is applied (see [Layering Variants](/docs/core-concepts/variants#layering-variants)).

:::info[How it works]
On 1.21.4 and newer, each bone's item stores the texture name of every slot it uses in its `minecraft:custom_model_data` strings, and its item model picks textures from those strings. Switching a slot just rewrites one string, so no extra models are needed.
:::

## Upgrading Older Blueprints

Before 1.11, Variants swapped textures with a texture map. Opening an older Blueprint turns each swapped texture into a Texture Slot holding it and every texture it was swapped to, and updates its Variants to use those slots. Your Variants look the same as before.

## Related Reading

-   [Variants](/docs/core-concepts/variants)
-   [Function API: Texture Slots](/docs/function-api/texture-slots)
-   [Animations](/docs/core-concepts/animations)
