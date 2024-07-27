import { useState, useEffect } from "react";

const useFetch = (apiPath, queryTerms = "", page = 1) => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerms}&page=${page}`;

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(url);
      const jaon = await res.json();
      setData(jaon.results);
    }
    fetchMovie();
  }, [url]);
  return { data };
};

export default useFetch;
