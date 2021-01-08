import axios from 'axios';

export const fetchMovies = async ({
    query,
}: {
    query: string;
}): Promise<string[]> => {
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
    return data.results.map(({ title }: { title: string }) => title);
};
