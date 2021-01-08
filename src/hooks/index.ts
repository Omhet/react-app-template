import { debounce } from 'lodash-es';
import { useCallback, useState } from 'react';

export const useDebounce = (callback: (...args: any) => any, delay: number) =>
    useCallback(debounce(callback, delay), [delay]);

export const useSearch = <T>(
    fetchFunction: (options: { query: string }) => Promise<T>,
    delay: number
) => {
    const [results, setResults] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');

    const handleInputChange = (value: string) => {
        setLoading(true);
        setQuery(value);
        debouncedSearch(value);
    };

    const debouncedSearch = useDebounce(async (query: string) => {
        if (query.length === 0) {
            setResults(null);
            return;
        }
        const results = await fetchFunction({ query });
        setResults(results);
        setLoading(false);
    }, delay);

    return {
        results,
        loading: loading && query.length > 0,
        query,
        handleInputChange,
    };
};
