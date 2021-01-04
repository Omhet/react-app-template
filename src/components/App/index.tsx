import React from 'react';
import { FunctionComponent } from 'react';
import style from './style.scss';

const App: FunctionComponent = () => {
    return (
        <div className={style.main}>
            Hello World!
            <div className={style.block}>Block</div>
        </div>
    );
};

export default App;
