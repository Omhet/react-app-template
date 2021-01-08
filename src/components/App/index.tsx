import React, { FunctionComponent, useContext } from 'react';
import classnames from 'classnames';
import { ThemeContext } from '../../context/theme';
import SearchMoviesDropdown from '../SearchMoviesDropdown';
import SearchMoviesDropdownAlt from '../SearchMoviesDropdownAlt';
import style from './style.scss';

export interface AppProps {
    data: string;
    onAppendClick(): void;
}

const App: FunctionComponent<AppProps> = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className={classnames(style.main, theme)}>
            <SearchMoviesDropdown />
            <SearchMoviesDropdownAlt />
        </div>
    );
};

export default App;
