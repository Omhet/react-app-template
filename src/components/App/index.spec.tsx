import { render } from '@testing-library/react';
import React from 'react';
import App, { AppProps } from '.';

describe('App', () => {
    const props: AppProps = {
        data: 'data',
        onAppendClick: jest.fn(),
    };

    test('shows data string', () => {
        const { queryByText } = render(<App {...props} />);

        expect(queryByText(props.data)).toBeInTheDocument();
    });
});
