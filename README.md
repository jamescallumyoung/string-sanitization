# @jych/string-sanitization

This module includes various utils for working with Strings.

## Installation

```sh
# with npm
npm i @jych/string-sanitization

# with yarn
yarn add @jych/string-sanitization
```

## Usage

```js
import { sanitizeEmail, sanitizeName } from '@jych/string-sanitization';

const sanitizedEmail = sanitizeEmail('hello@example.com');
// => aGVsbG9AZXhhbXBsZS5jb20=

const sanitizedEmail = sanitizeEmail('hello@example.com', { prefix: 'email' });
// => email:aGVsbG9AZXhhbXBsZS5jb20=

const sanitizedName = sanitizeEmail('Darth Vader');
// => D**** V****
```
