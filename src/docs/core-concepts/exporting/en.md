---
title: Exporting
description: Learn how exporting works, and how to use it.
---

# Exporting

Exporting is the step that turns your Blueprint into usable Minecraft content.

Depending on your settings, Animated Java can generate:

-   a **Resource Pack** (models, textures, item model overrides),
-   a **Data Pack** (functions, animation logic),
-   a **Plugin JSON export** (for plugin workflows),
-   or both.

Exporting writes files to the paths configured in **Blueprint Settings** and tracks generated files using `.ajmeta` files so old generated files can be cleaned up on later exports.

## Before You Export

Open **Animated Java <i class="minecraft-right-arrow"></i> Blueprint Settings** and verify:

-   **Blueprint ID** is set and unique (for example `my_pack:boss`).
-   **Target Minecraft Version** matches your world/server.
-   **Resource Pack Export Mode** and path are configured.
-   **Data Pack Export Mode** and path are configured.

If one of the pack export modes is set to **None**, that pack will be skipped during export.

## Plugin Exports

Animated Java also supports **Plugin Mode**.

When **Plugin Mode** is enabled in Blueprint Settings, exporting generates a plugin-focused JSON export instead of the normal Minecraft pack workflow.

In practice:

-   Data Pack export is skipped.
-   Resource Pack export is skipped.
-   Plugin JSON is exported for plugin integration.

Use Plugin Mode when your target runtime is a plugin pipeline rather than a standard resource pack + datapack setup.

## Export Actions (Menu)

### Export

Standard export. This is what you should use for release-ready pack output.

### Export (Debug)

Debug export mode is intended for troubleshooting and development. Internally, the generated datapack functions receive a debug flag and include extra debug-oriented behavior/messages that help diagnose issues while testing.

Use this mode while developing your project.

### Export All / Export All (Debug)

These run export for **all currently open Blueprint projects** in Blockbench, using either standard mode or debug mode.

Use these when you are working with multiple Blueprints in one session and want to export them together.

## Typical Workflow

1. Update your model, animations, or settings.
2. Click **Export (Debug)** or **Export** if ready for release.
3. In Minecraft, reload your resource pack with `F3 + T`.
4. Run `/reload` to refresh datapacks.
5. Re-summon your rig and test.

## When To Use Which Mode

-   Use **Export** for production use.
-   Use **Export (Debug)** for normal development.
-   Use **Plugin Mode** when exporting for plugin-based systems instead of vanilla-style pack deployment.

## Related Reading

-   [Blueprints](/docs/core-concepts/blueprints)
-   [Getting Started: Your First Blueprint](/docs/getting-started/your-first-blueprint)
-   [Function API: Summon](/docs/function-api/summon)
