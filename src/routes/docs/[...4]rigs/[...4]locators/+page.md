---
title: Interacting with Locators
description: Locators are points in space that can be used to execute commands at specific positions / rotations relative to your Rig Instance. This page explains how to interact with Locators in your Rig Instance using commands.
---

# { $frontmatter.title }

{ $frontmatter.description }

## Excuting Commands using Locator Offset Data

You can execute commands at a specific locator's position / rotation using the data entity's `data.locators.<locator_name>` NBT.

:::admonition type=info title=Example
Execute at a specific locator's position

```py title=foo/as_root.mcfunction | copy
execute \
    # Get the root entity context
    as @e[tag=aj.global.root] at @s \
    # Execute the command on the root entity's passengers
    on passengers \
    # Filter out the data entity from the passengers
    if entity @s[tag=aj.global.data] \
run \
  # Run our position function with the Locator's position data
  function foo:position with entity @s data.locators.<locator_name>
```

Then, using the locator's position data, we can now execute commands at that position with macros:

```rust title=foo/position.mcfunction | copy
$execute positioned ^$(posx) ^$(posy) ^$(posz) rotated ~$(roty) ~$(rotx) run ...
```

:::admonition type=note
You should _always_ replace the example `@e[tag=aj.global.root]` selector with a more specific selector.
:::

:::admonition type=info title=Example
Execute as a specific locator's entity

Note that this method will only work if you have the Locator's `Use Entity` config option enabled.

```py title=foo/as_root.mcfunction | copy
execute \
  # Get the root entity context
  as @e[tag=aj.global.root] at @s \
  # Execute the command on the root entity's passengers
  on passengers \
  # Filter out the data entity from the passengers
  if entity @s[tag=aj.global.data] \
run \
  # Run our select function with the Locator's UUID
  function foo:select with entity @s data.locators.<locator_name>
```

Then, using the locator's UUID, we can now execute commands as that entity with macros:

```rust title=foo/select.mcfunction | copy
$execute as $(uuid) run ...
```

:::

## Executing Commands as Locator Entities

You can use the `as_own_locator_entities` function to execute commands as all of a Rig Instance's locator entities.

:::admonition type=info title=Example

```rust title=foo/as_root.mcfunction | copy
execute as @e[tag=aj.global.root] run \
  function animated_java:<export_namespace>/as_own_locator_entities \
    {command:'function foo:as_locator'}
```

```rust title=foo/as_locator.mcfunction | copy
say Hello, World!
```

:::
