import React from "react";
import { useQuery } from "react-query";

import styles from "./Card.module.scss";

const Card = ({ results, character }) => {
  let display;
  const characterGet = async () => {
    const apiRes = await fetch(character);
    return apiRes.json();
  };
  const { isLoading, error, data } = useQuery(["character", character], () =>
    characterGet()
  );
  // if (isLoading) {
  //   return <div className="text-center">Loading...</div>;
  // }
  if (results) {
    display = results.map((x) => {
      let { id, name, image, status, location } = x;

      return (
        <div
          key={id}
          className=" col-xs-6 col-sm-12 col-md-12 col-lg-6 col-xl-4 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-col justify-content-start`}
          >
            <img className={`${styles.img} `} src={image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-3 fw-bold mb-2">{name}</div>
              <div className="flex w-25">
                <div className="fs-5 fw-normal">Last Location:</div>
                <div className=" fs-6">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else if (data) {
    let { id, name, image, status, location } = data;
    display = (
      <div
        key={id}
        className=" col-xs-6 col-sm-12 col-md-12 col-lg-6 col-xl-4 mb-4 position-relative text-dark"
      >
        <div
          className={`${styles.card} d-inline-flex flex-col justify-content-start`}
        >
          <img className={`${styles.img}`} src={image} alt="" />
          <div className={`${styles.content}`}>
            <div className="fs-3 fw-bold mb-4">{name}</div>
            <div className="flex">
              <div className="fs-4 fw-normal">Last Location:</div>
              <div className=" fs-5">{location.name}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    display = <div className="text-center">No characters found :/</div>;
  }
  return <>{display}</>;
};

export default Card;
