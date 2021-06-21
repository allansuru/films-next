const MovieList = ({ movies } = []) => {
  const renderMovies = () => {
    return movies.map((m) => {
      return (
        <li key={m.id}>
          <a href={`/movie/${m.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
              width="150"
            ></img>{" "}
            <br />
            <span>{m.title}</span>
          </a>
        </li>
      );
    });
  };

  return <ul>{renderMovies()}</ul>;
};

export default MovieList;
