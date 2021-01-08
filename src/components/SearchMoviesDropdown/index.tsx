import { Input, Select } from 'antd';
import { LabeledValue } from 'antd/lib/select';
import React, { FunctionComponent, useState } from 'react';
import { fetchMovies } from '../../api';
import { useSearch } from '../../hooks';
import style from './style.scss';

const Container: FunctionComponent = () => {
    const [delay, setDelay] = useState(1000);

    const { results, loading, handleInputChange } = useSearch(
        fetchMovies,
        delay
    );

    const options: LabeledValue[] =
        results?.map(({ title, id }) => ({
            value: title,
            label: title,
            key: String(id),
        })) ?? [];

    return (
        <div className={style.main}>
            <Select
                showSearch
                placeholder="Search a movie"
                loading={loading}
                options={options}
                onSearch={handleInputChange}
                className={style.select}
            />
            <Input
                type="number"
                value={delay}
                onChange={(e) => setDelay(Number(e.target.value))}
            />
        </div>
    );
};

export default Container;
