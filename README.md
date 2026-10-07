# lucasltavares.github.io

Lucas Lima Tavares's personal blog, built with Astro and the Zaduma theme.

## Local development

This project requires Node.js 22 or newer.

```sh
npm install
npm run dev
```

Run the same production checks used before deployment:

```sh
npm run check
npm run build
```

Posts live in `posts/`. Their directory and filename determine their URL. For
example, `posts/writing/my-post.mdx` is published at `/writing/my-post`.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys every push to
the `gh-pages` branch. In the repository's GitHub settings, open **Pages** and
set **Source** to **GitHub Actions**. Then push the branch:

```sh
git add .
git commit -m "Migrate blog to Zaduma theme"
git push origin gh-pages
```

The site is configured for <https://lucasltavares.github.io/>.
