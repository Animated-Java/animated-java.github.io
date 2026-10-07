---
title: Utilities
description: Utility functions for targeting specific entities within a Rig instance.
---

# Utilities

These functions run your own commands as, or at, a specific part of one rig instance, without needing UUIDs or selectors.

They're [macro functions](<https://minecraft.wiki/w/Function_(Java_Edition)#Macros>): pass the node's `name` and the `command` to run. `name` is the node's exported name (lowercase, with anything other than letters, digits, and underscores turned into `_`). Unless noted otherwise, they must be run **as the root entity** of the rig.

## Nodes

### as_node

Runs a command **as** the entity of the node with the given name. Works for bones, displays, Cameras, Interactions, and Locators that use an entity.

```mcfunction
#ARGS: {name: string, command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/as_node {name: "head", command: "say I am the head!"}
```

### as_root

Runs a command **as** the rig's root entity. Unlike the other utilities, this one can be run as **any** entity in the rig, which makes it handy in a node's own functions.

```mcfunction
#ARGS: {command: string}
execute as @e[tag=my_pack.my_rig.node.head] run function my_pack:my_rig/as_root {command: "say I am the root!"}
```

### move

Teleports the whole rig to the execution position and rotation, and moves its floating entities (Locators, Cameras, and Interactions) along with it.

```mcfunction
execute positioned 10 64 20 rotated 0 0 as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/move
```

:::note
`move` is meant for rigs with [Auto Update Rig Orientation](/docs/core-concepts/blueprints#auto-update-rig-orientation) turned off. When it's on, teleport the root entity instead: the rig follows it automatically, and `move` only prints a warning.
:::

## Interactions

Only generated if the Blueprint has at least one [Interaction](/docs/nodes/interactions).

### as_interaction

Runs a command **as** the named Interaction entity.

```mcfunction
#ARGS: {name: string, command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/as_interaction {name: "hitbox", command: "say I was targeted!"}
```

### as_at_interaction

Runs a command **as and at** the named Interaction entity.

```mcfunction
#ARGS: {name: string, command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/as_at_interaction {name: "hitbox", command: "particle minecraft:heart ~ ~ ~"}
```

### at_interaction

Runs a command **at** the named Interaction's position on the rig, still executing as the root entity.

```mcfunction
#ARGS: {name: string, command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/at_interaction {name: "hitbox", command: "particle minecraft:crit ~ ~ ~"}
```

### as_all_interactions, as_at_all_interactions, at_all_interactions

The same as the three above, but for **every** Interaction in the rig. They only take a `command`.

```mcfunction
#ARGS: {command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/as_all_interactions {command: "say Hello from every Interaction!"}
```

## Locators

Only generated if the Blueprint has at least one [Locator](/docs/nodes/locators).

### at_locator

Runs a command **at** the named Locator's position and rotation, still executing as the root entity. Works for every Locator.

```mcfunction
#ARGS: {name: string, command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/at_locator {name: "hand", command: "particle minecraft:flame ~ ~ ~"}
```

### at_all_locators

Runs a command **at** every Locator in the rig.

```mcfunction
#ARGS: {command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/at_all_locators {command: "particle minecraft:end_rod ~ ~ ~"}
```

### as_locator, as_at_locator, as_all_locators, as_at_all_locators

Run a command **as** (or **as and at**) a Locator's entity. These only work with Locators that have [Use Entity](/docs/nodes/locators#use-entity) enabled, and are only generated if at least one does.

```mcfunction
#ARGS: {name: string, command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/as_locator {name: "mount_point", command: "say I am the mount point!"}
```

## Cameras

Only generated if the Blueprint has at least one [Camera](/docs/nodes/cameras).

### as_camera

Runs a command **as and at** the named Camera entity.

```mcfunction
#ARGS: {name: string, command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/as_camera {name: "eye", command: "tp @p ~ ~ ~ ~ ~"}
```

## Uninstalling

### remove_animation_objectives

Removes the scoreboard objectives that track this Blueprint's animation frames. Run it when removing the Blueprint's Data Pack from a world. Only generated if the Blueprint has animations. Can be run from any context.

```mcfunction
function my_pack:my_rig/remove_animation_objectives
```

## Related Reading

-   [Tags](/docs/core-concepts/tags), for selecting rig entities directly.
-   [Locators](/docs/nodes/locators), [Interactions](/docs/nodes/interactions), and [Cameras](/docs/nodes/cameras).
