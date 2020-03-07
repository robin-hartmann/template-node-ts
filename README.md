# 📄 template-ts-node

Template for creating Node.js apps with TypeScript - transpiled to JavaScript

## ⭐ Features

- Code in TypeScript
- Automatic code checking with ESLint
- Automatic code formatting and fixing with Prettier
- Run TypeScript code using `ts-node`
- Integration with Visual Studio Code
  - Settings
  - Tasks
  - Debuging
  - Extensions

## 🛠️ Development

These instructions will get you a copy of this project up and running on your local machine for development and testing purposes.

### 📋 Prerequisites

- [Node.js](https://nodejs.org) - JavaScript run-time environment
  - After installing it, use `npm i` in the project's root folder to install all dependencies

#### Visual Studio Code Extensions

This project is intended to be used with Visual Studio Code and the following extensions are recommended:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates ESLint JavaScript into VS Code
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter using prettier

### 🚀 Built-in Tasks

This project uses npm scripts for running tasks:

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
