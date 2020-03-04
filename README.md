# template-ts-node

Template for creating node.js apps with TypeScript

## Features

- TypeScript with strict config
- ESLint with lots of recommended rules
- Prettier with matching config
- Build Process using npm Scripts
- Launch and debug TypeScript code using `ts-node`
- Integration with Visual Studio Code
  - Matching settings
  - Launch config
  - Task definitions
  - Extension recommendations

## Development

These instructions will get you a copy of this project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org) - JavaScript run-time environment

#### Visual Studio Code Extensions

This project is intended to be used with Visual Studio Code and the following extensions are recommended:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates ESLint JavaScript into VS Code
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter using prettier

### Build Process

This project uses npm scripts for building:

```bash
# lint the project using eslint
npm run lint

# removes the generated folder
npm run clean

# build the project
# (includes clean and lint)
npm run build

# build the project without linting
# (includes clean)
npm run build-only

# run TypeScript code using ts-node
npm run start:ts
# or just
npm start

# run generated JavaScript code using node
# (does NOT include build)
npm run start:js

# publish the project
# (includes build)
npm publish
```

VS Code tasks for `lint`, `build`, `build-only`, `start:ts` and `start:js` are also included.
