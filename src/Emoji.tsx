import * as React from 'react';

interface IEmojiProps extends React.HTMLAttributes<HTMLSpanElement> {
    label?: string;
    symbol: string;
}

function Emoji(props: IEmojiProps) {
    const { label, symbol, ...rest } = props;
    return (
        <span
            aria-hidden={label ? null : 'true'}
            aria-label={label ? label : null}
            role="img"
            {...rest}
        >
            {symbol}
        </span>
    );
};

export default Emoji;
