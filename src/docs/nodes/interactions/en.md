---
title: Interactions
description: A node that creates an interaction entity, which can be right and left clicked by the player to trigger functions.
---

# Interactions

Interactions are used to react to player inputs. They can be right and left clicked to trigger functions.

<img src="/images/docs/nodes/interactions/example1.png" alt="Interaction example"/>

## Element Options

-   #### Displayed Item

    The ID of the item to display.

## Entity Creation

An Interaction always creates a `minecraft:interaction` entity when exported.

All functions support [MC-Build](https://mcbuild.dev) syntax unless otherwise stated.

## Interaction Config

The interaction config is accessed by right-clicking on the interaction node in the outliner.

-   ### Response

    Whether interacting with this interaction should trigger a response (Hand animation / attack sound) when the player interacts with it.

-   ### On-Summon Function

    A function that is executed `as` and `at` the entity when it is summoned.

-   ### On-Interact Function

    A function that is executed `as` and `at` the entity when a player interacts with it.

    You can use `execute on target` to select the player who interacted with the entity.

-   ### On-Attack Function

    A function that is executed `as` and `at` the entity when a player attacks it.

    You can use `execute on target` to select the player who attacked the entity.

-   ### On-Remove Function

    A function that is executed `as` and `at` the entity when it is removed.

-   ### On-Tick Function

    A function that is executed `as` and `at` the entity every tick.

## Accessing Interactions at Runtime

Use the [interaction utility functions](/docs/function-api/utilities#interaction-functions) to run commands as or at interaction entities:

```mcfunction
# Execute as a specific interaction entity
execute as @e[tag=my_pack.my_rig.root] run \
    function my_pack:my_rig/as_interaction {name: "hitbox", command: "say I was targeted!"}

# Execute at every interaction's transform position
execute as @e[tag=my_pack.my_rig.root] run \
    function my_pack:my_rig/at_all_interactions {command: "particle minecraft:crit ~ ~ ~"}
```

Interaction entities also include scoreboard tags for direct selection:

```
<blueprint_id>.interaction.<name>
```

## Plugin Mode

Interaction configs are not available when [Plugin Mode](/docs/core-concepts/blueprints#enable-plugin-mode) is enabled. All interaction settings are hidden in plugin mode.

## Notes

-   Interaction entities are **not passengers** of the root entity — they are free-floating entities that are repositioned every tick to follow their parent bone's transform.
-   Interaction entities do not support rotation. Their axes are always world-axis-aligned.
-   The `width` and `height` of the interaction entity are determined by the node's size in the Blockbench editor.
