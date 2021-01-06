import React from 'react';
import { FunctionComponent } from 'react';
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
        </div>
    );
};

export default App;
