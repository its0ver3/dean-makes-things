# Dean's personal website

A plain static website. No build step, no dependencies, no framework.

## Structure

- `index.html` — home page with the latest post and writing list
- `about/`, `projects/`, `books/` — static pages
- `writing/<slug>/` — one folder per post, each with an `index.html`
- `style.css` — all styles, shared by every page

## Editing

Everything is hand-editable HTML. To add a post:

1. Create `writing/<slug>/index.html` (copy an existing post as a template)
2. Add a link to it on the home page

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deploy

Upload the folder to any static host (Cloudflare Pages, GitHub Pages,
Netlify) — the repo root is the site root, no configuration needed.
