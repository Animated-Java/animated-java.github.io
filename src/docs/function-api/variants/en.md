---
title: Variants
description: How to apply Variants to a Rig instance.
---

All variant functions live at `<blueprint_id>/variants/<variant_name>/...`.

Functions must be executed **as the root entity** of the rig instance.

### apply

Applies the named variant to the rig.

```mcfunction
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/variants/angry/apply
```

Returns success `1`, so it can be used with `execute if function`:

```mcfunction
execute if function my_pack:my_rig/variants/angry/apply run say Angry variant applied!
```

## Applying a Variant on Summon

Pass the `variant` argument to the [summon function](/docs/function-api/summon):

```mcfunction
function my_pack:my_rig/summon {args: {variant: "angry"}}
```

## Applying a Variant during an Animation

Add a **Variant Keyframe** to the Effects channel in Blockbench's animation timeline, then select which variant to apply at that frame.

## Related Reading

-   [Variants Overview](/docs/core-concepts/variants)
-   [Summon](/docs/function-api/summon)
-   [Animations](/docs/function-api/animations)
