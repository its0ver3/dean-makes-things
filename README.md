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
2. Add a link to it on the home page
3. Make the latest article the featured post on the home page and move the previous featured article into the post list
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
