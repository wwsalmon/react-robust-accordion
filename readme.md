# React Robust Accordion

A simple, robust accordion component for React. Made by Samson Zhang ([GitHub](https://github.com/wwsalmon), [Twitter](https://twitter.com/wwsalmon), [website](https://www.samsonzhang.com/)).

## Installation

Install via npm:

`npm i react-robust-accordion`

## Usage

Basic usage:

```
import Accordion from "react-robust-accordion"

...

<Accordion label={<div>Put what you want to show when collapsed here!</div>}>
    <div>Put what you want to show when expanded here!</div>
</Accordion>
```

Set whether the accordion is open or closed by default with the `open` prop:

```
<Accordion label={<div>This accordion will be open by default!</div>} open={true}>
    <div>Visitors will see what's here.</div>
</Accordion>
```

## External control

react-robust-accordion can also be controlled externally with the use of props `openState`, `setOpenState`, and `noClickLabel`.

```
const [openState, setOpenState] = useState(false);

...

<button onClick={() => setOpenState(!openState)}>
    Click to toggle accordion
</button>

<Accordion
    label={<div>Put what you want to show when collapsed here!</div>}
    openState={openState}
    setOpenState={setOpenState}
    noClickLabel={true}
>
    <div>Put what you want to show when expanded here!</div>
</Accordion>
```

The `noClickLabel` param is always optional. When controlled with an external state variable, react-robust-accordion can still be expanded by clicking the label. `noClickLabel` is useful if you only want the accordion to be toggled with a single button rather than the entire label, for example.

## Complete docs

| Param | Type | Description |
| --- | --- | --- |
| props.children | <code>reactNode</code> | Elements displayed in body of accordion (i.e. when expanded) |
| props.label | <code>reactNode</code> | Elements displayed in label of accordion (i.e. when collapsed) |
| [props.openState] | <code>boolean</code> | Optional custom state variable for external control |
| [props.setOpenState] | <code>function</code> | Optional custom setState function for external control (required if using props.openState) |
| [props.noClickLabel] | <code>boolean</code> | Optional flag to make clicking the label not expand the accordion. Useful if using external control |
 
 ## Development
 
 Clone this repo and run `npm run start` to start a webpack development server. `demo/index.html` with corresponding React code in `demo.js` will be spun up at `localhost:8080` with hot reload.
 
 Run `npm run build` to bundle the core component code in `index.js` into `dist/bundle.js`.
 
 