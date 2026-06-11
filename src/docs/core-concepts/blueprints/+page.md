---
title: Blueprints
description: Learn what a Blueprint is and how to configure it.
---

# Blueprints

## What is a Blueprint?

A **Blueprint** is Animated Java's custom Blockbench project format (`.ajblueprint`). It stores everything needed to generate a working Minecraft rig: your 3D model, textures, animations, variants, and all export configuration.

When you export a Blueprint, Animated Java compiles it into a **Resource Pack** (containing your custom models and textures) and a **Data Pack** (containing all the MCfunction logic to summon, animate, and control your rig in-game).

---

## Blueprint Settings

Blueprint Settings can be opened from **Animated Java <i class="minecraft-right-arrow"></i> Blueprint Settings** in the Blockbench menu bar, or from the Animated Java panel.

### General

-   #### Blueprint ID

    A namespaced identifier (e.g. `my_pack:my_rig`) that uniquely identifies this blueprint. This ID is used as the namespace and path for every generated function, function tag, storage key, and model path.

    :::info[Example]
    `my_pack:my_rig` generates functions at `data/my_pack/function/my_rig/...`
    :::

    :::tip
    Choose a unique ID. If two blueprints share the same ID, their exported files will overwrite each other.
    :::

    :::danger[Restrictions]

    -   Cannot use the `minecraft:` namespace.

    -   Cannot use `animated_java:global`.

    -   May only contain lowercase letters, digits, underscores, forward slashes, and a single colon.

    :::

-   #### Target Minecraft Version

    The Minecraft version to compile for. Animated Java uses this to pick the correct pack format, item component format, NBT structure, and enchantment syntax.

    **Minimum supported version:** 1.20.4

    Changing this value after you have already exported may require re-exporting to update generated files.

-   #### Enable Plugin Mode

    Switches the export pipeline to produce a single `.json` file instead of a data pack. This file is consumed by a Minecraft server plugin rather than a vanilla data pack. When plugin mode is active, the Data Pack settings are replaced by Plugin settings.

### Resource Pack

-   #### Resource Pack Export Mode

    Controls how the resource pack output is written.

    -   **`folder`** — Merges generated files directly into a resource pack directory on disk. Ideal for live development.
    -   **`zip`** — Writes all generated files into a `.zip` archive.
    -   **`none`** — Skips resource pack output entirely. Only valid when your blueprint contains no custom models (e.g. you are only using vanilla Block Display or Item Display nodes).

-   #### Resource Pack Path

    The path to the target resource pack folder or zip file. Must point to a valid resource pack (a directory containing `pack.mcmeta`).

-   #### Display Item

    The Minecraft item whose model is overridden to render rig bones. Animated Java assigns each bone a unique `CustomModelData` value on this item.

    :::note
    This setting is only relevant for **Minecraft 1.20.4 – 1.21.1**. In 1.21.2 and later, Animated Java uses the `minecraft:item_model` item component, so no display item override is needed.
    :::

    The item must be a `generated`-type item (e.g. `minecraft:white_dye`, `minecraft:stick`). Avoid items with special rendering such as tools, armor, or blocks.

-   #### Custom Model Data Offset

    An integer offset added to all assigned CustomModelData values. Useful for avoiding conflicts with other resource packs that also use CustomModelData on the same display item.

    :::note
    Only relevant for Minecraft 1.20.4 – 1.21.1.
    :::

### Data Pack

-   #### Data Pack Export Mode

    Controls how the data pack output is written. Same options as [Resource Pack Export Mode](#resource-pack-export-mode): `folder`, `zip`, or `none`.

-   #### Data Pack Path

    The path to the target data pack folder or zip file.

-   #### Auto Update Rig Orientation

    When enabled, Animated Java automatically updates the rig root entity's facing direction each tick to match its movement direction. Disable this if you want to control orientation manually.

-   #### Use Storage for Animation

    When enabled, animation frame data is written to command storage. This significantly reduces the number of generated function files, at the cost of 40% slower animation performance.

    When disabled (the default), each animation frame is a separate MCfunction file. This produces more files but is much faster to run in-game.

### Rig

-   #### Interpolation Duration

    The number of ticks all bone display entities use for client-side transform interpolation (MC's `interpolation_duration` NBT field). Higher values produce smoother but more delayed-looking motion. The default is `1`.

-   #### Teleportation Duration

    Interpolation duration in ticks for teleportation. Values are clamped between 0 and 59 (inclusive). The default is `1`.

-   #### Custom Rig Entity Tags

    A comma-separated list of extra scoreboard tags added to all entities in the rig when it is summoned. Useful for identifying your rig entities in custom commands.

    :::note[Example]
    `my_pack.my_rig.special, summit.booth_entity`
    :::

-   #### Use Entity Stacking

    When enabled (the default), all bone display entities ride the root entity as passengers. This is the standard and most performant approach.

    When disabled, bone entities are repositioned via teleportation every tick instead. This is _slightly_ less performant, however, it provides **_much_** smoother rotations.

### Event Functions

Event functions are snippets of MCfunction commands injected into specific points in the rig's lifecycle. All functions support [MC-Build](https://mcbuild.dev) syntax and are executed `as` and `at` the root entity unless noted.

-   #### On-Summon Function

    Commands injected into the `summon` function, executed once when the rig is first spawned.

-   #### On-Remove Function

    Commands injected into the `remove/this` function, executed once when the rig is removed.

-   #### On-Pre-Tick Function

    Commands injected at the **beginning** of the `tick` function, executed every game tick before bone transforms are applied.

-   #### On-Post-Tick Function

    Commands injected at the **end** of the `tick` function, executed every game tick after bone transforms are applied.

### Render Box

The render box controls the culling volume that Minecraft uses to decide whether to render the rig. If the root entity's bounding box leaves the player's view frustum, the entire rig (including all passengers) is hidden.

-   #### Show Render Box

    Toggles a wireframe preview of the render box in the Blockbench viewport.

-   #### Auto Render Box

    When enabled, Animated Java automatically calculates a render box large enough to contain all bones across all animation frames, with an 8-unit overflow margin. **Recommended to leave this on.**

-   #### Render Box Size

    Manual render box dimensions in blocks (half-width and height). Only active when **Auto Render Box** is disabled.

    :::warning
    Setting the render box too small will cause the rig to disappear (cull) when partially off-screen. Setting it too large wastes rendering resources.
    :::

### Plugin Settings

Only visible when [Enable Plugin Mode](#enable-plugin-mode) is turned on.

-   #### JSON File Path

    The path to write the exported plugin blueprint JSON file.

-   #### Baked Animations

    When enabled, animations are fully pre-computed (baked) and embedded in the JSON output. When disabled, raw keyframe data is embedded instead and the server plugin performs interpolation itself.

---

## Exporting Your Blueprint

Once your blueprint is configured, click **Animated Java > Export (Debug)** to generate the resource pack and data pack files.

Animated Java tracks every file it writes using an `.ajmeta` file stored next to the pack. On the next export, stale files from the previous export are automatically cleaned up.

:::tip
After exporting, run `/reload` in Minecraft to reload your data pack, and press `F3+T` to reload your resource pack.
:::
