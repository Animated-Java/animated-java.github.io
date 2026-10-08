---
title: Legacy Releases
description: Information about older versions of Animated Java.
---

# Legacy Releases

Animated Java was rewritten from scratch for version 1.0. Older releases work differently, and are **no longer maintained**.

| Release                                                                                              | Minecraft versions | How it works     |
| ---------------------------------------------------------------------------------------------------- | ------------------ | ---------------- |
| Current (1.0 and newer)                                                                              | 1.20.4 and newer   | Display entities |
| [Legacy Beta](https://github.com/Animated-Java/animated-java/releases/tag/legacy-beta)               | 1.19.4 – 1.20.6    | Display entities |
| [Legacy Armor Stand](https://github.com/Animated-Java/animated-java/releases/tag/legacy-armorstands) | 1.16.4 – 1.19.3    | Armor stands     |

:::warning
Legacy releases get no bug fixes or support. Use the current version if your Minecraft version allows it.
:::

## Converting Legacy Projects

Legacy versions saved projects as `.ajmodel` files. To convert one into a Blueprint, pick **Update .ajmodel** on Blockbench's start screen and select the file. Animated Java converts it, then opens Blueprint Settings so you can set up the export.

The model carries over, but the exported packs are completely different. Any commands or Data Pack code that used the legacy rig need to be rewritten for the current [Function API](/docs/function-api/summon).

If you get stuck, ask in the [Animated Java Discord](/discord).
