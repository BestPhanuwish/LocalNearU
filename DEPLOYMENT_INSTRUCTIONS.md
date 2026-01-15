# LocalNearU Landing Page Deployment (GitHub + GoDaddy Domain)

This guide deploys the **static landing page** to GitHub Pages for free and connects `www.localnearu.com`. It also supports team collaboration through GitHub.

## What you need

- A GitHub account (and a repo for this project).
- GoDaddy DNS access (web UI or API) to point the domain.

## 1) Create a GitHub repo and push the code

From the project root:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<YOUR_ORG_OR_USER>/localnearu-landing-page.git
git push -u origin main
```

If the repo already exists, just add the remote and push.

## 2) Add a GitHub Pages build workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "pnpm"
      - name: Install pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 10
      - name: Install deps
        run: pnpm install
      - name: Build
        run: pnpm build
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist/public
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

Commit and push:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deploy workflow"
git push
```

## 3) Enable GitHub Pages

In GitHub repo → **Settings** → **Pages**:

- Source: **GitHub Actions**
- After the first deploy, GitHub will show a Pages URL.

## 4) Add your custom domain

In the same **Pages** settings:

- Custom domain: `www.localnearu.com`
- Save; GitHub creates a `CNAME` file automatically.

## 5) Point GoDaddy DNS to GitHub Pages

In GoDaddy DNS for `localnearu.com`, set:

**For the root (`@`)**:
- A → `185.199.108.153`
- A → `185.199.109.153`
- A → `185.199.110.153`
- A → `185.199.111.153`

**For `www`**:
- CNAME → `<YOUR_ORG_OR_USER>.github.io`

DNS can take 15–60 minutes (sometimes up to 48 hours).

## 6) Verify

Open `https://www.localnearu.com` and confirm images and layout load correctly.

If HTTPS doesn’t show immediately, wait a bit and re-check in GitHub Pages settings.

## Future backend (easy upgrade later)

When you're ready for logins and a database:

1. Keep the landing page hosted as-is.
2. Deploy an API to a VPS or managed host.
3. Update the frontend to call the API via environment variables.

## Troubleshooting

- If the site loads old assets, clear browser cache and re-run the deploy.
- If DNS changes don't show, wait 1–48 hours for propagation.
