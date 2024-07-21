import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { MovieDetails } from "../pages/MovieDetails";
import { MovieList } from "../pages/MovieList";
import { PageNotFound } from "../pages/PageNotFound";
import { Search } from "../pages/Search";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="movies/popular" element={<MovieList />} />
        <Route path="movies/top" element={<MovieList />} />
        <Route path="movies/upcoming" element={<MovieList />} />
        <Route path="movies/search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
