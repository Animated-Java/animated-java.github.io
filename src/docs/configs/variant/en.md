---
title: Variant Config
description: Configure a Variant's name, Texture Slots, excluded nodes, and On-Apply function.
---

# Variant Config

The Variant Config dialog sets up one [Variant](/docs/core-concepts/variants). Open it by clicking the edit (pencil) icon next to a Variant in the **Variants** panel.

## Fields

### Display Name

The Variant's name in the editor and in error messages. Can contain any characters.

### Name

The Variant's exported name, used in its function path:

```mcfunction
<blueprint_id>/variants/<name>/apply
```

Only lowercase letters, digits, and underscores are allowed, and every Variant needs a unique Name.

### Generate Name From Display Name

When enabled (the default), the Name is generated from the Display Name automatically. Turn it off to type your own.

:::warning
Changing the Name changes the Variant's function path. Update any commands that call it.
:::

### Texture Slots

The texture each [Texture Slot](/docs/core-concepts/texture-slots) switches to when this Variant is applied. Slots that aren't listed are left as they are.

Not available on the Default Variant, which always resets every slot to its default texture.

### Excluded Nodes

Nodes this Variant never changes, even if they have faces in one of its Texture Slots or their own [per-Variant settings](/docs/configs/display-entity#per-variant). Drag nodes between the **Included Nodes** and **Excluded Nodes** columns.

Not available on the Default Variant.

### On-Apply Function

Commands that run `as` and `at` the root entity whenever the Variant is applied. Supports [MC-Build](https://mcbuild.dev) syntax.

## Related Reading

-   [Variants](/docs/core-concepts/variants)
-   [Function API: Variants](/docs/function-api/variants)
-   [Display Entity Config](/docs/configs/display-entity)
