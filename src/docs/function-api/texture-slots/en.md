---
title: Texture Slots
description: How to switch Texture Slots on a Rig instance.
---

# Texture Slots

Every [Texture Slot](/docs/core-concepts/texture-slots) gets one function per texture in it:

```
<blueprint_id>/texture_slots/<slot>/<texture>
```

Running one switches every face in that slot, on every bone of the rig, to that texture. Other slots aren't affected.

These functions must be run **as the root entity** of the rig, and require **Minecraft 1.21.4 or newer**.

```mcfunction
# Close the eyes of every my_rig instance
execute as @e[tag=my_pack.my_rig.root] run function my_pack:my_rig/texture_slots/eyes/closed
```

`<slot>` and `<texture>` are the exported names of the slot and texture. See [Names](/docs/core-concepts/texture-slots#names) for how they're made.

They return success `1`, so you can use them in `execute if function`:

```mcfunction
execute as @e[tag=my_pack.my_rig.root] if function my_pack:my_rig/texture_slots/eyes/closed run say Blink!
```

## Other Ways to Switch Slots

-   Apply a [Variant](/docs/function-api/variants) that sets the slot.
-   Add a Texture Slot keyframe to an [animation](/docs/core-concepts/animations#effect-keyframes).

## Related Reading

-   [Texture Slots](/docs/core-concepts/texture-slots)
-   [Function API: Variants](/docs/function-api/variants)
