# `used-pm` - What package manager is used?

Lightweight script to detect which package manager executes the current process.

Currently, only the package manager `npm`, `yarn` and `pnpm` are supported.

## Installation

Use your favorite package manager to install `used-pm`. For example:

```sh
npm install used-pm
```

or

```sh
yarn add used-pm
```

or

```sh
pnpm add used-pm
```

## Usage

In `esm`:

```js
import currentPackageManager from 'used-pm';

const { name, version } = currentPackageManager();
```

In `commonjs`:

```js
const currentPackageManager = require('used-pm');

const { name, version } = currentPackageManager();
```
