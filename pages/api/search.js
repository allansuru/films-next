import { API_KEY, API_BASE } from '../../lib/tmdb';

export default async (req, res) => {
    const result =
        await fetch(`${API_BASE}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${req.query.q}`)
    const { results } = await result.json();

    res.status(200).json({
        list: results
    })
}
