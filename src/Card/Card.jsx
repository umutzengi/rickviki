import React from "react";

import styles from "./Card.module.scss";

const Card = ({ results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, image, status, location } = x;

      return (
        <div
          key={id}
          className="container-fluid col-xs-8 col-sm-12 col-md-12 col-lg-6 col-xl-4 mb-4 position-relative text-dark"
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
  } else {
    display = "No Characters Found :/";
  }
  return <>{display}</>;
};

export default Card;
