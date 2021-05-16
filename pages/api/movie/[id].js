import { API_KEY, API_BASE } from '../../../lib/tmdb';

export default async (req, res) => {

    const request =
        await fetch(`${API_BASE}/movie/${req.query.id}?api_key=${API_KEY}`)

    const movie = await request.json();

    res.status(200).json({
        movie
    })
}
