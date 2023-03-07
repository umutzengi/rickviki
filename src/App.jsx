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
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");

  const { isLoading, error, data } = useQuery(
    ["characters", pageNumber, search, status, gender, species],
    () => fetchCharacters({ pageNumber, search, status, gender, species })
  );
  if (error) return "An error has occured:" + error.massage;
  return (
    <div className="container-fluid">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />

      <div className="row">
        <div className="col-lg-2 ms-4">
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
        </div>
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="col">
            <div className="row">
              <Card results={data.results} />
            </div>
            <Pagination
              info={data && data.info}
              pageNumber={pageNumber}
              updatePageNumber={updatePageNumber}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
