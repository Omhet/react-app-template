import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import App from '../components/App';
import { AppState } from '../store';
import { appendData } from '../store/modules/example';

const Container: FunctionComponent = () => {
    const dispatch = useDispatch();
    const handleAppendClick = useCallback(() => {
        dispatch(appendData('data'));
    }, [dispatch]);
    const data = useSelector((state: AppState) => state.example.data);

    return <App onAppendClick={handleAppendClick} data={data} />;
};

export default Container;
