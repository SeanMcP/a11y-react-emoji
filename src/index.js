import React from 'react';
import PropTypes from 'prop-types';

const Emoji = ({ label, symbol, ...props }) => {
    return (
        <span
            aria-hidden={label ? 'false' : 'true'}
            aria-label={label ? label : null}
            role="img"
            {...props}
        >
            {symbol}
        </span>
    );
};

Emoji.propTypes = {
    label: PropTypes.string,
    symbol: PropTypes.string.isRequired
};

export default Emoji;
