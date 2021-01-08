import { Input, Select } from 'antd';
import { LabeledValue } from 'antd/lib/select';
import { debounce } from 'lodash-es';
import React, { FunctionComponent, useCallback, useState } from 'react';

export const fetchMovies = async ({
    query,
}: {
    query: string;
}): Promise<string[]> => {
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const data = await res.json();
    return data.results.map(({ title }: { title: string }) => title);
};

const useDebounce = (callback: (...args: any) => any, delay: number) =>
    useCallback(debounce(callback, delay), [delay]);

const Container: FunctionComponent = () => {
    const [options, setOptions] = useState<LabeledValue[]>([]);
    const [loading, setLoading] = useState(false);
    const [delay, setDelay] = useState(0);

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
        <>
            <Select
                showSearch
                placeholder="Search a movie"
                style={{ width: 200 }}
                loading={loading}
                options={options}
                onSearch={handleInputChange}
            />
            <Input
                style={{ width: 200 }}
                type="number"
                value={delay}
                onChange={(e) => setDelay(Number(e.target.value))}
            />
        </>
    );
};

export default Container;
