import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './store';
import 'antd/dist/antd.css';
import './global.css';
import { ThemeProvider } from './context/theme';

render(
    <Provider store={store}>
        <ThemeProvider value="light">
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
