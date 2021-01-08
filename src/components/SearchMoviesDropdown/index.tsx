import { Input, Select } from 'antd';
import { LabeledValue } from 'antd/lib/select';
import React, { FunctionComponent, useState } from 'react';
import { fetchMovies } from '../../api';
import { useDebounce } from '../../hooks';
import style from './style.scss';

const Container: FunctionComponent = () => {
    const [options, setOptions] = useState<LabeledValue[]>([]);
    const [loading, setLoading] = useState(false);
    const [delay, setDelay] = useState(1000);

    const handleInputChange = (value: string) => {
        debouncedSearch(value);
    };

    const debouncedSearch = useDebounce(async (query: string) => {
        if (query.length === 0) {
            setOptions([]);
            return;
        }
        setLoading(true);
        const results = await fetchMovies({ query });
        const options = results.map((title, index) => ({
            value: title,
            label: title,
            key: String(index),
        }));
        setOptions(options);
        setLoading(false);
    }, delay);

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
