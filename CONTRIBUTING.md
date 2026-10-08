# Contributing

Thanks for helping out with the Animated Java website!

## Running the site locally

You'll need [Bun](https://bun.sh).

```bash
bun install
bun dev
```

The site runs at http://localhost:5173.

## Translating the docs

Each doc page is a folder in `src/docs`, with one Markdown file per language:

```
src/docs/nodes/cubes/
├── en.md      ← English (the source)
└── de.md      ← German translation
```

Pages without a file for a language fall back to English, with a notice saying they aren't translated yet.

### Translating a page

1. Copy the page's `en.md` to `<lang>.md` in the same folder, e.g. `src/docs/nodes/cubes/de.md`.
2. Translate the `title` and `description` in the frontmatter, then the page content.
3. Leave these as they are:
    - Code blocks, commands, and function names.
    - Link paths, e.g. `[Groups](/docs/nodes/groups)`. They automatically point to the same language, so only translate the link text.
    - Admonition and tree syntax (`:::tip`, `:::tree`, `:::`). You can translate custom admonition titles, like `:::warning[Before you get started]`.
4. Links to a section (`/docs/nodes/groups#entity-creation`) use the heading's text. If the target page is translated, update the `#anchor` to match its translated heading.
5. Check it at `http://localhost:5173/<lang>/docs/<page>`, then open a pull request.

You don't need to translate every page at once. A pull request with a single page is welcome.

Currently supported languages: `en`, `de`, `nl`, `ru`, `uk`, `zh-cn`.

### Adding a new language

Want to translate into a language that isn't listed? Open an issue first so we can make sure someone can keep it up to date. Then:

1. Add the language code to `SUPPORTED_LANGUAGES` in `src/lib/docs/docs.ts`. Use a [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) code in lowercase, like `fr` or `pt-br`.
2. Translate at least `src/docs/welcome`, so the language has a starting page.
3. Open a pull request with both changes.

The language picker and the `/<lang>/docs` routes pick up the new language automatically.
