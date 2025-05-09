---
title: Summoning a New Rig Instance
description: Learn how to summon a new Rig Instance.
---

# { $frontmatter.title }

To summon a new Rig Instance, you will need to use the `summon` function provided by the Rig's export namespace. This function will create a new Rig Instance at your current position, and rotation in the world:

```rust title=Summoning a Rig Instance | copy
function animated_java:<export_namespace>/summon {args: {}}
```

However, you may want to specify the position and rotation of the Rig Instance. To do this, you can change the execution context of the `summon` function:

```rust title=Summoning a Rig Instance at a specific position and rotation | copy
execute positioned <x> <y> <z> rotated <rx> <ry> run \
	function animated_java:<export_namespace>/summon {args: {}}
```

## Arguments

| Name              | Type    | Description                                                                                                                                                                      |
| ----------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `variant`         | String  | The name of the Variant of the Rig Instance to summon. If not specified, the default Variant will be used.                                                                       |
| `animation`       | String  | The name of the Animation to use as the summoned pose of the Rig Instance. If not specified, the default pose will be used.                                                      |
| `frame`           | Integer | Which frame of the Animation to use as the summoned pose of the Rig Instance. If not specified, the first frame will be used. Requires the `animation` argument to be specified. |
| `start_animation` | Boolean | Whether to start the Animation when the Rig Instance is summoned. If not specified, the Animation will not start. Requires the `animation` argument to be specified.             |

:::admonition type="info" title="Examples"

```rust title="Summon a Rig Instance with the no_head Variant"
function animated_java:<export_namespace>/summon {args: {variant: 'no_head'}}
```

Summon a Rig Instance posed as the first frame of the `walk` Animation:

```rust
function animated_java:<export_namespace>/summon {args: {animation: 'walk'}}
```

Summon a Rig Instance posed as the third frame of the `walk` Animation:

```rust
function animated_java:<export_namespace>/summon {args: {animation: 'walk', frame: 3}}
```

Summon a Rig Instance posed as the first frame of the `walk` Animation and start the Animation:

```rust
function animated_java:<export_namespace>/summon {args: {animation: 'walk', start_animation: true}}
```

:::
