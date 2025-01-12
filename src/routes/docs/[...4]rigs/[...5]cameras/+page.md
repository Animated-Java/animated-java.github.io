---
title: Interacting with Cameras
description: Cameras are specialized Locators optimized to orient a player's screen, and can be used to create cutscenes, custom player perspectives, and more. This page explains how to interact with Cameras in your Rig Instance using commands.
---

# { $frontmatter.title }

{ $frontmatter.description }

## Force the Player to Spectate a Camera

:::admonition type=info title=Example

```py title="foo/as_root.mcfunction"
execute \
  # Get the root entity context
  as @e[tag=aj.global.root] \
  # Execute the command on the root's passengers
  on passengers \
  # Filter out the data entity from the passengers
  if entity @s[tag=aj.global.data] \
run \
  # Run our select function with the Camera's UUID
  function foo:select with entity @s data.cameras.<camera_name>
```

```py title="foo/select.mcfunction"
$execute as $(uuid) run spectate @s @p
```

:::
