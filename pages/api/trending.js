import { API_KEY, API_BASE } from '../../lib/tmdb';

export default async (req, res) => {
    const result = await fetch(`${API_BASE}/trending/movie/week?api_key=${API_KEY}&anguage=pt-BR`)
    const { results } = await result.json();

    res.status(200).json({
        list: results
    })
}
