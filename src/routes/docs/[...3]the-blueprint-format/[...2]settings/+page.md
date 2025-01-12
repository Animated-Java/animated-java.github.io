---
title: Settings
description: An overview of the settings available in the Blueprint Format.
---

# { $frontmatter.title }

{ $frontmatter.description }

## General Settings

### Blueprint Name

The name of the Blueprint. This is used to identify the Blueprint in Blockbench, and as the save file name when exporting.

### Texture Size

The size of the largest texture in your project. This is important for Blockbench's UV editor to work correctly, so make sure it is updated properly when you add new textures to your project.

### Show Bounding Box

Toggle the preview of the model's renderbox.

### Auto Bounding Box

Whether or not to automatically calculate the bounding box based on the model's geometry.

:::admonition type=note
Auto Bounding Box does not take animations into account, so you may have to adjust the bounding box manually if your model moves around a lot in it's animations.
:::

### Bounding Box

The renderbox of the model. If this box goes off-screen in-game the model will stop rendering. Make sure this is resonably tight-fitting to your model to prevent it from disappearing, but not too tight that the model renders when it shouldn't.

## Export Settings

### Plugin Mode

If you are using a Paper plugin to load your rig, you should enable this setting. It will change the way the rig is exported to be compatible with the plugin.

### Resource Pack Export Mode

What format to export the Resource Pack in.

- **Raw**: Exports the Resource Pack as a normal folder structure.
- **Zip**: Exports the Resource Pack as a `.zip` file.
- **None**: Does not export the Resource Pack.

### Data Pack Export Mode

What format to export the Data Pack in.

- **Raw**: Exports the Data Pack as a normal folder structure.
- **Zip**: Exports the Data Pack as a `.zip` file.
- **None**: Does not export the Data Pack.

## Resource Pack Settings

### Use Advanced Settings

Whether or not to use the advanced settings for the resource pack.

:::admonition type=warning
Do not use this setting unless your workflow absolutely requires it. It is not recommended for most users, and will not be as well supported as the default settings.
:::

### Display Item

The item to modify to display the exported rig. Animated Java uses [item model predicates](https://minecraft.wiki/w/Tutorials/Models#Item_predicates) to switch the item's model based on which part of the rig is being displayed. This will not overwrite the item's default model/texture.

### CMD Offset

A custom Custom Model Data offset for your predicate item. This is used to help prevent conflicts with other resource packs that may use the same item.

### Resource Pack

The resource pack to merge the exported files into. The exported files will be placed in the `assets/animated_java/<export_namespace>` folder of the selected resource pack.

If multiple blueprints export into the same resource pack, they will be automatically merged together.

## Data Pack Settings

### Data Pack

The data pack to export the rig into. The exported files will be placed in the `data/animated_java/<export_namespace>` folder of the selected data pack.

If multiple blueprints export into the same data pack, they will be automatically merged together.

### On-Summon Commands

A list of commands that is run as the Rig Instance's root entity when it's first summoned.

### Interpolation Duration

The duration of the interpolation between animation frames. This is used to smooth out the animation. A value between 1 and 3 is recommended for best results.

### Teleport Duration

The duration of all teleportation interpolation of the rig. This is used to smooth out the teleportation of the rig. A value between 1 and 3 is recommended for best results.

### Use Storage for Animations

Whether or not to use command storage to store animation data instead of functions.

This reduces the number of files in the data pack, but increases the performance cost of playing animations by around 33%.

## Plugin Settings

These settings are only visible if Plugin Mode is enabled.

### Baked Animations

Whether or not to bake the exported animations.

Baked animations have their frames pre-calculated and stored in the exported JSON file, reducing the complexity of rendering the model in-game.

Some Plugins may require this to be enabled to function correctly.

### JSON File

The path to the exported [JSON file]().
