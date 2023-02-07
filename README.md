# Points - Tax Calculator

This project was bootstrapped with [Vite](https://vitejs.dev).

This project also uses [SWC](https://swc.rs/) plugin.
SWC uses `esbuild` during build, but replaces `Babel` with SWC during development. For big projects that don't require non-standard React extensions, cold start and Hot Module Replacement (HMR) can be significantly faster.

> "SWC is 20x faster than Babel on a single thread and 70x faster on four cores."

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://vitest.dev) for more information.

### `yarn test:coverage`

The yarn test:coverage command launches the test runner and generates a code coverage report. This report shows which parts of the code have been executed during the tests and which parts have not, providing insights into the level of test coverage for the project. By checking the coverage report, developers can identify areas of the code that need additional testing and improve the overall quality and reliability of the codebase.

### `yarn build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn preview`

The yarn preview command runs the production version of the app locally, allowing developers to preview the production build before deploying it to a live environment. This is useful for testing and verifying the production build on a local machine to ensure it runs correctly and meets the required specifications. Running the preview helps catch any potential issues that may arise in the production environment and helps ensure a smooth deployment.
