---
title: Your First Blueprint
description: Learn how to create your first Blueprint and export it to Minecraft.
---

# Your First Blueprint

In this guide we'll build a spinning cube, export it, and summon it in a Minecraft world. It covers the whole Animated Java workflow from start to finish.

## Prerequisites

-   Animated Java is installed. See [Installing Animated Java](/docs/getting-started/installing) if it isn't.
-   A Minecraft world with an empty Data Pack in its `datapacks` folder, and an empty Resource Pack in your `resourcepacks` folder. Each one needs at least a `pack.mcmeta` file.

---

## Part 1: Create the Blueprint

1. **Create a new Blueprint**

    Go to **File <i class="minecraft-right-arrow"></i> New <i class="minecraft-right-arrow"></i> Animated Java Blueprint**, or pick **Animated Java Blueprint** on the start screen.

2. **Add a Group**

    In the Outliner, click **Add Group** and rename the new group to `cube_bone`. Groups are the bones of your rig: they're what moves when you animate.

3. **Add a Cube**

    Click **Add Cube**, then drag the cube onto `cube_bone` in the Outliner. Position and size it however you like.

4. **Texture it**

    In the **Textures** panel, create or import a texture and apply it to every face of the cube.

---

## Part 2: Configure the Blueprint

Animated Java needs to know where to write your packs.

1. **Open Blueprint Settings**

    Click **Animated Java <i class="minecraft-right-arrow"></i> Blueprint Settings** in the menu bar.

2. **Set the Blueprint ID**

    On the **General** page, set **Blueprint ID** to something unique, like `my_pack:spinning_cube`. Every function Animated Java generates lives under this ID.

3. **Set the Target Minecraft Version**

    Set **Target Minecraft Version** to the version you play on, like `26.2`.

4. **Pick the Resource Pack folder**

    On the **Resource Pack** page, leave the format on **Folder** and select your Resource Pack's folder (the one containing `pack.mcmeta`).

5. **Pick the Data Pack folder**

    On the **Data Pack** page, leave the format on **Folder** and select your Data Pack's folder inside the world's `datapacks` folder.

6. **Close the dialog**

    Settings save automatically when you switch pages or close the dialog.

---

## Part 3: Animate It

1. **Switch to the Animate tab**

    Click **Animate** in the top-right corner of Blockbench.

2. **Create an animation**

    In the **Animations** panel, click **+** to create an animation and name it `spin`. Right-click it, choose **Properties**, and set **Loop Mode** to **Loop**.

3. **Add rotation keyframes**

    Select `cube_bone`. At `0` seconds, add a rotation keyframe with a Y rotation of `0`. Move to the end of the animation and add another rotation keyframe with a Y rotation of `360`.

---

## Part 4: Export and Test

1. **Export**

    Click **Animated Java <i class="minecraft-right-arrow"></i> Export (Debug)**, or press `Ctrl + E`. Animated Java writes the model and textures to your Resource Pack, and the functions to your Data Pack.

2. **Load the packs**

    In Minecraft, enable your Resource Pack (or press `F3 + T` if it's already on), then run `/reload`.

3. **Summon the rig**

    Run this to summon the cube at your feet, facing south:

    ```mcfunction
    execute positioned ~ ~ ~ rotated 0 0 run function my_pack:spinning_cube/summon {args: {}}
    ```

    :::note
    Replace `my_pack:spinning_cube` with your own Blueprint ID.
    :::

4. **Play the animation**

    ```mcfunction
    execute as @e[tag=my_pack.spinning_cube.root] run function my_pack:spinning_cube/animations/spin/play
    ```

5. **Remove the rig**

    ```mcfunction
    execute as @e[tag=my_pack.spinning_cube.root] run function my_pack:spinning_cube/remove/this
    ```

---

## Next Steps

-   [Blueprints](/docs/core-concepts/blueprints) covers every Blueprint setting.
-   [Variants](/docs/core-concepts/variants) and [Texture Slots](/docs/core-concepts/texture-slots) let one rig switch between looks.
-   The [Function API](/docs/function-api/summon) lists every function you can call from your own Data Pack.
