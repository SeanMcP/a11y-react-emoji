import * as React from 'react';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
    label?: string;
    symbol: string;
}

function Emoji(props: Props) {
    const { label, symbol, ...rest } = props;
    return (
        <span
            aria-hidden={label ? undefined : true}
            aria-label={label ? label : undefined}
            role="img"
            {...rest}
        >
            {symbol}
        </span>
    );
};

export default Emoji;
