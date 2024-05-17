import { useEffect, useState } from "react";
import MovieCard from "../Componentes/MovieCard/MovieCard";

function Filmes() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR&page=1&region=BR"
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results));
    // .catch(err = console.log(err))
  });
  return (
    <section className="w-4/5 mx-auto my-0">
      <h1 className="text-3xl">Filmes</h1>
      <div className="grid grid-cols-4 gap-8">
        {movies.map((filme, index) => (
          <MovieCard filme={filme} key={filme.id}/>
        ))}
      </div>
    </section>
  );
}
export default Filmes;
