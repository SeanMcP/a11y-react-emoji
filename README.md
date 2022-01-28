# a11y-react-emoji

[![npm](https://img.shields.io/npm/v/a11y-react-emoji.svg)](https://npmjs.com/package/a11y-react-emoji) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/a11y-react-emoji.svg)](https://npmjs.com/package/a11y-react-emoji) [![npm](https://img.shields.io/npm/dt/a11y-react-emoji.svg)](https://npmjs.com/package/a11y-react-emoji)

⚛️ An accessible Emoji component for React applications

## Why?
Emojis can add a light playfulness to your project but require some specific formatting in order to ensure they are accessible for all users. `a11y-react-emoji`'s reusable `Emoji` component helps you do that quickly and painlessly.

## How
The `Emoji` component wraps the provided symbol in a `span` with a `role="img"` attribute. If a label is provided, then it is passed as an `aria-label` to the span. If not, then `aria-hidden` is set to `true`.

```html
<span aria-label="a rocket blasting off" role="img">🚀</span>
<span aria-hidden="true" role="img">🤫</span>
```

This follows the pattern recommended by [Léonie Watson](http://tink.uk/accessible-emoji/) and used by [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md).

## Installation
Add `a11y-react-emoji` to your project:

```sh
npm install --save a11y-react-emoji
# or
yarn add a11y-react-emoji
```

## Use
Import `Emoji`, a default export, from `a11y-react-emoji` and add it to your code:

```jsx
...
import Emoji from 'a11y-react-emoji'

function HeartFooter() {
    return (
        <footer>
            Made with
            {' '}
            <Emoji symbol="💕" label="love" />
            {' '}
            by Sean McPherson
        </footer>
    )
}
```

The named `EmojiProps` type interface is also available for import if needed:

```ts
import Emoji, { EmojiProps } from 'a11y-react-emoji'
```

## Emoji component
The `Emoji` component consumes two props: `symbol` and `label`. Every other prop is spread to the top-level JSX element, in this case a `<span>`.

```ts
interface Props extends React.HTMLAttributes<HTMLSpanElement> {
    label?: string; // optional
    symbol: string; // required
}
```

## Considerations
If you are using `a11y-react-emoji` with a CSS-in-JS library like `styled-components` or `emotion`, keep in mind that **all additional props** are passed to the JSX element.

### Styling an Emoji with `styled-components`

```jsx
import styled, { css } from 'styled-components'
import Emoji from 'a11y-react-emoji'

const StyledEmoji = styled(({ isSpinning, ...props }) => <Emoji {...props} />)`
    font-size: 32px;

    ${props => props.isSpinning && css`
        animation: spinning 1s linear infinite;
    `}
`
```

## License

[MIT](/LICENSE)