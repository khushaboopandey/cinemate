import { useState, useEffect } from "react";

const useFetch = (apiPath, queryTerms = "") => {
  const [data, setData] = useState([]);
  console.log("====================================");
  console.log(queryTerms);
  console.log("====================================");
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerms}
`;

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
