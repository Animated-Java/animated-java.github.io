---
title: Upgrading to 1.11
description: What changed in Animated Java 1.11, and how to update your projects.
---

# Upgrading to 1.11

Animated Java 1.11 adds [Texture Slots](/docs/core-concepts/texture-slots), reworks how [Variants](/docs/core-concepts/variants) work, and supports Minecraft 26.3. Most projects upgrade automatically, but a few changes can break Data Pack code or plugins that depend on Animated Java's output.

## Upgrading a Blueprint

1. Open the Blueprint in Animated Java 1.11. It's upgraded automatically. Variants that used to swap textures now use Texture Slots instead, and look the same as before.
2. Save it.
3. Re-export it.
4. In Minecraft, `/reload`, then remove and re-summon every existing instance of the rig. With a debug export, old instances glow red to show they're outdated.

## Breaking Changes

### Animation frame objectives

Each animation's frame score now includes the Blueprint ID, so two Blueprints with the same animation names no longer share a score:

```
Before:  aj.<animation>.frame
After:   <blueprint_id>.<animation>.frame
```

In the objective name, the `:` and `/` in your Blueprint ID become `.`, so `my_pack:my_rig` gives `my_pack.my_rig.walk.frame`. Update any commands that read or set these scores.

### Bone `custom_model_data` on 1.21.4 and newer

Each bone item's `minecraft:custom_model_data` strings now hold the current texture of each Texture Slot the bone uses, instead of the name of the applied Variant. If your own resource pack or commands read these strings, update them.

### Plugin JSON format version 3

[Plugin exports](/docs/core-concepts/exporting#plugin-exports) now use `format_version` 3:

-   `display_properties` is renamed to `entity_properties`.
-   `settings.id` no longer starts with `animated_java:`.
-   `texture_palettes` is replaced by `texture_slots`.
-   Texture keys no longer end in `_png`.
-   Variants are exported in a new `variants` section, and applied with `variant` keyframes, instead of being flattened into `texture_slot` keyframes.

Plugins that read Animated Java's JSON need to update to the new format.

## Other Changes Worth Knowing

-   The default Target Minecraft Version is now 26.2.
-   **Auto Update Rig Orientation** moved to the [Rig page](/docs/core-concepts/blueprints#rig) of Blueprint Settings.
-   Entity display names were removed from rig entities, which improves performance.
-   Plugin exports no longer build a Resource Pack, and now include Interactions and each node's parent.

The full list is in the changelog: **Animated Java <i class="minecraft-right-arrow"></i> Changelog** in Blockbench.
