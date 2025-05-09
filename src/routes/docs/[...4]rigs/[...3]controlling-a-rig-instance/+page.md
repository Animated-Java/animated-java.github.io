---
title: Controlling a Rig Instance
description: Learn how to control a Rig Instance.
---

# { $frontmatter.title }

{ $frontmatter.description }

## Selecting the Rig Instance

Before we can control a Rig Instance, we need to be able to select it. The following selectors can be used to select Rig Instances:

```rust title=Select all Rig Instances | copy
@e[type=item_display,tag=aj.global.root]
```

```rust title=Select all Rig Instances from a specific Blueprint | copy
@e[type=item_display, tag=aj.<export_namespace>.root]
```

## Moving and Rotating the Rig Instance

Similar to how we control normal entities in Minecraft, we can move and rotate Rig Instances using the `tp` or `rotate` command.

```rust title=Move a Rig Instance 5 blocks towards positive X | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] at @s run \
	tp @s ~5 ~ ~
```

```rust title=Rotate a Rig Instance 90 degrees | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] at @s run \
	rotate @s ~90 ~
```

```rust title=Move a Rig Instance 5 blocks upwards and rotate it 90 degrees | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] at @s run \
	tp @s ~ ~5 ~ ~90 ~
```

## Applying Variants

Variants can be applied to the Rig Instance using the desired Variant's `apply` function.

```rust title=Apply the angry Variant | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] run \
	function animated_java:<export_namespace>/variants/angry/apply
```

There is no way to remove a Variant individually once it has been applied. To reset the Variant to it's default state, you can apply the default Variant.

```rust title=Apply the default Variant | copy
execute as @e[type=item_display,tag=aj.<export_namespace>.root] run \
	function animated_java:<export_namespace>/variants/default/apply
```

:::admonition type=warning
Applying the default Variant _will not_ remove any NBT the Variant has modified due to bone configs.

You will have to manually reset the NBT to it's default state, or re-summon the Rig Instance.
:::
