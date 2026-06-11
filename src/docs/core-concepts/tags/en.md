---
title: Tags
description: Entity tags generated and used by Animated Java rigs.
---

# Tags

Animated Java assigns many entity tags to rig entities so datapack functions can target the right parts of a rig.

This page documents the full tag system used by rig root and node entities.

## Blueprint ID and Name Formatting

Most project tags are based on your blueprint id.

Animated Java sanitizes ids and names for tags by replacing:

-   `:` with `.`
-   `/` with `.`

So a blueprint id like `my_pack:boss/dragon` becomes `my_pack.boss.dragon` in tag prefixes.

## Root Entity Tags

Every rig root entity gets these tags:

-   `aj.new`
-   `aj.global.entity`
-   `aj.global.root`
-   `<blueprint_id>.entity`
-   `<blueprint_id>.root`
-   Any [custom rig entity tags](/docs/core-concepts/blueprints#Custom-Rig-Entity-Tags) you set in blueprint settings

Example with blueprint id `my_pack:rigs/example`:

-   `my_pack.rigs.example.entity`
-   `my_pack.rigs.example.root`

## Node Baseline Tags

All node entities (bone, displays, camera, locator, interaction) get:

-   `aj.new`
-   `aj.global.entity`
-   `aj.global.node`
-   `aj.global.node.<node_name>`
-   `<blueprint_id>.entity`
-   `<blueprint_id>.node`
-   `<blueprint_id>.node.<node_name>`
-   Any [custom rig entity tags](/docs/core-concepts/blueprints#Custom-Rig-Entity-Tags) you set in blueprint settings

Nodes directly parented to root also get:

-   `aj.global.root.child`

## Type Tags

### Global type tags

Tags applicable to all nodes of a specific type, regardless of blueprint:

-   `aj.global.display_node`
-   `aj.global.vanilla_display_node`
-   `aj.global.bone`
-   `aj.global.item_display`
-   `aj.global.block_display`
-   `aj.global.text_display`
-   `aj.global.camera`
-   `aj.global.locator`
-   `aj.global.interaction`

### Project type tags

Tags for all nodes of a specific type within a specific blueprint:

-   `<blueprint_id>.display_node`
-   `<blueprint_id>.vanilla_display_node`
-   `<blueprint_id>.bone`
-   `<blueprint_id>.item_display`
-   `<blueprint_id>.block_display`
-   `<blueprint_id>.text_display`
-   `<blueprint_id>.camera`
-   `<blueprint_id>.locator`
-   `<blueprint_id>.interaction`

### Project named type tags

Tags for a specific named node of a specific type within a specific blueprint:

-   `<blueprint_id>.bone.<bone_name>`
-   `<blueprint_id>.item_display.<node_name>`
-   `<blueprint_id>.block_display.<node_name>`
-   `<blueprint_id>.text_display.<node_name>`
-   `<blueprint_id>.camera.<node_name>`
-   `<blueprint_id>.locator.<node_name>`
-   `<blueprint_id>.interaction.<node_name>`

## Hierarchy Tags

Animated Java emits hierarchy tags for bone relationships.

### Child tags

For direct children of a specific bone:

-   `aj.global.bone.<bone>.child`
-   `aj.global.bone.<bone>.child.<type>`
-   `<blueprint_id>.bone.<bone>.child`
-   `<blueprint_id>.bone.<bone>.child.<type>`

`<type>` can be:

-   `bone`
-   `item_display`
-   `block_display`
-   `text_display`
-   `locator`
-   `camera`
-   `interaction`

### Descendant tags

For all descendants of a specific bone (not just direct children):

-   `aj.global.bone.<bone>.decendant`
-   `aj.global.bone.<bone>.decendant.<type>`
-   `<blueprint_id>.bone.<bone>.decendant`
-   `<blueprint_id>.bone.<bone>.decendant.<type>`

Note: the tag key is spelled `decendant` in current output.

### Tree tags

For the full bone tree including the bone itself:

-   `aj.global.bone.<bone>.tree`
-   `aj.global.bone.<bone>.tree.bone`
-   `<blueprint_id>.bone.<bone>.tree`
-   `<blueprint_id>.bone.<bone>.tree.bone`

## Root-Child Type Tags

Nodes directly under root also get one of:

-   `aj.global.root.child.bone`
-   `aj.global.root.child.item_display`
-   `aj.global.root.child.block_display`
-   `aj.global.root.child.text_display`
-   `aj.global.root.child.locator`
-   `aj.global.root.child.camera`
-   `aj.global.root.child.interaction`

And project-scoped equivalents:

-   `<blueprint_id>.root.child.bone`
-   `<blueprint_id>.root.child.item_display`
-   `<blueprint_id>.root.child.block_display`
-   `<blueprint_id>.root.child.text_display`
-   `<blueprint_id>.root.child.locator`
-   `<blueprint_id>.root.child.camera`
-   `<blueprint_id>.root.child.interaction`

## Runtime State Tags

Animated Java also uses runtime state tags:

-   `<blueprint_id>.animation.<animation>.playing`
-   `<blueprint_id>.animation.<animation>.tween_playing`
-   `<blueprint_id>.variant.<variant>.applied`

And internal control tags:

-   `aj.transforms_only`
-   `aj.effects_only`
-   `aj.outdated_rig_text_display`
-   `aj.interacting_player`

## Practical Selector Examples

:::note[Select all rig roots from one Blueprint]

```mcfunction
@e[tag=my_pack.rigs.example.root]
```

:::

:::note[Select all block displays in one Blueprint]

```mcfunction
@e[tag=my_pack.rigs.example.block_display]
```

:::

:::note[Select all descendants of bone "spine" in one blueprint]

```mcfunction
@e[tag=my_pack.rigs.example.bone.spine.decendant]
```

:::

:::note[Select direct children of "spine" that are item displays]

```mcfunction
@e[tag=my_pack.rigs.example.bone.spine.child.item_display]
```

:::

:::note[Select a specific node named "left_hand"]

```mcfunction
@e[tag=my_pack.rigs.example.node.left_hand]
```

:::

## Recommendations

-   Prefer project-scoped tags (`<blueprint_id>...`) in gameplay logic.
-   Treat `aj.global.*` tags as engine-level/internal targeting helpers.
-   Use hierarchy tags for partial-rig operations (arms only, upper body only, etc).

## Related Reading

-   [Rigs](/docs/core-concepts/rigs)
-   [Summon](/docs/function-api/summon)
-   [Remove](/docs/function-api/remove)
