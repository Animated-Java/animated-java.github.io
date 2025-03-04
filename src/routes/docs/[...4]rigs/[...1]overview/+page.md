---
title: Overview
description: An overview of what a Rig is.
---

# { $frontmatter.title }

## What is a Rig?

A Rig is the collection of entities that make up an Animated Java model. Calling a Rig's summon function will create a Rig Instance in your Minecraft world.

Rigs are made up of the following entities:

-   The Root Entity: The base entity of a Rig. All other rig entities (with the exception of [Locators](/docs/the-blueprint-format/locators) with [Use Entity](/docs/the-blueprint-format/locators#use-entity) enabled, and [Cameras](/docs/the-blueprint-format/cameras)) are passengers of the root entity
-   [Bones](/docs/the-blueprint-format/bones): Displays a custom model.
-   [Block Displays](/docs/the-blueprint-format/block-displays): Displays a vanilla block.
-   [Item Displays](/docs/the-blueprint-format/item-displays): Displays an vanilla item.
-   [Text Displays](/docs/the-blueprint-format/text-displays): Displays text.
-   Data Entity: A marker entity that stores all of the NBT data for the Rig.
-   [Cameras](/docs/the-blueprint-format/cameras): Used to animate smooth camera movements.
