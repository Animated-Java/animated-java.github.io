---
title: FAQ
description: Frequently asked questions about Animated Java.
---

# FAQ

-   #### How do I install Animated Java?

    See [Installing Animated Java](/docs/getting-started/installing).

-   #### What versions of Minecraft does Animated Java support?

    Minecraft 1.20.4 and above.

    For much older versions of Minecraft, see [Legacy Releases](/docs/resources/legacy-releases)

-   #### How can I support the development of Animated Java?

    You can support my projects on Ko-Fi at [ko-fi.com/snavesutit](/support-us)! ❤️

    Alternatively, you can give the project a [star on GitHub](/source) ⭐ and share the project with your friends!

-   #### What about Vanilla item model rotation and scaling limitations?

    See [Cubes - Rotation Limitations](/docs/nodes/cubes#rotation-limitations).

-   #### How can I optimize my models for better performance?

    There are a few things you can do to make sure your models run as smoothly as possible:

    -   Use as few bones as possible. The more bones you have, the more NBT modifications need to be done each frame. Note that bones with no Cubes in them are not exported, and therefore do not contribute to performance issues.
    -   Use Excluded Nodes to exclude bones from animations when possible so their transforms aren't updated.
    -   Avoid playing animations when your Rig is not visible to the player.

    Animated Java is designed to be as efficient as possible, but there are still some limitations to what can be done with commands. If you are experiencing performance issues, consider joining the [Animated Java Discord](/discord) for help and advice.

-   #### Can I use vanilla item / block models?

    **Yes!** You can use [Block Display Nodes](/docs/nodes/block-displays) and [Item Display Nodes](/docs/nodes/item-displays) to display vanilla blocks and items in your models.

    In order to fully disable Resource Pack exporting, you can set [Resource Pack Export Mode](/docs/core-concepts/blueprints#resource-pack-export-mode) to `None` in your Blueprint's settings.

-   #### Can I have multiple exported rigs in a single Data Pack / Resource Pack?

    **Yes!** As long as each Rig's Blueprint has a unique [Blueprint ID](/docs/core-concepts/blueprints#blueprint-id), Animated Java will automatically handle merging with pre-existing rigs in the targeted Data Pack / Resource Pack.

-   #### Can I play multiple animations at the same time?

    **Yes!\***

    \*Only one animation may affect any given bone at a time. However, you can play multiple animations simultaneously by having them affect different bones.

    See the [Excluded Nodes](/docs/function-api/animations#excluded-nodes) section of the Animations documentation for more information.

-   #### How can I make a model's head / bone look at a player / entity / location?

    Check out the [Stacking Rigs](/docs/guides/stacking-rigs) tutorial.

-   #### Can I preview custom fonts in Text Displays?

    **No.** Animated Java does not yet support previewing custom fonts. :pensive:

    You can still use custom fonts, they will just display as the default Vanilla font in the preview.

-   #### Can I smoothly transition between different animations?

    **Yes!** See the [Tweening](/docs/function-api/animations#tween) section of the Animations documentation for more information.

-   #### How long has Animated Java been in development?

    Since September 1st, 2020.
