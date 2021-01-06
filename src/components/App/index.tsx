import React from 'react';
import { FunctionComponent } from 'react';
import style from './style.scss';

export interface AppProps {
    data: string;
}

const App: FunctionComponent<AppProps> = ({ data }) => {
    return (
        <div className={style.main}>
            Hello World
            <div className={style.block}>{data}</div>
        </div>
    );
};

export default App;
