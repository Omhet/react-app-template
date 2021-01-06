import { Select } from 'antd';
import React, { FunctionComponent } from 'react';

const { Option } = Select;

const Container: FunctionComponent = () => {
    return (
        <Select
            showSearch
            placeholder="Search a movie"
            style={{ width: 200 }}
            open
        >
            <Option value="inter">Inter</Option>
        </Select>
    );
};

export default Container;
