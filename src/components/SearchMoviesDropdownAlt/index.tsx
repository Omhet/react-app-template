import React, { FunctionComponent } from 'react';
import { fetchUsers } from '../../api';
import { useSearch } from '../../hooks';
import style from './style.scss';

const Container: FunctionComponent = () => {
    const { results, loading, query, handleInputChange } = useSearch(
        fetchUsers,
        1000
    );

    const options =
        results?.map(({ name, id }) => ({
            label: name,
            key: String(id),
        })) ?? [];

    return (
        <div className={style.main}>
            <input
                placeholder="Search users"
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
