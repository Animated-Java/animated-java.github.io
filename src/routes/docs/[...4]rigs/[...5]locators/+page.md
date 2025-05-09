---
title: Interacting with Locators
description: Locators are points in space that can be used to execute commands at specific positions / rotations relative to your Rig Instance. This page explains how to interact with Locators in your Rig Instance using commands.
---

# { $frontmatter.title }

{ $frontmatter.description }

## Single Locator Functions

-   ### As Locator - `animated_java:<export_namespace>/as_locator`

    Runs a command as **_and at_** a specific locator's entity.

    #### Arguments

    | Name      | Type   | Description                                    |
    | --------- | ------ | ---------------------------------------------- |
    | `name`    | String | The name of the locator to run the command as. |
    | `command` | String | The command to run as the locator.             |

    :::admonition type="info" title="Example"

    ```rust title=Running a command as a locator | copy
    execute as @e[tag=aj.<export_namespace>.root] run \
      function animated_java:<export_namespace>/as_locator \
        {name: '<locator_name>', command:'say Hello, World!'}
    ```

    :::

    :::admonition type=note title=Note
    The `as_locator` function will only work if you have the Locator's [Use Entity](/docs/the-blueprint-format/locators#use-entity) config option enabled.
    :::

-   ### At Locator - `animated_java:<export_namespace>/at_locator`

    Runs a command at a specific locator's position / rotation.

    #### Arguments

    | Name      | Type   | Description                                    |
    | --------- | ------ | ---------------------------------------------- |
    | `name`    | String | The name of the locator to run the command at. |
    | `command` | String | The command to run at the locator's position.  |

    :::admonition type="info" title="Example"

    ```rust title=Running a command at a locator | copy
    execute as @e[tag=aj.<export_namespace>.root] run \
      function animated_java:<export_namespace>/at_locator \
        {name: '<locator_name>', command:'particle minecraft:angry_villager ~ ~ ~'}
    ```

    :::

    :::admonition type=note title=Note
    The `at_locator` function **_does not_** require the Locator's [Use Entity](/docs/the-blueprint-format/locators#use-entity) config option to be enabled.
    :::

## Multi Locator Functions

-   ### As All Locators - `animated_java:<export_namespace>/as_all_locators`

    Runs a command as **_and at_** all locators in the Rig Instance.

    #### Arguments

    | Name      | Type   | Description                         |
    | --------- | ------ | ----------------------------------- |
    | `command` | String | The command to run as all locators. |

    :::admonition type="info" title="Example"

    ```rust title=Running a command as all locators | copy
    execute as @e[tag=aj.<export_namespace>.root] run \
      function animated_java:<export_namespace>/as_all_locators \
        {command:'say Hello, World!'}
    ```

    :::

    :::admonition type=note title=Note
    The `as_all_locators` function will only work if all Locators have the [Use Entity](/docs/the-blueprint-format/locators#use-entity) config option enabled.
    :::

-   ### At All Locators - `animated_java:<export_namespace>/at_all_locators`

    Runs a command at all locators in the Rig Instance.

    :::admonition type="info" title="Example"

    #### Arguments

    | Name      | Type   | Description                         |
    | --------- | ------ | ----------------------------------- |
    | `command` | String | The command to run at all locators. |

    ```rust title=Running a command at all locators | copy
    execute as @e[tag=aj.<export_namespace>.root] run \
      function animated_java:<export_namespace>/at_all_locators \
        {command:'particle minecraft:angry_villager ~ ~ ~'}
    ```

    :::

    :::admonition type=note title=Note
    The `at_all_locators` function **_does not_** require the Locators' [Use Entity](/docs/the-blueprint-format/locators#use-entity) config option to be enabled.
    :::
