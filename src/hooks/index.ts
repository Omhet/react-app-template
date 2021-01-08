import { debounce } from 'lodash-es';
import { useCallback } from 'react';

export const useDebounce = (callback: (...args: any) => any, delay: number) =>
    useCallback(debounce(callback, delay), [delay]);
