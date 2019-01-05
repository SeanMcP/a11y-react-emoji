import * as React from 'react';

interface EmojiProps {
    label?: string;
    symbol: string;
}

function Emoji(props: EmojiProps) {
    const { label, symbol, ...rest } = props;
    return (
        <span
            aria-hidden={label ? 'false' : 'true'}
            aria-label={label ? label : null}
            role="img"
            {...rest}
        >
            {symbol}
        </span>
    );
};

export default Emoji;
