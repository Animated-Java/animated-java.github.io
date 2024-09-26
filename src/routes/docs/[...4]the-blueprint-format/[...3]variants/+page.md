---
title: Variants
description: Variants are variations of a model that can be applied to a Rig Instance to change it's appearance, and NBT.
---

# {$frontmatter.title}

{$frontmatter.description}

## The Variants Panel

The Variants Panel is where you can manage the different variants of your model. You can add, remove, and edit variants here.
![variants-panel](/img/steps/variants/1.png)

## The Default Variant

The Default Variant is the base model that all other variants are based on. It cannot be modified, removed, or renamed.

## Creating a new Variant

To create a variant, click the `Add Variant` button in the Variants Panel.

## The Variant Config

The Variant Config is where you can change the name and properties of the variant.

![add-variant-action](/img/steps/variants/2.png)

## Config Options

- ### Display Name

  The name of the variant.

- ### Name

  The ID of the variant. This is used in commands and scripts to reference the variant.

- ### Generate Name from Display Name

  If enabled, the Name will be automatically generated from the Display Name.

- ### Texture Map

  A map of which textures will be replaced on the model when the variant is applied.

- ### Included / Excluded Nodes
  Using the exclude / include nodes feature, you can specify which nodes will be included or excluded from the variant. Excluded nodes will not be modified when the variant is applied, even if their texture is in the texture map.

## Applying a Variant

To apply a Variant to a Rig Instance, run the `variant/apply` function as the root entity of the Rig Instance.

:::admonition type=info title=Example

```rust title="Changing the variant of a Rig Instance"
execute as @e[tag=aj.<export_namespace>.root] run function animated_java:<export_namespace>/variant/apply
```

:::
