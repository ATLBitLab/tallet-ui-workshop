# Designing and coding an industry-grade UI

This github repo contains the output of [a workshop on UI design and dev](https://www.meetup.com/terminus/events/289027898/) which we hosted at [Terminus](https://terminus.money/). Here is a [recording of the workshop](https://www.youtube.com/watch?v=JkTPL55sd9k).

First, we chatted for a bit about how a designer and developer might collaborate in a modern workflow.

Then, we jumped into Figma to start building.

We used [Bitcoin UI Kit](https://www.bitcoinuikit.com/) as a starting point. Here is the [cloned figma file](https://www.figma.com/file/mqXLrZOi7y6fZMvpgamrVE/Terminus-Workshop-UI?node-id=267%3A3873).

The group agreed we should design the onboarding for a Taro compatible wallet, so we called it Tallet and built [this screen](https://www.figma.com/file/mqXLrZOi7y6fZMvpgamrVE/Terminus-Workshop-UI?node-id=3651%3A96939).

Then, we implemented the first screen with code.

We started with `npx create-react-app`. You can learn more at [create-react-app.dev](https://create-react-app.dev).

Next, we installed [TailwindCSS](https://tailwindcss.com/) by following [these instructions](https://tailwindcss.com/docs/guides/create-react-app).

After that, we installed [Bitcoin Icons](https://bitcoinicons.com/) by following [these instructions](https://www.npmjs.com/package/@bitcoin-design/bitcoin-icons-react).

Finally, we created a `Button` component and constructed the Tallet screen in `App.js`.

# Instructions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
