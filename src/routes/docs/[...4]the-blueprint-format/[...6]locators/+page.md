---
title: Locators
description: Locators are used to execute commands at a specific position / rotation relative to the Rig Instance.
---

# { $frontmatter.title }

{ $frontmatter.description }

## Config Options

- ### Use Entity

  If enabled, the locator will have an entity associated with it.

- ### Entity Type

  The entity type of the locator's entity.

  _Requires `Use Entity` to be enabled._

- ### Summon Commands

  The commands that will be executed when the locator is summoned.

  _Requires `Use Entity` to be enabled._

- ### Ticking Commands

  Custom commands that will be executed every tick.

  If `Use Entity` is enabled, the commands will be executed as the locator's entity.

## Excuting Commands as / at Locators

:::admonition type=info title=Example
Execute at a specific locator's position

```txt title="foo/as_root.mcfunction"
execute as <root> on passengers if entity @s[tag=aj.data] run function foo:position with entity @s data.locators.<locator_name>
```

```txt title="foo/position.mcfunction"
$execute positioned $(posx) $(posy) $(posz) rotated $(roty) $(rotx) run ...
```

:::

:::admonition type=info title=Example
Execute as a specific locator's entity

Note that this method will only work if you have the Locator's `Use Entity` config option enabled.

```txt title="foo/as_root.mcfunction"
execute as <root> on passengers if entity @s[tag=aj.data] run function foo:select with entity @s data.locators.<locator_name>
```

```txt title="foo/select.mcfunction"
$execute as $(uuid) run ...
```

:::

:::admonition type=info title=Example

Executing commands at all of a Rig Instance's locators that have an entity associated with them.

```txt title="foo/as_root.mcfunction"
execute as <root> run function animated_java:<export_namespace>/as_own_locator_entities {command:'function foo:as_locator'}
```

```txt title="foo/as_locator.mcfunction"
say Hello, World!
```

:::
