# reactemoji

[![npm](https://img.shields.io/npm/v/reactemoji.svg)](https://npmjs.com/package/reactemoji) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/reactemoji.svg)](https://npmjs.com/package/reactemoji) [![npm](https://img.shields.io/npm/dt/reactemoji.svg)](https://npmjs.com/package/reactemoji)

⚛️ An accessible Emoji component for React applications

## Why?
Emojis can add a light playfulness to your project but require some specific formatting in order to ensure they are accessible for all users. `reactemoji`'s reusable `Emoji` component helps you do that quickly and painlessly.

## Installation
Add `reactemoji` to your project:

```sh
npm install --save reactemoji
# or
yarn add reactemoji
```

## Use
Import `Emoji`, a default export, from `reactemoji` and add it to your code:

```jsx
...
import Emoji from 'reactemoji'

function HeartFooter() {
    return (
        <footer>
            Made with
            {' '}
            <Emoji symbol="❤️" label="love" />
            {' '}
            by Sean McPherson
        </footer>
    )
}
```

## Emoji component
The `Emoji` component consumes two props: `symbol` and `label`. Every other prop is spread to the top-level JSX element, in this case a `<span>`.

```ts
interface EmojiProps {
    label?: string; // optional
    symbol: string; // required
}
```

## Considerations
If you are using `reactemoji` with a CSS-in-JS library like `styled-components` or `emotion`, keep in mind that **all additional props** are passed to the JSX element.

### Styling an Emoji with `styled-components`

```jsx
import styled, { css } from 'styled-components'
import Emoji from 'reactemoji'

const StyledEmoji = styled(({ isSpinning, ...props }) => <Emoji {...props} />)`
    font-size: 32px;

    ${props => props.isSpinning && css`
        animation: spinning 1s linear infinite;
    `}
`
```

## License

[MIT](/LICENSE)