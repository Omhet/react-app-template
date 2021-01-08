import React from 'react';
import { FunctionComponent } from 'react';
import SearchMoviesDropdown from '../SearchMoviesDropdown';
import style from './style.scss';

export interface AppProps {
    data: string;
    onAppendClick(): void;
}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className={style.main}>
            <SearchMoviesDropdown />
        </div>
    );
};

export default App;
