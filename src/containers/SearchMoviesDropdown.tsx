import { Select } from 'antd';
import { LabeledValue } from 'antd/lib/select';
import React, {
    FunctionComponent,
    useCallback,
    useEffect,
    useState,
} from 'react';

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

const Container: FunctionComponent = () => {
    const [query, setQuery] = useState('');
    const [options, setOptions] = useState<LabeledValue[]>([]);
    const [loading, setLoading] = useState(false);

    const handleInputChange = useCallback((value: string) => {
        setQuery(value);
    }, []);

    useEffect(() => {
        const searchMovies = async () => {
            if (query.length === 0) {
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
        };
        searchMovies();
    }, [query]);

    return (
        <Select
            showSearch
            placeholder="Search a movie"
            style={{ width: 200 }}
            loading={loading}
            options={options}
            value={query}
            onSearch={handleInputChange}
        />
    );
};

export default Container;
