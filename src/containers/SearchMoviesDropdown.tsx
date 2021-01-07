import { Select } from 'antd';
import React, { FunctionComponent } from 'react';

const Container: FunctionComponent = () => {
    return (
        <Select
            showSearch
            placeholder="Search a movie"
            style={{ width: 200 }}
            open
            options={[{ label: 'Inter', value: 'inter' }]}
        />
    );
};

export default Container;
