import { useState, useEffect } from "react";

const useFetch = (apiPath, queryTerms = "", page = 1) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const url = `http://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerms}&page=${page}`;

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await res.json();
        setData(json.results);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchMovie();
  }, [url]);

  return { data, error };
};

export default useFetch;
