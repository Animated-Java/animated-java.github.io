---
title: Tags
description: Entity tags generated and used by Animated Java rigs.
---

# Tags

Animated Java gives every entity in a rig a set of tags, so you can target exactly the part of a rig you want with a selector.

## How Names Become Tags

Tags start with either `aj.global` (shared by every rig from every Blueprint) or your Blueprint ID. In tags, the `:` and `/` in your Blueprint ID become `.`, so `my_pack:boss/dragon` becomes `my_pack.boss.dragon`.

Node names are their exported names: lowercase, with anything other than letters, digits, and underscores turned into `_`.

## Root Entity

Every rig's root entity has:

-   `aj.global.entity`
-   `aj.global.root`
-   `<blueprint_id>.entity`
-   `<blueprint_id>.root`
-   your [Custom Rig Entity Tags](/docs/core-concepts/blueprints#custom-rig-entity-tags)

## Every Node

Every entity a node creates (bones, displays, Locators, Cameras, and Interactions) has:

-   `aj.global.entity`
-   `aj.global.node`
-   `aj.global.node.<name>`
-   `<blueprint_id>.entity`
-   `<blueprint_id>.node`
-   `<blueprint_id>.node.<name>`
-   your [Custom Rig Entity Tags](/docs/core-concepts/blueprints#custom-rig-entity-tags)

## Node Types

`<type>` is one of `bone`, `item_display`, `block_display`, `text_display`, `locator`, `camera`, or `interaction`. Each node has:

-   `aj.global.<type>`: every node of this type, from any Blueprint.
-   `<blueprint_id>.<type>`: every node of this type in this Blueprint.
-   `<blueprint_id>.<type>.<name>`: one specific node.

Bones, Item Displays, Block Displays, and Text Displays also have:

-   `aj.global.display_node.<name>`
-   `<blueprint_id>.display_node.<name>`

## Hierarchy

These tags describe where a node sits under a bone. In each of them, `<bone>` is the name of a parent bone, and every tag exists in an `aj.global.bone.<bone>...` and a `<blueprint_id>.bone.<bone>...` form.

### Children

On every node directly inside `<bone>`:

-   `<blueprint_id>.bone.<bone>.child`
-   `<blueprint_id>.bone.<bone>.child.<type>`

### Descendants

On every node anywhere inside `<bone>`, at any depth:

-   `<blueprint_id>.bone.<bone>.decendant`
-   `<blueprint_id>.bone.<bone>.decendant.<type>`

:::note
`decendant` is spelled this way in the exported tags. Use the same spelling in your selectors.
:::

### Trees

`<bone>` and everything inside it:

-   `<blueprint_id>.bone.<bone>.tree`: the bone and every node inside it.
-   `<blueprint_id>.bone.<bone>.tree.bone`: the bone and every bone inside it.

### Root Children

Nodes that aren't inside any bone have:

-   `aj.global.root.child`
-   `aj.global.root.child.<type>`

## State Tags

Root entities also get these while the rig runs:

-   `<blueprint_id>.animation.<animation>.playing`: the animation is playing.

Animated Java also uses a few internal tags. Don't add or remove these yourself:

-   `aj.new`: on entities that are still being summoned.
-   `aj.transforms_only`: while a frame is set without running its keyframe effects.
-   `aj.pause_after_tween`: set by [`tween_paused`](/docs/function-api/animations#tween_paused).
-   `aj.interacting_player`: on a player while an Interaction runs its On-Interact or On-Attack function.
-   `aj.outdated_rig_text_display`: on the warning label shown above outdated rigs in debug exports.

## Selector Examples

:::note[Every root entity from one Blueprint]

```mcfunction
@e[tag=my_pack.rigs.example.root]
```

:::

:::note[Every Block Display in one Blueprint]

```mcfunction
@e[tag=my_pack.rigs.example.block_display]
```

:::

:::note[Everything inside the bone "spine"]

```mcfunction
@e[tag=my_pack.rigs.example.bone.spine.decendant]
```

:::

:::note[Item Displays directly inside "spine"]

```mcfunction
@e[tag=my_pack.rigs.example.bone.spine.child.item_display]
```

:::

:::note[The node named "left_hand"]

```mcfunction
@e[tag=my_pack.rigs.example.node.left_hand]
```

:::

:::tip
These selectors match the node in **every** instance of the rig. To target one instance, run your command through a rig function like [`as_node`](/docs/function-api/utilities#as_node), or check the `aj.id` score.
:::

## Recommendations

-   Use `<blueprint_id>...` tags in your own logic. `aj.global...` tags match every rig from every Blueprint.
-   Use hierarchy tags for partial-rig effects, like making only the arms glow.

## Related Reading

-   [Rigs](/docs/core-concepts/rigs)
-   [Function API: Utilities](/docs/function-api/utilities)
