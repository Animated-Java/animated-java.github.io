---
title: Root Entity
description: The root entity is used as the main focal point for the rig, and is used to position the rig in the world, and to run functions that affect the entire rig, such as animation control, or variant application functions.
---

# {$frontmatter.title}

{$frontmatter.description}

## Selecting the Root Entity

```css title=Selecting all root entities | copy
@e[ type=item_display, tag=aj.rig_root ]
```

```css title=Selecting root entities from a specific blueprint | copy
@e[ type=item_display, tag=aj.<export_namespace>.root ]
```
