import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import fetchCharacters from "./fetchCharacters";
import Search from "./Search/Search";
import Card from "./Card/Card";
import Pagination from "./Pagination/Pagination";
import Navbar from "./Navbar/Navbar";
import Filter from "./Filter/Filter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

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

  const { isLoading, error, data } = useQuery(
    ["characters", pageNumber, search],
    () => fetchCharacters({ pageNumber, search })
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occured:" + error.massage;
  return (
    <div className="container">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />

      <div className="row">
        <div className="col-2">filter component</div>
        <div className="col">
          <div className="row justify-content-center">
            <Card results={data.results} />
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
