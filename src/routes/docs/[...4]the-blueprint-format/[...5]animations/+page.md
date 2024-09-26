---
title: Animations
description: Animations are sequences of keyframes that can be played on a Rig Instance to animate it's elements.
---

# {$frontmatter.title}

{$frontmatter.description}

## Animation Properties

![animation-properties](/img/steps/animation/1.png)

- #### Animation Name

  The name of the animation.

- #### Loop Mode

  The loop mode of the animation. Options are:

  - `Once`: The animation will play once and stop.
  - `Loop`: The animation will loop indefinitely.
  - `Hold`: The animation will play once and hold the last frame.

- #### Loop Delay

  The number of ticks to wait after the animation has finished before looping.

  Only used when `Loop Mode` is set to `Loop`.

- #### Included / Excluded Bones

  The bones that the animation will affect. If a bone is not included, it will not be affected by the animation.

  You can drag and drop bones to / from each list to include / exclude them.

  The swap button will swap the included and excluded lists.
