# mapstore.github
Repository for the MapStore landing page

## Development

Install dependencies:

```sh
pnpm install
```

Start the local Eleventy development server:

```sh
pnpm start
```

Build the static site:

```sh
pnpm run build
```

The generated site is written to `_site/`.

## Project Structure

- `src/` contains the Eleventy page templates.
- `src/_includes/` contains shared `head`, `nav`, and `footer` partials.
- `assets/`, `css/`, `js/`, and `CNAME` are copied unchanged into the generated site.
