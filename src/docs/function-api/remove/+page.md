---
title: Remove
description: How to remove a Rig instance from Minecraft.
---

Animated Java generates three remove functions for every blueprint. They let you remove a single rig instance, all instances of the rig, or all entities associated with the rig.

All remove functions (except `remove/entities`) fire any configured `on_remove_function` hooks and clean up data storage before killing entities.

## remove/this

Removes the **single rig instance** you are executing as.

**Function path:**

```
<blueprint_id>/remove/this
```

**Must be run as the root entity of the rig** (the entity with the `<blueprint_id>.root` tag).

```mcfunction
# Remove a specific rig by selector
execute as @e[tag=my_pack.my_rig.root,limit=1] run function my_pack:my_rig/remove/this

# Remove the rig the command block is riding
execute as @e[tag=my_pack.my_rig.root,sort=nearest,limit=1] run function my_pack:my_rig/remove/this
```

**What it does:**

1. Runs the blueprint-level `on_remove_function`.
2. Runs any per-node `on_remove_function` callbacks.
3. Kills the root entity and all its passengers.
4. Kills any free-floating entities (interactions, locator entities, cameras).
5. Removes the rig's data storage entry.

## remove/all

Removes **every instance** of this rig from the world.

**Function path:**

```
<blueprint_id>/remove/all
```

Can be called from any context. Equivalent to running `remove/this` as all root entities of this blueprint.

```mcfunction
function my_pack:my_rig/remove/all
```

## remove/entities

Kills **every entity** associated with this blueprint — including passengers, floating entities, interactions, cameras, and the root entity — without running any `on_remove_function` hooks.

**Function path:**

```
<blueprint_id>/remove/entities
```

This is a lower-level cleanup function. Prefer `remove/this` or `remove/all` for normal use, since those properly run lifecycle hooks and clean up storage.

```mcfunction
function my_pack:my_rig/remove/entities
```

:::warning
This removes every entity related to this blueprint simultaneously. It is primarily intended for emergency cleanup if something goes wrong with the rig and normal removal isn't working. Use with caution.
:::

## Tags Used for Identification

Animated Java tags every rig entity with scoreboard tags to make selection easy:

| Tag                     | Selects                                |
| ----------------------- | -------------------------------------- |
| `aj.global.root`        | Root entity of any AJ rig              |
| `aj.global.entity`      | Any entity belonging to any AJ rig     |
| `<blueprint_id>.root`   | Root entity of this specific blueprint |
| `<blueprint_id>.entity` | Any entity belonging to this blueprint |

**Examples:**

```mcfunction
# Kill all AJ entities from ALL blueprints (emergency cleanup)
kill @e[tag=aj.global.entity]

# Select this rig's root from any context
execute as @e[tag=my_pack.my_rig.root] run ...
```
