---
title: Your First Blueprint
description: Learn how to create your first Blueprint and export it to Minecraft.
---

# Your First Blueprint

In this guide we'll create a simple Blueprint of a spinning cube, export it to a Minecraft world, and summon it in-game. This will introduce you to the full workflow of Animated Java.

## Prerequisites

-   Animated Java is installed. See [Installing Animated Java](/docs/getting-started/installing) if needed.
-   You have a Minecraft world with a Data Pack folder and a Resource Pack folder you can write to.

---

## Part 1: Creating the Blueprint

1. **Create a New Blueprint**

    Navigate to **File <i class="minecraft-right-arrow"></i> New <i class="minecraft-right-arrow"></i> Animated Java Blueprint** or select **Animated Java Blueprint** from the startup screen. A new empty Blueprint will open.

2. **Create a Group**

    In the Outliner, click the **Add Group** button to create a new bone. Rename it to `cube_bone`. Bones are the animated containers for your cube geometry.

3. **Add a Cube**

    Click the **Add Cube** button to create a new cube. In the Outliner, drag the cube onto `cube_bone` to parent it. Adjust the cube's position and size as desired.

4. **Apply a Texture**

    Open the **Textures** panel and create or import a texture. Assign it to all faces of your cube.

---

## Part 2: Configure Blueprint Settings

Before exporting, you need to tell Animated Java where to write your files.

1. **Open Blueprint Settings**

    Click **Animated Java <i class="minecraft-right-arrow"></i> Blueprint Settings** in the menu bar.

2. **Set the Blueprint ID**

    Under **General**, set the Blueprint ID to something unique, for example: `my_pack:spinning_cube`. This becomes your function namespace.

3. **Set the Target Version**

    Set **Target Minecraft Version** to match your Minecraft installation.

4. **Set the Resource Pack Path**

    Under **Resource Pack**, click the folder icon and navigate to your Minecraft resource pack directory (the one containing `pack.mcmeta`).

5. **Set the Data Pack Path**

    Under **Data Pack**, click the folder icon and navigate to your Minecraft world's data pack directory.

6. **Save**

    Click **Confirm** to close the settings dialog.

---

## Part 3: Create an Animation

1. **Switch to the Animate Tab**

    Click the **Animate** tab at the top of Blockbench.

2. **Create a New Animation**

    In the **Animations** panel, click **+** to create a new animation. Name it `spin`. Right-click it and open **Animation Properties** to set the Loop Mode to **loop**.

3. **Add Rotation Keyframes**

    Select `cube_bone` in the Outliner. At time `0`, add a rotation keyframe with Y rotation = 0. Move the timeline to the last frame and add another keyframe with Y rotation = 360.

---

## Part 4: Export and Test in Minecraft

1. **Export the Blueprint**

    Click **Animated Java <i class="minecraft-right-arrow"></i> Export (Debug)** in the menu bar. This will export your Blueprint's model and animation functions to the specified data pack and resource pack folders.

2. **Load the Packs in Minecraft**

    Open your Minecraft world. Enable your resource pack in the Resource Pack menu, then run `/reload` to reload the data pack.

3. **Summon Your Rig**

    Run the following command to summon your spinning cube rig at your feet:

```mcfunction
execute positioned ~ ~ ~ rotated ~ 0 run function my_pack:spinning_cube/summon {args: {}}
```

:::note
Make sure to replace `my_pack:spinning_cube` with your actual Blueprint ID.
:::

:::tip
The rig will be oriented based on the execute context. Using `execute positioned` and `execute rotated` allows you to control the position and rotation of the rig when it is summoned.
:::

To start the spin animation, run:

```mcfunction
execute as @e[tag=my_pack.spinning_cube.root] run function my_pack:spinning_cube/animations/spin/play
```

To remove the rig:

```mcfunction
execute as @e[tag=my_pack.spinning_cube.root] run function my_pack:spinning_cube/remove/this
```

---

## Next Steps

-   Learn about [Blueprint Settings](/docs/core-concepts/blueprints) for all available configuration options.
-   Explore [Variants](/docs/function-api/variants) to give your model multiple appearances.
-   Read the full [Function API](/docs/function-api/summon) reference to control rigs from your own data pack.
