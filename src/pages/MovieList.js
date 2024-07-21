import { useEffect, useState } from "react";
import { Card } from "../component/Card";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=212cd28cc55b9d69431cc82aadad4230&language=en-US&page=1"
      );
      const data = await res.json();
      setMovies(data.results);
    }
    fetchMovie();
  }, []);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
