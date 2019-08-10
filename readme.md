## Features
- Stylus with CSS Grid
- Styleguide
- Page Transitions
- Lazy Load Components / Images
- Static Export with pre-rendered content. SEO
- Accessibility Features
- JSON "CMS"

## Nextjs
This is using NextJS. To get running
```
npm run dev
```
You should be able to visit the site at `http://localhost:3000/`.

To export as a static site build
```
npm run export
```
This will export to a static folder `static-export`


### Requirements
Install `node` and `NPM`. Or `yarn`

```
npm install
```

or

```
yarn
```

### Pages
The file-system is the main API. Every `pages/[name].js` file becomes a route `[name]` that gets automatically processed and rendered.

Current pages:
```
| - /stylguide
| - /grid
```

This configuration also demonstrates how to use a .JSON folder to dynamically render out paths using a specific "page" template.
```
| -- /projects/[slugify(title)]
```

### Data
All data is stored in the `./data` folder. However there is no reason why this could not be converted to "live" data using async/fetch operations. This will capture a snapshot of the data at time of build.

### CSS
We are using `Style` and `@zeit/next-stylus` to configure styling. We can thus import and pass around variables and specific shared style sheets which can be expanded on all Styles are stored in the `styles` directory.

- stylus
- rupture (simple media queries)
- PostCSS
- AutoPrefixer

Review the `next.config.js` with further details.

### Static file serving (e.g.: images)
Create a folder called static in your project root directory. From your code you can then reference those files with /static/ URLs:

```
function MyImage() {
  return <img src="/static/my-image.png" alt="my image" />
}

export default MyImage
```