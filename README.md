
# Trip Planner

## Requirements

For development, you will only need Node.js installed on your environment.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v14.20.0

    $ npm --version
    v6.14.17

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs


## Install

    $ npm install


## Start & watch

    $ npm start

## Run test cases

    $ npm run test

## Languages & tools

### JavaScript

- [React](http://facebook.github.io/react) is used for UI.
- [TypeScript](https://www.typescriptlang.org/) is used to add type safety .
- [Eslint](https://eslint.org/) for better code quality.
- [Prettier](https://prettier.io/) for maintaining code quality in project.
- [Axios](https://prettier.io/) to make HTTP requests.

### CSS
- [CSS](https://sass-lang.com/) is used for styling.
- [Bootstrap](https://getbootstrap.com/) to make responsive design.

## Notes
- Properly handle UI with mobile responsiveness.
- Added validation on the Form.
- Added ESLint for consistency and better code quality.
- Added Basic Test Cases for components.

## Future Work
- We can add proper Authentication Process where user can login and signup.
- We can add detailed test cases.
