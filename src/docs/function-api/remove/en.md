---
title: Remove
description: How to remove a Rig instance from Minecraft.
---

# Remove

Animated Java generates three functions for removing rigs.

## remove/this

```
<blueprint_id>/remove/this
```

Removes the rig instance you're executing as. Must be run **as the root entity** of the rig.

```mcfunction
# Remove the nearest my_rig instance
execute as @e[tag=my_pack.my_rig.root,sort=nearest,limit=1] run function my_pack:my_rig/remove/this
```

In order, it:

1. runs the Blueprint's [On-Remove Function](/docs/core-concepts/blueprints#on-remove-function),
2. runs each Locator's and Interaction's On-Remove function,
3. removes every entity in the rig.

:::warning
Removing a rig also removes any entity riding it, except players. If you've mounted your own entities on a rig (for example with [Stacking Rigs](/docs/guides/stacking-rigs)), they're removed with it.
:::

To remove a rig **without** running any On-Remove functions, use `<blueprint_id>/remove/this/without_on_remove_function`.

## remove/all

```
<blueprint_id>/remove/all
```

Runs `remove/this` for every loaded instance of this Blueprint. Works from any context.

```mcfunction
function my_pack:my_rig/remove/all
```

## remove/entities

```
<blueprint_id>/remove/entities
```

Kills every loaded entity with this Blueprint's `<blueprint_id>.entity` tag, without running any On-Remove functions.

```mcfunction
function my_pack:my_rig/remove/entities
```

:::warning
This is a cleanup tool for when something's gone wrong. Use `remove/this` or `remove/all` for everything else.
:::

## Removing Every Rig

To kill every Animated Java entity from every Blueprint, run:

```mcfunction
function animated_java:global/remove/everything
```

## Related Reading

-   [Summon](/docs/function-api/summon)
-   [Tags](/docs/core-concepts/tags)
