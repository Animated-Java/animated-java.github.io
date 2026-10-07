---
title: Interactions
description: A node that creates an interaction entity, which can be right and left clicked by the player to trigger functions.
---

# Interactions

Interactions are clickable hitboxes. Players can right-click (interact with) or left-click (attack) them to trigger your commands.

<img src="/images/docs/nodes/interactions/example1.png" alt="Interaction example"/>

## Entity Creation

An Interaction always creates an `interaction` entity. Like Locators and Cameras, it isn't a passenger: Animated Java teleports it into place every tick (see [Floating Entities](/docs/core-concepts/rigs#floating-entities)).

## Size

Resize the Interaction in the editor to set its hitbox. Its width covers both the X and Z axes, and 16 pixels is one block.

Interaction hitboxes are always aligned to the world's axes. They follow the rig's movement and rotation, but the box itself never turns.

## Interaction Config

Right-click an Interaction in the Outliner and choose **Interaction Config**. All of its functions support [MC-Build](https://mcbuild.dev) syntax.

-   #### Response

    Whether interacting with it plays a response: the player's hand swings, or an attack sound plays.

-   #### On-Summon Function

    Commands that run `as` and `at` the Interaction when the rig is summoned.

-   #### On-Interact Function

    Commands that run `as` the Interaction when a player right-clicks it. Use `execute on target` to select that player.

-   #### On-Attack Function

    Commands that run `as` the Interaction when a player left-clicks it. Use `execute on attacker` to select that player.

    :::note
    On-Interact and On-Attack run at the **player's** position. Start your commands with `execute at @s` if you need the Interaction's position.
    :::

-   #### On-Remove Function

    Commands that run `as` and `at` the Interaction when the rig is removed.

-   #### On-Tick Function

    Commands that run `as` and `at` the Interaction every tick.

## Interaction Keyframes

Interactions can be moved with position keyframes, and have **Function** keyframes like [Locators](/docs/nodes/locators#locator-keyframes) do.

## Accessing Interactions In-Game

Use the [Interaction functions](/docs/function-api/utilities#interactions):

```mcfunction
# Run a command as the "hitbox" Interaction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/as_interaction {name: "hitbox", command: "say I was targeted!"}

# Spawn particles at every Interaction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/at_all_interactions {command: "particle minecraft:crit ~ ~ ~"}
```

You can also select one directly with its `<blueprint_id>.interaction.<name>` tag.

## Plugin Mode

Interactions have no config in [Plugin mode](/docs/core-concepts/exporting#plugin-exports). Use your plugin's API to add behavior to them instead.
