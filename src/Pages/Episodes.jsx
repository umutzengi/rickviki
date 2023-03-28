import React, { useEffect, useState } from "react";

import { useQuery } from "react-query";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";

const Episodes = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, episode, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;
  const episodeFetch = async ({ id }) => {
    const apiRes = await fetch(api);

    return apiRes.json();
  };

  const { isLoading, error, data } = useQuery(
    ["episode", results, info, id],
    () => episodeFetch({ results, info, id })
  );
  if (error) return "An error has occured:" + error.massage;
  return (
    <div>
      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="mx-2">
          <div className="row mb-3">
            <h1 className="text-center mb-3">
              Episode name :{" "}
              <span className="text-primary">
                {data.name === "" ? "Unknown" : data.name}
              </span>
            </h1>
            <h5 className="text-center">
              Air Date: {data.air_date === "" ? "Unknown" : data.air_date}
            </h5>
          </div>
          <div className="row">
            <div className="col-lg-2 mb-4">
              <h4 className="text-center mb-4">Pick Episode</h4>
              <InputGroup name="Episode" changeID={setID} total={51} />
            </div>
            <div className="col col-lg-10">
              <div className="row row-lg-4">
                {data.characters.map((character) => {
                  return <Card key={id} character={character} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Episodes;
