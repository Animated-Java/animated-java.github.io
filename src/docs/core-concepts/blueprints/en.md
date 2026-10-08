---
title: Blueprints
description: Learn what a Blueprint is and how to configure it.
---

# Blueprints

## What is a Blueprint?

A **Blueprint** (`.ajblueprint`) is Animated Java's Blockbench project format. It holds everything Animated Java needs to build a rig: the model, textures, animations, [Variants](/docs/core-concepts/variants), [Texture Slots](/docs/core-concepts/texture-slots), and every export setting.

When you [export](/docs/core-concepts/exporting) a Blueprint, Animated Java turns it into a **Resource Pack** (models and textures) and a **Data Pack** (the functions that summon, animate, and control the rig in-game).

Blueprints saved by older versions of Animated Java are upgraded automatically when you open them. Projects from the legacy `0.x` versions (`.ajmodel` files) can be converted too, see [Legacy Releases](/docs/resources/legacy-releases).

---

## Blueprint Settings

Open Blueprint Settings from **Animated Java <i class="minecraft-right-arrow"></i> Blueprint Settings** in the menu bar. The dialog is split into pages, and some pages only appear for one [Target Environment](#target-environment). Changes save when you switch pages or close the dialog.

### General

-   #### Target Environment

    What will run your rig in-game:

    -   **Datapack** exports a Resource Pack and a Data Pack. This is the default, and what most of these docs describe.
    -   **Plugin** exports a single JSON file for a server plugin to read. The Resource Pack, Data Pack, Rig, and Event Functions pages are replaced by the [Plugin](#plugin) page. See [Plugin Exports](/docs/core-concepts/exporting#plugin-exports).

-   #### Blueprint Name

    The Blueprint's name. Also used as its file name.

-   #### Blueprint ID

    A namespaced ID (e.g. `my_pack:my_rig`) that identifies this Blueprint. Every generated function, tag, storage, and model lives under it.

    :::info[Example]
    `my_pack:my_rig` puts its functions in `data/my_pack/function/my_rig/`, so you'd summon it with `function my_pack:my_rig/summon`.
    :::

    :::tip
    Give every Blueprint its own ID. Two Blueprints with the same ID overwrite each other's files when exported.
    :::

    :::danger[Restrictions]

    -   Must include a namespace and a path, like `namespace:path`.
    -   The namespace may only use lowercase letters, digits, and underscores. The path may also use `/`.
    -   Can't use the `minecraft` namespace.
    -   Can't be `animated_java:global`.

    :::

-   #### Target Minecraft Version

    The Minecraft version to export for, like `26.2` (the default) or `1.20.4`. Animated Java supports **1.20.4** and newer.

    This changes how the packs are generated, and which features you can use. For example:

    -   [Cube rotations](/docs/nodes/cubes#rotation-limitations) are limited before 1.21.11.
    -   [Texture Slot](/docs/core-concepts/texture-slots) functions, Texture Slot keyframes, and [Item Model Properties](/docs/configs/item-model-properties) need 1.21.4 or newer.
    -   [Use Entity Stacking](#use-entity-stacking) can only be turned off on 1.21.4 or newer.

    Re-export after changing it.

-   #### Texture Size

    The resolution of the UV editor. It should match the size of your largest texture. Animated Java warns you if it doesn't, or if it isn't square or a power of two.

### Resource Pack

Only shown when the Target Environment is **Datapack**.

-   #### Resource Pack Export Format

    -   **Folder** merges the generated files into an existing Resource Pack folder. Best while you're working on a project.
    -   **Zip** writes a standalone `.zip` Resource Pack.
    -   **None** skips the Resource Pack. Only works if the Blueprint has no Cubes, for example a rig made entirely of [Item Displays](/docs/nodes/item-displays), [Block Displays](/docs/nodes/block-displays), and [Text Displays](/docs/nodes/text-displays).

-   #### Resource Pack Folder / Zip

    Where to write the Resource Pack. A folder must contain a `pack.mcmeta` file. A zip path must end in `.zip`.

-   #### Display Item

    The item whose model is overridden to display your rig's bones. Only shown for Minecraft versions before 1.21.2. Newer versions use the `minecraft:item_model` component instead, so no item is overridden.

    Pick an item whose model uses `minecraft:item/generated` as its parent, like `minecraft:white_dye` (the default). Several Blueprints can share the same Display Item.

### Data Pack

Only shown when the Target Environment is **Datapack**.

-   #### Data Pack Export Format

    **Folder**, **Zip**, or **None**, like the [Resource Pack Export Format](#resource-pack-export-format).

-   #### Data Pack Folder / Zip

    Where to write the Data Pack. A folder must contain a `pack.mcmeta` file. A zip path must end in `.zip`.

-   #### Animation System

    How animation data is stored:

    -   **Functions** (the default) writes one function per animation frame. Fastest in-game, but creates a lot of files.
    -   **Storage** keeps frame data in command storage. Creates far fewer files, but runs slower.

### Rig

Only shown when the Target Environment is **Datapack** and a Data Pack is exported.

-   #### Custom Rig Entity Tags

    Extra tags, separated by commas, added to **every** entity in the rig when it's summoned.

    :::note[Example]
    `my_pack.boss, my_pack.hostile`
    :::

-   #### Interpolation Duration

    How many ticks Minecraft takes to smoothly move each display entity between animation frames (its `interpolation_duration`). Higher values look smoother but react slower. Default: `1`.

-   #### Teleport Duration

    How many ticks Minecraft takes to smoothly move the rig's entities when they're teleported (their `teleport_duration`). Minecraft caps this at `59`. Default: `1`.

-   #### Shadow Radius

    The radius of the root entity's shadow, in blocks. `0` (the default) disables it.

-   #### Shadow Strength

    How dark the root entity's shadow is. Only matters when Shadow Radius is above `0`. Default: `1`.

-   #### Auto Update Rig Orientation

    When **enabled** (the default), the rig follows its root entity every tick: bones turn to match the root's rotation, and floating entities (Locator entities, Cameras, and Interactions) move to their place on the rig. You can move a rig by teleporting its root entity.

    This is expensive. When **disabled**, the rig only moves when you call [`move`](/docs/function-api/utilities#move). Turn it off for rigs that don't move every tick.

-   #### Use Entity Stacking

    When **enabled** (the default), every bone entity rides the root entity as a passenger. You can reach them with `execute on passengers`, but their rotation is less precise.

    When **disabled**, bone entities are separate entities teleported into place every tick. Rotation is much more precise, so the rig turns smoothly while it moves. Use [`as_node`](/docs/function-api/utilities#as_node) to run commands as a bone.

    Turning this off requires Minecraft 1.21.4 or newer. Older versions always stack.

### Event Functions

Only shown when the Target Environment is **Datapack**.

Commands that run at specific points in the rig's life. Each one runs `as` and `at` the root entity, and supports [MC-Build](https://mcbuild.dev) syntax. Write them like a `.mcfunction` file.

-   #### On-Summon Function

    Runs at the end of the [`summon`](/docs/function-api/summon) function, after every node is set up.

-   #### On-Remove Function

    Runs at the start of [`remove/this`](/docs/function-api/remove#removethis), before the rig's entities are removed.

-   #### Pre-Tick Function

    Runs every tick, **before** Animated Java's own tick logic.

-   #### Post-Tick Function

    Runs every tick, **after** Animated Java's own tick logic.

### Plugin

Only shown when the Target Environment is **Plugin**.

-   #### JSON File

    Where to write the exported JSON file.

-   #### Baked Animations

    When enabled, every animation frame is calculated ahead of time and stored in the JSON file. When disabled, the raw keyframes are stored instead, and the plugin has to interpolate them itself. Some plugins require baked animations.

### Preview

Loads extra Resource Packs into the editor, so custom fonts, item and block models, and textures show up in your Blueprint's previews. Preview packs only affect the editor: they're never exported, and they don't replace your Blueprint's own Resource Pack.

-   #### Preview Resource Packs

    A list of Resource Packs, each one a folder containing `pack.mcmeta` or a `.zip` file. Packs higher in the list override packs below them. Use the arrows to reorder them.

    Click **Reload Preview** after changing a pack's files.

### Misc

The render box is the area Minecraft uses to decide whether your rig is on screen. If it's too small, parts of the rig vanish when the root entity is just out of view.

-   #### Preview Render Box

    Shows the render box in the viewport.

-   #### Auto Render Box

    Fits the render box to your model automatically. Recommended.

-   #### Render Box Size

    The render box's size, when Auto Render Box is off.
