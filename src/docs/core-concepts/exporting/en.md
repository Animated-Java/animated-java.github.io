---
title: Exporting
description: Learn how exporting works, and how to use it.
---

# Exporting

Exporting turns your Blueprint into something Minecraft can use. Depending on your [Blueprint Settings](/docs/core-concepts/blueprints#blueprint-settings), it writes:

-   a **Resource Pack** with your rig's models and textures,
-   a **Data Pack** with the functions that summon and animate it,
-   or, in [Plugin mode](#plugin-exports), a single **JSON file** for a server plugin.

## Before You Export

Open **Animated Java <i class="minecraft-right-arrow"></i> Blueprint Settings** and check that:

-   the **Blueprint ID** is set and unique, like `my_pack:boss`,
-   the **Target Minecraft Version** matches your world or server,
-   the Resource Pack and Data Pack formats and paths are set.

A pack whose format is **None** is skipped.

## Export Actions

All of these live in the **Animated Java** menu.

### Export (Debug)

`Ctrl + E`. Use this while you're building your project. Debug exports add checks that help you catch mistakes in-game:

-   Functions that must run as the rig's root entity print an error instead of silently doing the wrong thing.
-   Bad function arguments, like an empty `name` or an unknown Variant, print an error explaining what went wrong.
-   Rigs summoned with an older export of the Blueprint glow red and print a warning after `/reload`, so you know to re-summon them.

### Export

`Ctrl + Shift + E`. Leaves out the debug checks, for smaller and faster functions. Use it for the version you ship.

### Export All / Export All (Debug)

Exports every open Blueprint, in normal or debug mode.

### Extract

**Extract <i class="minecraft-right-arrow"></i> Confirm Extraction** deletes every file this Blueprint exported to its Resource Pack and Data Pack folders. Use it to remove a rig from your packs.

## What Export Checks

Animated Java refuses to export, and tells you why, if:

-   a Blueprint Setting has an error, like a missing pack folder,
-   a cube is rotated in a way your target version doesn't allow (see [Rotation Limitations](/docs/nodes/cubes#rotation-limitations)),
-   the Resource Pack is set to **None** but the Blueprint has Cubes,
-   the Blueprint has textures but no Cubes, or Cubes but no textures,
-   an animation uses Texture Slot keyframes, or a bone uses a tint type, that the target version doesn't support.

While it works, the export progress dialog shows each step and how far along it is.

## Cleaning Up Old Files

When a pack is exported as a **Folder**, Animated Java records every file it writes in an `.ajmeta` file at the pack's root (`assets.ajmeta` in the Resource Pack, `data.ajmeta` in the Data Pack). On the next export, files from the previous export that are no longer needed are deleted, so renamed or removed animations don't leave stale functions behind.

Don't delete these files. Without them, Animated Java can't tell which files it made.

## Plugin Exports

When the [Target Environment](/docs/core-concepts/blueprints#target-environment) is **Plugin**, exporting writes one JSON file instead of a Resource Pack and Data Pack. A server plugin reads that file to build and animate the rig itself.

The JSON file contains the rig's nodes (including their parents and any Interactions), Variants, Texture Slots, textures, and animations. See [Baked Animations](/docs/core-concepts/blueprints#baked-animations) for how animations are stored.

## Typical Workflow

1. Change your model, animations, or settings.
2. Click **Export (Debug)**.
3. In Minecraft, press `F3 + T` to reload the Resource Pack, and run `/reload` to reload the Data Pack.
4. Re-summon your rig and test it.

When everything works, use **Export** for the final version.

## Related Reading

-   [Blueprints](/docs/core-concepts/blueprints)
-   [Your First Blueprint](/docs/getting-started/your-first-blueprint)
-   [Function API: Summon](/docs/function-api/summon)
