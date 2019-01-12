import Emoji from './Emoji';

const props = {
    label: 'A test tube with bubbly green contents',
    symbol: '🧪',
    className: 'className'
};

test('Is a defined function', () => {
    expect(Emoji).not.toBe(undefined);
    expect(typeof Emoji).toBe('function');
});

test('Sets aria-hidden, -label when label prop is NOT passed', () => {
    const output = Emoji({ symbol: props.symbol });
    expect(output.props['aria-hidden']).toMatch('true');
    expect(output.props['aria-label']).toBe(null);
});

test('Sets aria-hidden, -label when label prop IS passed', () => {
    const output = Emoji(props);
    expect(output.props['aria-hidden']).toBe(null);
    expect(output.props['aria-label']).toMatch(props.label);
});
