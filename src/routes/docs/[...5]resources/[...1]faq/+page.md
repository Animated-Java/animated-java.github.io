---
title: FAQ
description: Frequently asked questions about Animated Java.
---

# {$frontmatter.title}

{$frontmatter.description}

## How do I install Animated Java?

See [Installing Animated Java](/docs/getting-started/installing-animated-java).

---

## What versions of Minecraft does Animated Java support?

Animated Java v1.6.4 supports Minecraft 1.20.4 and above.

For older versions of Minecraft, see [Legacy Releases](/docs/legacy-releases/versions)

## How can I support the development of Animated Java?

You can support my projects on Ko-Fi at [ko-fi.com/snavesutit](/support-us)! ❤️

Alternatively, you can give the project a [star on GitHub](/source) ⭐ and share the project with your friends!

---

## What model limitations does Animated Java have and how do they compare to Vanilla Minecraft?

Animated Java has fewer limitations than Vanilla Minecraft, but there are still a few limitations to keep in mind when creating your models:

-   Elements, like in Vanilla Minecraft, are limited to rotations of 22.5 degree increments and can only be rotated on one axis at a time. However, bones and display nodes (like [Text Displays](/docs/the-blueprint-format/text-displays), or [Block Displays](/docs/the-blueprint-format/block-displays)) can be rotated freely.
-   Animated Java completely removes all size limitations of Vanilla Minecraft.

---

## Are there any performance concerns with Animated Java? / What can I do to improve performance?

There are a few things you can do to make sure your models run as smoothly as possible:

-   Use a few bones as possible. The more bones you have, the more NBT modifications need to be done each frame. Note that bones with no Cubes in them are not exported, and therefor do not contribute to performance issues.
-   Avoid playing animations when your Rig is not visible to the player.

Animated Java is designed to be as efficient as possible, but there are still some limitations to what can be done with commands. If you are experiencing performance issues, consider joining the [Animated Java Discord](/discord) for help and advice.

---

## Can I use vanilla item / block models?

**Yes!** You can use [Block Display Nodes](/docs/the-blueprint-format/block-displays) and [Item Display Nodes](/docs/the-blueprint-format/item-displays) to display vanilla blocks and items in your models.

In order to fully disable Resource Pack exporting, you can set [Resource Pack Export Mode](/docs/the-blueprint-format/settings#resource-pack-export-mode) to `None` in your Blueprint's settings.

---

## Can I have multiple exported rigs in a single Data Pack / Resource Pack?

**Yes!** As long as each Rig's Blueprint has a unique [Export Namespace](/docs/the-blueprint-format/settings#export-namespace), Animated Java will automatically handle merging with pre-existing rigs in the targeted Data Pack / Resource Pack.

---

## Can I play multiple animations at the same time?

**Yes!\***

\*Only one animation may affect any given bone at a time. However, you can play multiple animations simultaneously by having them affect different bones.

See the [Included / Excluded Bones](/docs/the-blueprint-format/animations#included-excluded-bones) section of Blueprint Animations for more information.

---

## How can I make a model's head / bone look at a player / entity / location?

Check out the [Stacking Rigs](/docs/resources/tutorials/stacking-rigs) tutorial.

---

## Can I preview custom fonts in Text Displays?

**No.** Animated Java does not yet support previewing custom fonts. :pensive:

You can still use custom fonts, they will just display as the default Vanilla font in the preview.

---

## Can I smoothly transition between different animations?

**Yes!** See the [Tweening](/docs/rigs/controlling-a-rig-instance#tween-function) section of Blueprint Animations for more information.

---

## How long has Animated Java been in development?

Since September 1st, 2020.
