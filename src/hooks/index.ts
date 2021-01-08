import { debounce } from 'lodash-es';
import { useCallback, useState } from 'react';

export const useDebounce = (callback: (...args: any) => any, delay: number) =>
    useCallback(debounce(callback, delay), [delay]);

interface useSearchReturn<T> {
    results: T | null;
    loading: boolean;
    handleInputChange: (value: string) => void;
}
export const useSearch = <T>(
    fetchFunction: (options: { query: string }) => Promise<T>,
    delay: number
): useSearchReturn<T> => {
    const [results, setResults] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (value: string) => {
        debouncedSearch(value);
    };

    const debouncedSearch = useDebounce(async (query: string) => {
        if (query.length === 0) {
            setResults(null);
            return;
        }
        setLoading(true);
        const results = await fetchFunction({ query });
        setResults(results);
        setLoading(false);
    }, delay);

    return {
        results,
        loading,
        handleInputChange,
    };
};
