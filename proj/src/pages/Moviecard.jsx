import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Moviecard = ({ data }) => {
  return (
    <Col
      sm={6}
      md={4}
      className="d-flex justify-content-center flex-column align-items-center my-4 my-card"
    >
      <Link to={`/movie/${data.imdbID}`}>
        <div className="d-flex justify-content-center align-items-center">
          <img src={data.Poster} alt="Pic" className="img-fluid text-center" />
        </div>
        <div className="mx-auto text-center">
          <h5 className="text-wrap">Title : {data.Title}</h5>
          <h6> Year : {data.Year}</h6>
        </div>
      </Link>
    </Col>
  );
};

export default Moviecard;
