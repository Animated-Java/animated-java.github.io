---
title: FAQ
description: Frequently asked questions about Animated Java.
---

# {$frontmatter.title}

{$frontmatter.description}

## How do I install Animated Java?

Follow the instructions in the [Installation](/docs/getting-started/installing-animated-java) section of the documentation.

---

## What versions of Minecraft does Animated Java support?

Animated Java v1.0.0 supports Minecraft versions 1.21 and above.

For older versions of Minecraft, see the [Legacy Releases](/docs/legacy-releases/index) section of the documentation.

## How can I support the development of Animated Java?

You can support my projects on Ko-Fi at [https://ko-fi.com/snavesutit](https://ko-fi.com/snavesutit)!

Additionally, you can help by reporting bugs, suggesting features, and contributing to the project on [GitHub](/source)

---

## What model limitations does Animated Java have and how do they compare to Vanilla Minecraft?

Animated Java has fewer limitations than Vanilla Minecraft, but there are still a few limitations to keep in mind when creating your models:

- Elements, like in Vanilla Minecraft, are limited to rotations of 22.5 degree increments and only along one axis at a time. However, bones can be rotated freely.
- Animated Java removes the 3x3x3 size limitations of Vanilla Minecraft completely, allowing for models of any size.

---

## Are there any performance concerns with Animated Java? / What can I do to improve performance?

There are a few things you can do to make sure your models run as smoothly as possible:

- Use a few bones as possible. The more bones you have, the more NBT modifications need to be done each frame. Note that bones with no Cubes in them are not exported, and therefor do not contribute to performance issues.
- Avoid playing animations when your Rig is not visible to the player.

Animated Java is designed to be as efficient as possible, but there are still some limitations to what can be done with commands. If you are experiencing performance issues, consider joining the [Animated Java Discord](/discord) for help and advice.

---

## Can I use vanilla item / block models?

**Yes!** Animated Java supports vanilla item and block models. You can use the `Add Vanilla Item Display` and `Add Vanilla Block Display` buttons in edit mode to add them to your model.

If you disable `Export Resources` in your Blueprint's settings, you can make and animate Animated Java Rigs without using a Resource Pack!

---

## Can I have multiple exported rigs in a single Data Pack / Resource Pack?

**Yes!** As long as each Rig's Blueprint has a unique `Export Namespace`. Just select the same export Data Pack / Resource Pack for the Blueprints you wish to merge, and Animated Java will automatically handle the rest.

---

## Can I play multiple animations at the same time?

**Yes!\***

\*Only one animation may affect any given bone at a time. However, you can play multiple animations simultaneously by having them affect different bones.

See the [Included / Excluded Bones](/docs/the-blueprint-format/animations#included-excluded-bones) section of Blueprint Animations for more information.

---

## Can I preview custom fonts in Text Displays?

**No.\*** Animated Java does not support _rendering_ custom fonts at this time. :pensive:

\*You can still use custom fonts in your Text Displays. They will be displayed as the default Minecraft font in the editor, but will render correctly in-game.

---

## Can I smoothly transition between different animations?

**Yes!** See the [Tweening](/docs/exported-rigs/controlling-a-rig-instance#tween-function) section of Blueprint Animations for more information.
