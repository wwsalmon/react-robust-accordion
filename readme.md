# React Robust Accordion

A simple, robust accordion component for React. Made by Samson Zhang ([GitHub](https://github.com/wwsalmon), [Twitter](https://twitter.com/wwsalmon), [website](https://www.samsonzhang.com/)).

## Installation

Install via npm:

`npm i react-robust-accordion`

## Usage

Basic usage:

```
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