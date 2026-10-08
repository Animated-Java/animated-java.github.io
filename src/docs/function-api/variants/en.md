---
title: Variants
description: How to apply Variants to a Rig instance.
---

# Variants

Every [Variant](/docs/core-concepts/variants) gets an `apply` function:

```
<blueprint_id>/variants/<variant>/apply
```

It must be run **as the root entity** of the rig. `<variant>` is the Variant's **Name** from its [Variant Config](/docs/configs/variant).

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/variants/angry/apply
```

It returns success `1`, so it also works with `execute if function`:

```mcfunction
execute as @e[tag=my_pack.my_rig.root] if function my_pack:my_rig/variants/angry/apply run say Grr!
```

:::note
Variant functions are only generated when the Blueprint has at least one Variant besides the Default.
:::

To get back to the rig's base look, apply the Default Variant (`variants/default/apply`, unless you've renamed it).

## Other Ways to Apply Variants

-   **When summoning:** pass the [`variant`](/docs/function-api/summon#variant) argument.

    ```mcfunction
    function my_pack:my_rig/summon {args: {variant: "angry"}}
    ```

-   **During an animation:** add a Variant keyframe to the animation's Effects. One keyframe can apply several Variants in order. See [Effect Keyframes](/docs/core-concepts/animations#effect-keyframes).

## Related Reading

-   [Variants](/docs/core-concepts/variants)
-   [Function API: Texture Slots](/docs/function-api/texture-slots)
-   [Summon](/docs/function-api/summon)
