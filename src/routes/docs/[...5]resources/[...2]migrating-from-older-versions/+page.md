---
title: Migrating from Older Versions
description: Learn how to migrate your Projects from older versions of Animated Java to the latest version.
---

# {$frontmatter.title}

{$frontmatter.description}

## Upgrading `.ajmodel` Files

On the Blockbench start screen, you can scroll down to find the `Update .ajmodel` option.

![Update .ajmodel](/img/steps/migrate/1.png)

Clicking this will open a file dialog, allowing you to select the `.ajmodel` file you wish to update.

## Cleaning up Outdated Exports

Any old exported files from previous versions of Animated Java should be removed from both your Data Pack and Resource Pack _before_ exporting a `.ajblueprint`.

### Files / Folders to Remove

- `<data_pack_root>/data/animated_java/`
- `<data_pack_root>/datapack.ajmeta`
- `<resource_pack_root>/assets/animated_java/`
- `<resource_pack_root>/resourcepack.ajmeta`

You will also need to remove the Animated Java function references from the `minecraft:tick` and `minecraft:load` tags in your Data Pack.

- `<data_pack_root>/data/minecraft/tags/functions/tick.json`
- `<data_pack_root>/data/minecraft/tags/functions/load.json`
