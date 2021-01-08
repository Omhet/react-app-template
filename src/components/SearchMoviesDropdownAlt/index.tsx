import React, { FunctionComponent } from 'react';
import { fetchMovies } from '../../api';
import { useSearch } from '../../hooks';
import style from './style.scss';

const Container: FunctionComponent = () => {
    const { results, loading, query, handleInputChange } = useSearch(
        fetchMovies,
        1000
    );

    const options =
        results?.map(({ title, id }) => ({
            label: title,
            key: String(id),
        })) ?? [];

    return (
        <div className={style.main}>
            <input
                placeholder="Search movies"
                onChange={(event) => handleInputChange(event.target.value)}
            />
            {query.length > 0 && (
                <ul>
                    {loading
                        ? 'Loading...'
                        : options.length === 0
                        ? 'No data'
                        : options.map(({ label, key }) => (
                              <li key={key}>{label}</li>
                          ))}
                </ul>
            )}
        </div>
    );
};

export default Container;
