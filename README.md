# better-local-storage

A package that makes getting and setting local/session storage items much easier.

## Installation

```sh
npm install better-local-storage
```

## Usage

Instead of using `localStorage.getItem("foo")`, `localStorage.setItem("foo", "bar")`, and `localStorage.removeItem("foo")` you can use:

```js
import betterStorage from "better-local-storage";

// Get Item
betterStorage.local.foo;

// Set Item
betterStorage.local.foo = "bar";

// Remove Item
delete betterStorage.local.foo;
```

This also works with `sessionStorage`, access it with `betterStorage.session`.

## Credits

By **Jacob Hackney**.
