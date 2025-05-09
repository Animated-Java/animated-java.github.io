---
title: Rig Entity Tags
description: Rig Entities can be selected using a variety of tags. This page lists all available tags and their descriptions.
---

# { $frontmatter.title }

{ $frontmatter.description }

:::admonition type=note
The tags listed on this page are only available in Animated Java v.1.6.2 and later.
:::

## Global Tags

| Name                                                | Description                                                                                                                                                                 |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aj.global.entity`                                  | Targets all rig entities.                                                                                                                                                   |
| `aj.global.root`                                    | Targets all rig root entities.                                                                                                                                              |
| `aj.global.data`                                    | Targets all rig data entities (Entities used by AJ to store NBT information per-rig).                                                                                       |
| `aj.global.root.child`                              | Targets all entities that are direct child nodes of the root entity (i.e., all top-level nodes).                                                                            |
| `aj.global.root.child.<node_type>`                  | Same as `aj.global.root.child` but specifically targets nodes of a given `<node_type>`.                                                                                     |
| `aj.global.node`                                    | Targets all entities that represent any node within the rig.                                                                                                                |
| `aj.global.display_node`                            | Targets all entities that represent one of the following node types: bone, item_display, block_display, or text_display.                                                    |
| `aj.global.vanilla_display_node`                    | Targets all entities that represent one of the following node types: item_display, block_display, or text_display.                                                          |
| `aj.global.<node_type>`                             | Targets all entities of a specific node type, such as bone, camera, locator, item_display, block_display, or text_display.                                                  |
| `aj.global.<node_type>.<node_name>`                 | Same as `aj.global.<node_type>`, but additionally targets entities with a specific node name `<node_name>`.                                                                 |
| `aj.global.bone.<bone_name>.child`                  | Targets all entities that are direct child nodes of a bone with the name `<bone_name>`.                                                                                     |
| `aj.global.bone.<bone_name>.child.<node_type>`      | Same as `aj.global.bone.<bone_name>.child` but specifically targets nodes of a given `<node_type>`.                                                                         |
| `aj.global.bone.<bone_name>.descendant`             | Targets all entities that are descendant nodes of a bone with the name `<bone_name>`.                                                                                       |
| `aj.global.bone.<bone_name>.descendant.<node_type>` | Same as above but specifically targets nodes of a given `<node_type>`.                                                                                                      |
| `aj.global.bone.<bone_name>.tree`                   | Targets all entities in the hierarchy of a bone with the name `<bone_name>`. This includes the bone itself, all its child nodes, and all its descendant nodes at any depth. |
| `aj.global.bone.<bone_name>.tree.bone`              | Same as `aj.global.bone.<bone_name>.tree` but specifically targets bones.                                                                                                   |

## Project-Specific Tags

| Name                                                            | Description                                                                                                                                                                                       |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aj.<export_namespace>.entity`                                  | Targets rig entities from `<export_namespace>`                                                                                                                                                    |
| `aj.<export_namespace>.root`                                    | Targets rig root entities from from `<export_namespace>`                                                                                                                                          |
| `aj.<export_namespace>.data`                                    | Targets rig data entities from `<export_namespace>` (Entities used by AJ to store NBT information per-rig).                                                                                       |
| `aj.<export_namespace>.root.child`                              | Targets entities from `<export_namespace>` that are direct child nodes of the root entity (i.e., all top-level nodes).                                                                            |
| `aj.<export_namespace>.root.child.<node_type>`                  | Same as `aj.<export_namespace>.root.child` but specifically targets nodes of a given `<node_type>`.                                                                                               |
| `aj.<export_namespace>.node`                                    | Targets entities from `<export_namespace>` that represent any node within the rig.                                                                                                                |
| `aj.<export_namespace>.display_node`                            | Targets entities from `<export_namespace>` that represent one of the following node types: bone, item_display, block_display, or text_display.                                                    |
| `aj.<export_namespace>.vanilla_display_node`                    | Targets entities from `<export_namespace>` that represent one of the following node types: item_display, block_display, or text_display.                                                          |
| `aj.<export_namespace>.<node_type>`                             | Targets entities from `<export_namespace>` of a specific node type, such as bone, camera, locator, item_display, block_display, or text_display.                                                  |
| `aj.<export_namespace>.<node_type>.<node_name>`                 | Same as `aj.<export_namespace>.<node_type>`, but additionally targets entities with a specific node name `<node_name>`.                                                                           |
| `aj.<export_namespace>.bone.<bone_name>.child`                  | Targets entities from `<export_namespace>` that are direct child nodes of a bone with the name `<bone_name>`.                                                                                     |
| `aj.<export_namespace>.bone.<bone_name>.child.<node_type>`      | Same as `aj.<export_namespace>.bone.<bone_name>.child` but specifically targets nodes of a given `<node_type>`.                                                                                   |
| `aj.<export_namespace>.bone.<bone_name>.descendant`             | Targets entities from `<export_namespace>` that are descendant nodes of a bone with the name `<bone_name>`.                                                                                       |
| `aj.<export_namespace>.bone.<bone_name>.descendant.<node_type>` | Same as above but specifically targets nodes of a given `<node_type>`.                                                                                                                            |
| `aj.<export_namespace>.bone.<bone_name>.tree`                   | Targets entities from `<export_namespace>` in the hierarchy of a bone with the name `<bone_name>`. This includes the bone itself, all its child nodes, and all its descendant nodes at any depth. |
| `aj.<export_namespace>.bone.<bone_name>.tree.bone`              | Same as `aj.<export_namespace>.bone.<bone_name>.tree` but specifically targets bones.                                                                                                             |

## Misc. Tags

| Name                                                             | Description                                                                                                                                                                               |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aj.new`                                                         | Targets all entities that have been created in the current tick.                                                                                                                          |
| `aj.transforms_only`                                             | Tells `animation/apply_frame` and `animation/set_frame` to ignore functional keyframes (variants or commands keyframes) when applying a frame. Should only be applied to the root entity. |
| `aj.outdated_rig_text_display`                                   | Targets all entities that are used in the outdated rig warning popup.                                                                                                                     |
| `aj.<export_namespace>.animation.<animation_name>.playing`       | Targets all entities that are currently playing the animation `<animation_name>`.                                                                                                         |
| `aj.<export_namespace>.animation.<animation_name>.tween_playing` | Targets all entities that are currently tweening to the animation `<animation_name>`.                                                                                                     |
