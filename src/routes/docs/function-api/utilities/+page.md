---
title: Utilities
description: Utility functions for targeting specific entities within a Rig instance.
---

## Overview

Beyond the core summon, remove, animation, and variant functions, Animated Java generates a set of **utility functions** for targeting specific entities within a rig. These let you run custom commands as or at bones, locators, interactions, and cameras without needing to know their UUIDs.

All utility functions use Minecraft's [macro syntax](<https://minecraft.wiki/w/Function_(Java_Edition)#Macro>) and accept a `command` argument that is executed in the resolved context.

## Node Functions

### as_node

Executes a command **as** the bone/display entity with the given name.

```mcfunction
#ARGS: {name: string, command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/as_node {name: "head", command: "say I am the head bone!"}
```

### as_root

Executes a command **as** the root entity of the rig. Can be run from **any** entity that has the rig's ID score set.

```mcfunction
#ARGS: {command: string}
execute as @e[tag=my_pack.my_rig.entity] run function my_pack:my_rig/as_root {command: "say I am the root!"}
```

### move

Teleports the entire rig to the execution position and rotation, updating all floating entity positions (cameras, locators, interactions).

```mcfunction
# Move the rig to a specific location
execute positioned 10 64 20 rotated 0 0 as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/move
```

:::note
The `move` function is only generated when the [Auto Update Rig Orientation](/docs/core-concepts/blueprints#Auto-Update-Rig-Orientation) option is disabled. Since when it's enabled, you can simply teleport the root entity to move the rig.
:::

## Interaction Functions

These functions are only generated if the blueprint contains at least one [Interaction](/docs/nodes/interactions) node.

### as_interaction

Executes a command **as** the interaction entity with the given name.

```mcfunction
#ARGS: {name: string, command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/as_interaction {name: "hitbox", command: "say I was interacted with!"}
```

### as_at_interaction

Executes a command **as and at** the interaction entity with the given name.

```mcfunction
#ARGS: {name: string, command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/as_at_interaction {name: "hitbox", command: "particle minecraft:heart ~ ~ ~"}
```

### at_interaction

Executes a command **at** the transform position of the interaction entity with the given name (without switching execution entity).

```mcfunction
#ARGS: {name: string, command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/at_interaction {name: "hitbox", command: "particle minecraft:crit ~ ~ ~"}
```

### as_all_interactions / as_at_all_interactions / at_all_interactions

Same as above, but targets **every** interaction entity in the rig simultaneously. No `name` argument needed.

```mcfunction
#ARGS: {command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/as_all_interactions {command: "say Hello from all interactions!"}
```

## Locator Functions

These functions are only generated if the blueprint contains [Locator](/docs/nodes/locators) nodes.

### at_locator

Executes a command **at** the world position of the locator with the given name.

```mcfunction
#ARGS: {name: string, command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/at_locator {name: "hand", command: "particle minecraft:flame ~ ~ ~"}
```

### at_all_locators

Executes a command **at** every locator in the rig.

```mcfunction
#ARGS: {command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/at_all_locators {command: "particle minecraft:end_rod ~ ~ ~"}
```

### as_locator / as_at_locator / as_all_locators / as_at_all_locators

Available only for locators that have [Use Entity](/docs/nodes/locators#use-entity) enabled. Same semantics as the interaction variants above.

```mcfunction
#ARGS: {name: string, command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/as_locator {name: "mount_point", command: "say I am the mount point entity!"}
```

## Camera Functions

These functions are only generated if the blueprint contains [Camera](/docs/nodes/cameras) nodes.

### as_camera

Executes a command **as** the camera entity with the given name.

```mcfunction
#ARGS: {name: string, command: string}
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/as_camera {name: "eye", command: "tp @p ~ ~ ~"}
```

## Scoreboard Tags Reference

You can use these tags to select rig entities directly without utility functions:

| Tag                                 | Meaning                             |
| ----------------------------------- | ----------------------------------- |
| `aj.global.root`                    | Root entity of any AJ rig           |
| `aj.global.entity`                  | Any entity in any AJ rig            |
| `aj.global.bone`                    | Any bone entity in any AJ rig       |
| `aj.global.locator`                 | Any locator entity in any AJ rig    |
| `aj.global.camera`                  | Any camera entity in any AJ rig     |
| `<blueprint_id>.root`               | Root of this specific blueprint     |
| `<blueprint_id>.entity`             | Any entity in this blueprint's rigs |
| `<blueprint_id>.bone.<name>`        | Specific named bone entity          |
| `<blueprint_id>.locator.<name>`     | Specific named locator entity       |
| `<blueprint_id>.camera.<name>`      | Specific named camera entity        |
| `<blueprint_id>.interaction.<name>` | Specific named interaction entity   |

See [Core Concepts: Tags](/docs/core-concepts/tags) for more details on how entity tags are used in Animated Java.
