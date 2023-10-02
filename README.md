# Astro Tailwind Flowbite Template

This is a website template that uses Astro 3.0 along with Tailwind to create a static website for various smaller projects. I'm hoping to use this as a foundation for small projects in the future such as building friends or small businesses fast and simple static sites.

Walk through video:

[![IMAGE_ALT](https://img.youtube.com/vi/FBFbW2TNRL8/0.jpg)](https://www.youtube.com/watch?v=FBFbW2TNRL8)

This uses all the great features of Astro 3.0 like View Transitions API support, automatic asset optimization, better build output and more. You can read more about Astro 3.0 [here](https://astro.build/blog/astro-3).

This is a work in progress, so please feel free to send me a pull request for any improvements you make. Look at the contributing section below for more information.

## Getting Started

- Clone or fork this repo.
- Run `npm install` to install all the dependencies.
- Run `npm run dev` to start the dev server.
- You can then view the site at [http://localhost:4321/](http://localhost:4321/).

## Changing Site Contents

Most of the site data lives in `src/data/site.json`. You can change the site title, description, social media links and more there. Make sure to use a JSON linter in case you make any mistakes!

## Adding Pages

Add pages in the `src/pages` directory. Create a new file named `pagename.astro` and import the Layout and some varibales like so:

```html
---
import Layout from "../layouts/Layout.astro";
import HeaderSmall from "../components/HeaderSmall.astro";

const title = "Contact";
const subtitle = "Contact me";
---

<Layout title="Contact">
  <div>
    <HeaderSmall title="{title}" subtitle="{subtitle}" />
  </div>
  <main>
    <div class="container">CONTENT HERE</div>
  </main>
</Layout>
```

**Also note:** you'll need to add the page to `src/data/site.json` in the `pages` array for the page to show up in the navigation. Or don't, it's your site. Maybe you don't want / need the new page in the nav.

## Component Library

I'm using the Flowbite component library, which is a Tailwind CSS. You can find components [here](https://flowbite.com/docs/components/accordion/). If you'd like to add components simply add them to the `src/components` directory and import them into your page.

## Site Logo

Replace the image in `assets/logo.png` with your own logo. If it's not square, you'll need to adjust the `width` and `height` in `components/Nav.astro` file line 55.

## Site Favicon

Replace the image in `public/favicon.svg` with your own favicon.

## Project Images

To Do.

Project images should be added to `assets`. You can set their image name in `src/data/site.json` in the `projects` array. You can also set the project title, description, and link there as well.

## Site Colors

Colors for primary, secondary, and accent are set in the `tailwind.config.cjs` file. You can change them there to whatever you'd like. A tailwind pallete or even a hex or rgb value will work.

## Site Fonts

To Do.

## Contributing

If you'd like to contribute to this project, please feel free to send me a pull request. I'm always looking for ways to improve this template. If its for a bug fix, please create an issue first so we can discuss it, same with a feature add. This will give me more understanding when reviewing the PR. I want to keep this project neat and fast so please make sure to follow the guidelines below.

## Guidelines

- Please use the [Prettier](https://prettier.io/) code formatter to keep the code clean and consistent.
- Please use [Tailwind](https://tailwindcss.com/) classes for styling.
- Please use [Astro](https://astro.build/) components for HTML.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
