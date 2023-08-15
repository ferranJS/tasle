# [Tesla Landing Clone with Tailwind and Astro](https://ferranjs.github.io/tasle/) ⬅

- Automatic and instant browser language detection.
- Only **1.5 - 1.8MB bundle size** including the video
- **Responsive** design
- **SEO** friendly
- Optimized images using **Avif** and **WebP** formats
- Pre-commit Hooks with Husky & Lint-staged for a Prettier write

Perfect [Google PageSpeed Insights Score (with language redirect)](https://pagespeed.web.dev/analysis/https-ferranjs-github-io-tasle/40aculfyoo?form_factor=mobile)
Perfect [Google PageSpeed Insights Score (with set language)](https://pagespeed.web.dev/analysis/https-ferranjs-github-io-tasle-en-usa/nmazm3ch5i?form_factor=mobile)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/ferranJS/tasle)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/ferranJS/tasle)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/ferranJS/tasle?devcontainer_path=.devcontainer/basics/devcontainer.json)

<p float="left">
  <a href="https://ferranjs.github.io/tasle">
    <img src="https://github.com/ferranJS/tasle/blob/main/public/landing-screenshot-2.gif" width="174px" alt="desktop view landing page screenshot">
  </a>
  <a href="https://ferranjs.github.io/tasle">
    <img src="https://github.com/ferranJS/tasle/blob/main/public/landing-screenshot.gif" width="647px" alt="mobile view landing page screenshot">
  </a>
</p>

Made in a few days with [Tailwind](https://tailwindcss.com/) as an improvement for faster CSS coding and [Astro](https://astro.build/) for good performance (packs with [Vite](https://vitejs.dev/)) and comfortable web development.

## Setup roadmap

> npm create astro@latest -- --template basics

> npx astro add tailwind

> npm i -D prettier prettier-plugin-astro

> npm i -D prettier-plugin-tailwindcss // for prettier automatic tailwind class sorting

- Set up Github Actions in settings and add _.github/workflows/_[_deploy.yml_ configuration](https://github.com/ferranJS/tasle/blob/main/.github/workflows/deploy.yml) to the root of the project.

- Configure _astro.config.mjs_ following the [official docs](https://docs.astro.build/en/guides/deploy/github/) and adding the base to all src in the project.


| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
