import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import Search from "./Search/Search";
import Card from "./Card/Card";
import Pagination from "./Pagination/Pagination";
import Navbar from "./Navbar/Navbar";
import Filter from "./Filter/Filter";

const queryClient = new QueryClient();
//   {
//   defaultOptions: {
//     queries: {
//       staleTime: Infinity,
//       cacheTime: Infinity,
//     },
//   },
// }

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Fetcher />
    </QueryClientProvider>
  );
};

const Fetcher = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [info, setInfo] = useState({});
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(api).then((res) => res.json())
  );
  if (isLoading) return "Loading...";

  if (error) return "An error has occured:" + error.massage;
  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container col-lg-12">
        <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
            <div className="row justify-content-center">
              <Card results={data.results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={data.info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default App;
