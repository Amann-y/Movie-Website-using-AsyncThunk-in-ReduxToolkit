import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../features/rating/ratingSlice";
import { Container, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Moviecard from "../pages/Moviecard";

const Movielisting = () => {
  const { movies, loading } = useSelector(getAllMovies);
  const { shows } = useSelector(getAllShows);

  return (
    <Container className="mt-2">
      <h2>Movies</h2>
      <Row className="d-flex justify-content-center align-items-center my-1">
        {loading ? (
          <Spinner animation="border" variant="info" />
        ) : (
          movies?.map((ele, ind) => {
            return <Moviecard data={ele} key={ind} />;
          })
        )}
      </Row>
      <hr />

      <h2>Shows</h2>
      <Row className="d-flex justify-content-center align-items-center my-1">
        {loading ? (
          <Spinner animation="border" variant="info" />
        ) : (
          shows?.map((ele, ind) => {
            return <Moviecard data={ele} key={ind} />;
          })
        )}
      </Row>
    </Container>
  );
};

export default Movielisting;
