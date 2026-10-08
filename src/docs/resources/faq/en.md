---
title: FAQ
description: Frequently asked questions about Animated Java.
---

# FAQ

-   #### How do I install Animated Java?

    See [Installing Animated Java](/docs/getting-started/installing).

-   #### Which versions of Minecraft does Animated Java support?

    Minecraft: Java Edition 1.20.4 and newer, up to 26.3. Set the version you're targeting in your Blueprint's [Target Minecraft Version](/docs/core-concepts/blueprints#target-minecraft-version).

    For older versions of Minecraft, see [Legacy Releases](/docs/resources/legacy-releases).

-   #### I'm updating from an older version of Animated Java. What changed?

    See [Upgrading to 1.11](/docs/resources/upgrading-to-1-11).

-   #### How can I support Animated Java?

    You can support development on [Ko-fi](/support-us)! ❤️

    You can also give the project a [star on GitHub](/source) ⭐ and share it with your friends.

-   #### Why can't I rotate my Cubes the way I want?

    Minecraft item models limit how Cubes can rotate on older versions. See [Rotation Limitations](/docs/nodes/cubes#rotation-limitations).

-   #### How can I make my rigs run faster?

    -   Use as few bones as you can. Every bone is an entity that has to be updated each frame. Groups without Cubes don't create entities, so they're free. The **E:** counter in the Outliner's toolbar shows how many entities your rig uses.
    -   Use [Excluded Nodes](/docs/configs/animation#excluded-nodes) so animations only update the nodes they move.
    -   Turn off [Auto Update Rig Orientation](/docs/core-concepts/blueprints#auto-update-rig-orientation) on rigs that don't move every tick.
    -   Keep the [Animation System](/docs/core-concepts/blueprints#animation-system) on **Functions**.
    -   Don't play animations on rigs nobody can see.

    Still stuck? Ask in the [Animated Java Discord](/discord).

-   #### Can I use vanilla items and blocks in my models?

    **Yes!** Use [Item Displays](/docs/nodes/item-displays) and [Block Displays](/docs/nodes/block-displays).

    If your rig has no Cubes at all, you can set the [Resource Pack Export Format](/docs/core-concepts/blueprints#resource-pack-export-format) to **None** and skip the Resource Pack entirely.

-   #### Can I put several rigs in one Data Pack and Resource Pack?

    **Yes!** As long as every Blueprint has its own [Blueprint ID](/docs/core-concepts/blueprints#blueprint-id), Animated Java merges them into your packs automatically.

-   #### Can I play several animations at the same time?

    **Yes!** As long as they move different nodes. See [Playing Several Animations at Once](/docs/core-concepts/animations#playing-several-animations-at-once).

-   #### Can I smoothly transition between animations?

    **Yes!** See [Tweening](/docs/function-api/animations#tweening).

-   #### Can I change my rig's textures in-game?

    **Yes!** Use [Texture Slots](/docs/core-concepts/texture-slots) to swap textures on parts of the rig, and [Variants](/docs/core-concepts/variants) to switch between whole looks.

-   #### How can I make a bone look at a player or an entity?

    Put it in its own rig and mount it on a Locator. See [Stacking Rigs](/docs/guides/stacking-rigs#making-the-head-look-around).

-   #### Can I preview custom fonts, models, and textures from my Resource Pack?

    **Yes!** Add your Resource Pack to the Blueprint's [Preview Resource Packs](/docs/core-concepts/blueprints#preview).

-   #### How long has Animated Java been in development?

    Since September 1st, 2020.
