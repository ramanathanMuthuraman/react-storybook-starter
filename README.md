# React Webpack Storybook Starter

A sample React project built with Webpack and plain JavaScript, with Storybook configured for component development and documentation.

## Stack

- React 19
- Webpack 5
- Babel
- Storybook 10
- JavaScript and JSX only
- styled-components
- Shared color tokens via `src/theme/colors.json`

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Start the app

```bash
npm start
```

The Webpack dev server runs on `http://localhost:3000`.

### Start Storybook

```bash
npm run storybook
```

Storybook runs on `http://localhost:6006`.

### Create production builds

```bash
npm run build
npm run build-storybook
```

## Available Scripts

- `npm start`: starts the Webpack development server
- `npm run build`: builds the React app into `dist/`
- `npm run storybook`: starts Storybook in development mode
- `npm run build-storybook`: builds static Storybook output into `storybook-static/`
- `npm test`: placeholder script

## Project Structure

```text
.storybook/
  main.js
  manager.js
  manager-head.html
  preview.js
  preview-head.html
  storybookTheme.js
assets/
  react-logo.svg
public/
  index.html
src/
  components/
    FeatureCard.jsx
    FeatureCard.style.js
    FeatureCard.stories.js
  theme/
    colors.json
  App.jsx
  App.style.js
  index.js
webpack.config.js
package.json
README.md
```

## Styling

The source folder uses `styled-components`, with style definitions split into dedicated `*.style.js` files.

- `src/App.jsx` contains the page structure
- `src/App.style.js` contains the app layout styles and global page reset through `createGlobalStyle`
- `src/components/FeatureCard.jsx` contains the component render logic
- `src/components/FeatureCard.style.js` contains the card styles
- `src/theme/colors.json` is the single source of truth for the shared color palette
- `.storybook/storybookTheme.js` reads the same `colors.json` file for the Storybook manager and docs theme

This keeps the app UI and Storybook styleguide aligned without duplicating the palette in two different places.

## Storybook Notes

- The sidebar onboarding checklist is disabled in `.storybook/main.js`
- Storybook branding is configured in `.storybook/storybookTheme.js` and `.storybook/manager.js`
- Inter is loaded for both the Storybook manager and preview through `.storybook/manager-head.html` and `.storybook/preview-head.html`
- The brand logo is served from `assets/react-logo.svg` through Storybook `staticDirs`
- The generated static Storybook HTML still includes some default Storybook internals because those come from Storybook's own internal template

## Customizing the Starter

### Add a new component

1. Create a component in `src/components/`
2. Create a matching `*.style.js` file if the component has styled-components definitions
3. Add a `*.stories.js` file next to the component
4. Storybook will pick it up automatically from `src/components/**/*.stories.js`

### Update the shared theme

1. Edit `src/theme/colors.json`
2. Restart the app or Storybook if needed
3. Both the source components and the Storybook theme will reflect the updated values

## Output Folders

- `dist/`: production Webpack build
- `storybook-static/`: static Storybook build

These folders are generated and ignored by Git.
