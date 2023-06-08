# Tesla Landing Clone with Tailwind and Astro

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/ferranJS/astro-landing-page)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/ferranJS/astro-landing-page)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/ferranJS/astro-landing-page?devcontainer_path=.devcontainer/basics/devcontainer.json)

<img src="https://github.com/ferranJS/astro-landing-page/blob/main/public/landing-screenshot.png" height="456px" alt="landing page screenshot">

## Setup roadmap

>npm create astro@latest -- --template basics

>npx astro add tailwind 

>npm i -D prettier prettier-plugin-astro

>npm i -D prettier-plugin-tailwindcss // for prettier automatic tailwind class sorting 

*.prettierrc* (.config.js is not working):

    {
      "plugins": ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
      "overrides": [
        {
          "files": "*.astro",
          "options": { "parser": "astro" }
        }
      ]
    }


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

