# Hands on with design systems workshop

This is a starter repository for the particpants of the workshop. Refer to [Handout page](https://hands-on-workshop.goright.io/handout/) for detailed info on how to work with this repo.

## Project structure

The project is split into 2 independent [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/). Read below what you can do with each of them.

### Design system

A workspace for processing design tokens and developing your components library. 

#### Dependencies
- [Storybook](https://storybook.js.org) for development and preview of components
- [Style-dictionary](https://github.com/amzn/style-dictionary) for transforming raw json with tokens, exported from Figma, to nicely organised ES6 modules.
- [Webpack](https://webpack.js.org/) for building the library.
- Optional: visual regression tests with [Creevey](https://github.com/wKich/creevey) 

#### Folder structure

```
design-system/
┣ .add-component/
┣ .storybook/
┣ dist/
┣ node_modules/
┣ src/
┃ ┣ components/
┃ ┃ ┣ Avatar/
┃ ┃ ┣ Button/
┃ ┃ ┗ ...
┃ ┣ tokens/
┃ ┃ ┣ dist/
┃ ┃ ┣ config.js
┃ ┃ ┗ design-tokens.json
┃ ┣ color.stories.mdx
┃ ┣ global.js
┃ ┣ index.js
┃ ┣ intro.stories.mdx
┃ ┗ typography.stories.mdx
┣ tests/
┣ package.json
┗ webpack.config.js
```

#### Working with tokens

Place `design-tokens.json`(a file exported from Figma) into the `design-system/src/tokens` folder. After running build, processed files will be added to `tokens/dist`.

Inside a `config.js` you already got a tailored style-dictionary config, which works well with current setup. If you want to customize the shape of your tokens, please refer to [style-dictionary documentation](https://amzn.github.io/style-dictionary/#/README).

#### Scripts

- `yarn design-system` - starts storybook development server at https://localhost:6006. Alias: `yarn start`.
- `yarn add-component <ComponentName>` - adds template files for new component
- `yarn design-system:build` - builds components library into `dist/` folder.
- `yarn design-system:version` - bumps library version and creates a commit with contents of `dist/` folder.
- `yarn tokens` - rebuilds tokens
- `yarn test` - run tests with [creevey](https://github.com/wKich/creevey)
- `yarn test:ui` - run creevey with UI
- `yarn test:update` - update all screenshots for creevey
- `yarn deploy:storybook` - deploys storybook manually

### Product

A workspace where you build your application using the components library. Based on [create-react-app](https://github.com/facebook/create-react-app).

#### Folder structure

```
product/
┣ build/
┣ node_modules/
┣ public/
┃ ┗ index.html
┣ src/
┃ ┣ assets/
┃ ┣ pages/
┃ ┃ ┣ cart.js
┃ ┃ ┣ checkout.js
┃ ┃ ┣ details.js
┃ ┃ ┗ home.js
┃ ┗ index.js
┗ package.json
```

#### Scripts

- `yarn product` - starts development server at https://localhost:3000
- `yarn product:build` - creates minified production build
- `yarn product:version` - bumps product version
- `yarn deploy:product` - deploy product manually. Normally you don't need it, Github Action s will deploy automatically every time you release a new version.


### Troubleshooting

Sometimes when you run a server with the product, which is based on Create-React-App, you might receive a long error message about unmatched versions of dependencies. It starts with:

```
There might be a problem with the project dependency tree.
It is likely not a bug in Create React App, but something you need to fix locally.

The react-scripts package provided by Create React App requires a dependency:

  "babel-loader": "8.0.4" // can also be "webpack"

Don't try to install it manually: your package manager does it automatically.
However, a different version of babel-loader was detected higher up in the tree:

...
```


This is a known issue related to Create-React-App, which is a bit more difficult to fix in environment with multiple workspaces. There are a [few known solutions](https://github.com/storybookjs/storybook/issues/5183#issuecomment-892763711), which are already applied in this repository. However uf you still encounter this error, we suggest to create `.env` file with the following content:

```
SKIP_PREFLIGHT_CHECK=true
```

This will let you pass the check and run the project.


#### Storybook troubleshooting

If storybook is not updating when it should, or dev server is not running, you can try to clear the cache. For storybook it's located at `design-system/node_modules/.cache/`
