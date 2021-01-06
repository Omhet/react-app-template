import React from 'react';
import { FunctionComponent } from 'react';
import SearchMoviesDropdown from '../../containers/SearchMoviesDropdown';
import style from './style.scss';

export interface AppProps {
    data: string;
    onAppendClick(): void;
}

const App: FunctionComponent<AppProps> = ({ data, onAppendClick }) => {
    return (
        <div className={style.main}>
            Hello World
            <div className={style.block}>{data}</div>
            <button onClick={onAppendClick}>Append</button>
            <SearchMoviesDropdown />
        </div>
    );
};

export default App;
