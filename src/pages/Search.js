import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "../component/Card";
import { Pagination } from "../component/Pagination";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";

export const Search = ({ apiPath, title }) => {
  const [searchParams] = useSearchParams();
  const queryTerms = searchParams.get("q");
  const [currentPage, setCurrentPage] = useState(1);
  const { data: movies } = useFetch(apiPath, queryTerms, currentPage);

  useTitle(`Search Result for ${queryTerms}`);

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl px-24 text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No Result Found for '${queryTerms}'`
            : `Result Found for '${queryTerms}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
        {movies.length > 0 && (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}

        {movies.length === 0 && (
          <div className="flex flex-col justify-center items-center h-[63vh] text-gray-800 dark:text-gray-300">
            <p className="text-3xl px-24 text-gray-700 dark:text-white">
              Please Search a valid Movie
            </p>
          </div>
        )}
      </section>
    </main>
  );
};
