# mapstore.io

Repository for the MapStore landing page.

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

## Deployment

GitHub Actions builds the Eleventy site and deploys `_site/` to GitHub Pages on pushes to `main`. The repository Pages source must be configured to use GitHub Actions.
