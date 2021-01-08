import axios from 'axios';

interface Movie {
    title: string;
    id: number;
}

export const fetchMovies = async ({
    query,
}: {
    query: string;
}): Promise<Movie[]> => {
    const { data } = await axios.get(
        'https://api.themoviedb.org/3/search/movie',
        {
            params: {
                api_key: process.env.TMDB_API_KEY,
                language: 'en-US',
                query,
                page: '1',
                include_adult: 'false',
            },
        }
    );
    return data.results.map(({ title, id }: Movie) => ({
        title,
        id,
    }));
};

interface User {
    name: string;
    id: number;
}

export const fetchUsers = async (): Promise<User[]> => {
    const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    );
    return data.map(({ name, id }: User) => ({
        name,
        id,
    }));
};
