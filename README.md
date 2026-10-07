# Dean's personal website

A plain static website. No build step, no dependencies, no framework.

## Structure

- `index.html`: home page with the latest post
- `about/`: about and contact page
- `writing/<slug>/`: one folder per post, each with an `index.html`
- `style.css`: all styles, shared by every page

## Editing

Everything is hand-editable HTML. To add a post:

1. Create `writing/<slug>/index.html` (copy an existing post as a template)
2. Add a dated link to it under Posts on the home page, newest first. Every published article must always appear in Posts, including the featured article.
3. Make the latest article the featured post on the home page. Keep both the new and previous featured articles in Posts without duplicate list entries.
4. When revising, remove all em dashes and semicolons. Reference previous posts to keep Dean's voice consistent.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deploy

The site is published with GitHub Pages at
https://its0ver3.github.io/dean-makes-things/.

The publishing source is the `main` branch and the `/(root)` folder. Pushing a
commit to `main` triggers a new deployment.
