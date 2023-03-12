import React, { useState } from "react";
import { useQuery } from "react-query";

import Search from "../components/Search/Search";
import Card from "../components/Card/Card";
import Pagination from "../components/Pagination/Pagination";
import Navbar from "../components/Navbar/Navbar";
import Filter from "../components/Filter/Filter";

import Fetcher from "../Fetcher";

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");

  const { isLoading, error, data } = useQuery(
    ["characters", pageNumber, search, status, gender, species],
    () => Fetcher({ pageNumber, search, status, gender, species })
  );
  if (error) return "An error has occured:" + error.massage;
  return (
    <div className="container-fluid">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />

      <div className="row">
        <div className="col-lg-2 ms-2">
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

export default Home;
