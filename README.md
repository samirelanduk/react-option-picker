# react-option-picker

[![Npm Version](https://img.shields.io/npm/v/react-option-picker.svg)][npm_url]
[![downloads](https://img.shields.io/npm/dt/react-option-picker.svg)][npm_url]
[![license](https://img.shields.io/npm/l/react-option-picker.svg)][npm_url]
[![Twitter Follow](https://img.shields.io/twitter/follow/samirelanduk)](https://twitter.com/samirelanduk)

[npm_url]: https://www.npmjs.org/package/react-option-picker

A react select element that provides the elements and logic only - no built-in styling.

## Installation

With npm:

```bash
npm install react-option-picker
```

## Use

To use:

```jsx
import { useState } from "react";
import Select from "react-option-picker";

export const App = () => {

    const [number, setNumber] = useState(null);

    const options = [
        {id: 1, label: "one"},
        {id: 2, label: "two"},
        {id: 3, label: "three"},
        {id: 4, label: "four"},
    ]

    return (
        <div>
            <Select
                options={options}
                value={number}
                setValue={setNumber}
                className="big-text"
                inputClassName="small-text"
            />
        </div>
    )
}
```

## Styling

The `Select` is made of various sub-components, each of which can have style applied directly - either by using its built-in class name or by applying your own class name.

### The parent component

- has `option-picker` class.
- also has `option-picker-open` class when the `Select` is showing options.
- `className` prop to apply your own class name.
- `openClassName` prop to apply classes when `Select` is showing options.

### The input component

This displays whatever the currently selected value is.

- has `option-picker-input` class.
- also has `option-picker-input-open` class when the `Select` is showing options.
- `inputClassName` prop to apply your own class name.
- `openInputClassName` prop to apply classes when `Select` is showing options.

### The options component

This contains the list of selectable options.

- has `option-picker-options` class.
- `optionsClassName` prop to apply your own class name.

### The option components

This shows a single selectable option

- has `option-picker-option` class.
- has `option-picker-option-selected` class when it is the current selected item.
- `optionClassName` prop to apply your own class name.
- `selectedPptionClassName` prop to apply your own class name when it is the current selected item.

## Development

Rollup is used to build the package to `dist/index.js`. To install the tools needed for this:

```
npm install --legacy-peer-deps
```

This option is used because some of the dev dependencies have react as a peer dependency, and it is important that this does not get installed as it prevents the library from being installed locally.

To continuously build while developing:

```
npm run dev
```

To make a final, publishable build:

```
npm run build
```

## Changelog

### Release 0.1.0

*3 June 2023*

- Initial Select component with static options.
- Initial styling system.




