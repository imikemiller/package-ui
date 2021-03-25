# package-ui

[![NPM](https://img.shields.io/npm/v/package-ui.svg)](https://www.npmjs.com/package/package-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

## Setup

You will need the following extension to be able to auto complete styled components and set up new components:
* `jpoissonnier.vscode-styled-components`
* `huuums.vscode-fast-folder-structure`

Install everything like normal:

```
yarn
```

## Development

Follow the directory / file pattern in `src/components/Button`. The `vscode-fast-folder-structure` plugin can create the files using the templates in `.fttemplates` for you. 

Components are developed in Storybook

```
yarn storybook
``` 

### Testing
To run unit tests:

```
yarn test:unit
```

To update snapshots
```
yarn test:unit --updateSnapshots
```

All unit tests and linting are run on commit by husky.

## Install

```bash
yarn add package-ui
```

## Usage

```tsx
import React, { Component } from 'react'

import {Button} from 'package-ui';

const Example = ()=> {
  render() {
    return <Button />
  }
}
```

## License

MIT © [imikemiller](https://github.com/imikemiller)
