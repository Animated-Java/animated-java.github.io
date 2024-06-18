---
title: Creating a New Blueprint
description: Learn how to create a new blueprint in Animated Java.
---

# {$frontmatter.title}

{$frontmatter.description}

## Starting a new Project
From the start menu, navigate to `Animated Java Blueprint` > `Create new AJ Blueprint`
![blueprint-step1](/img/steps/blueprint/1.png)

## Configuring the Blueprint

<div style="display: flex;">
	<p style="margin-top: 3rem;">After clicking <code>Create new AJ Blueprint</code>, the blueprint settings dialog will appear. <br>Let's walk through configuring the most important options.</p>
	<img src="/img/steps/blueprint/2.png" width="50%">
</div>

### Blueprint Name

The blueprint name is used both as the project's file name, and as a way to quickly identify the blueprint in Blockbench.

### Texture Size

The size of the largest texture in the blueprint. This is used by Blockbench to calculate the UV coordinates for the model.

Make sure you update this value to match the largest texture in your blueprint whenever you add or remove textures.


### Export Namespace

The namespace of all exported files. This is used to generate the data pack and resource pack structure.

When exporting, the files for the resource pack and data pack will be placed in `assets/animated_java/<export_namespace>` and `data/animated_java/<export_namespace>` respectively.

### Display Item

The item to modify to display the exported rig. Animated Java uses [item model predicates](https://minecraft.wiki/w/Tutorials/Models#Item_predicates) to switch the item's model based on which part of the rig is being displayed. This will not overwrite the item's default model/texture.

### Resource Pack

The resource pack to merge the exported files into. The exported files will be placed in the `assets/animated_java/<export_namespace>` folder of the selected resource pack.

If multiple blueprints export into the same resource pack, they will be automatically merged together.

### Data Pack

The data pack to merge the exported files into. The exported files will be placed in the `data/animated_java/<export_namespace>` folder of the selected data pack.

If multiple blueprints export into the same data pack, they will be automatically merged together.

:::admonition type="tip"
You can hover over the `?` icon next to each setting to see a detailed description.
:::

## Confirming your Blueprint Settings

Now that you have configured the blueprint settings, click `Confirm` to start editing your new blueprint.

:::admonition type="tip"
You can always change the blueprint settings later by navigating to `Animated Java` > `Blueprint Settings` tab in the menu bar.
:::

Create a model and some animations, then continue to the next step to learn how to export your project.
