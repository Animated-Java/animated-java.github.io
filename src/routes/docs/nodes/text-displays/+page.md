---
title: Text Displays
description: A node that renders a text model.
---

# Text Displays

Text Displays render Minecraft JSON text components in the world. They can be animated just like [Groups](/docs/nodes/groups).

<img src="/images/docs/nodes/text-displays/example1.png" alt="Text Display example"/>

## Element Options

-   #### Displayed Text

    The text to display. Supports Minecraft's [JSON Text Component](https://minecraft.wiki/w/Raw_JSON_text_format) format, including color, formatting, translations, and more.

    For example, the following text component displays the word "Hello" in bold red text:

    ```json5
    { text: 'Hello', color: 'red', bold: true }
    ```

    <img src="/images/docs/nodes/text-displays/example2.png" alt="Text Display example"/>

    :::note
    Custom fonts are not previewed in the Blockbench viewport. The text will display using the default Minecraft font in the editor, but will use the correct custom font in-game.
    :::

-   #### Line Width

    The maximum pixel width of each text line before wrapping. Corresponds to Minecraft's `line_width` NBT field. Default: `200`.

-   #### Background Color

    The color of the background panel behind the text, including alpha (transparency). Corresponds to Minecraft's `background` NBT field. Default: `#00000040` (semi-transparent black).

-   #### Text Alignment

    Horizontal alignment of the text within its bounding box.

    -   `left` — Left-aligned.
    -   `center` — Centered (default).
    -   `right` — Right-aligned.

-   #### Shadow

    When enabled, text renders with a drop shadow (like text in chat).

-   #### See Through

    When enabled, the text renders through blocks and entities.

## Entity Creation

A Text Display always creates a `minecraft:text_display` entity when exported.

## Display Entity Config

Right-click on a Text Display node in the outliner and select **Display Entity Config** to open its configuration.

See [Configs / Display Entity](/docs/configs/display-entity).
