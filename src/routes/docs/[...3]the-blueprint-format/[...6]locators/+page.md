---
title: Locators
description: Locators are points in space that can be used to execute commands at specific positions / rotations relative to your Rig Instance.
---

# { $frontmatter.title }

{ $frontmatter.description }

Looking for how to interact with a Locator in-game? Check out [Interacting with Locators](/docs/rigs/locators).

## Creating a Locator

To create a locator, locate the `Add Locator` button above the outliner.

![add-locator-action](/img/steps/locator/1.png)

If this button isn't there, you can press `h` and then search for `Add Locator`.

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

## Animating Locators

### Position / Rotation

Locators must be a child of a Bone in order to be positioned / rotated.

### Command Keyframes

When selecting a Locator in `Animate Mode`, you can add Command Keyframes to it's Timeline to play commands at specific times during an animation.

![locator-keyframes](/img/steps/locator/2.png)

#### Command Keyframe Options

- #### Command

  The command(s) that will be executed. Supports multiple commands (one per line) similar to a `mcfunction`, and supports [MC-Build](https://mcbuild.dev/) syntax.

- #### Repeat?

  If enabled, the command will be executed every `Repeat Frequency` ticks until the next keyframe.

- #### Repeat Frequency

  The amount of ticks between each repeated command execution. A value of `1` will execute the command every tick.

  `Repeat Frequency` is relative to the animation, and will pause / play with the animation.

  If your animation's length is not evenly divisible by the `Repeat Frequency`, the time between the last command execution and the end of the animation will be less than the `Repeat Frequency`.

- #### Execute Condition

  A condition that must be met in order for the command to be executed.

  Expects a chain of [execute sub-commands](https://minecraft.wiki/w/Commands/execute#Syntax) without `execute` or `run`.

  :::admonition type=info title=Example

  ```rust title="A Simple Execute Condition"
  if entity @s[tag=my_tag]
  ```

  ```rust title="A More Complex Execute Condition"
  aligned xyz positioned ~.5 ~ ~.5 if entity @n[tag=my_tag,distance=..0.1]
  ```

  :::
