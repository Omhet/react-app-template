import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import App from '../components/App';
import { AppState } from '../store';

const Container: FunctionComponent = () => {
    const data = useSelector((state: AppState) => state.example.data);

    return <App data={data} />;
};

export default Container;
