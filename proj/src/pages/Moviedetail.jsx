import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrShowDetail,
  getMovieOrShowDetail,
  removeSelectedMovieOrShow,
} from "../features/rating/ratingSlice";
import { Col, Container, Row } from "react-bootstrap";

const Moviedetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const { selectedmovieorshow, loading } = useSelector(getMovieOrShowDetail);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [imdbID]);

  return (
    <Container className="my-2">
      <Row>
        <Col className="mt-2" md={6}>
          {loading ? (
            <Spinner
              animation="border"
              variant="info"
              className="text-center"
            />
          ) : (
            <div className="d-flex flex-column align-items-center">
              <div>
                <img
                  src={selectedmovieorshow.Poster}
                  alt="Pic"
                  className="img-fluid"
                />
              </div>
            </div>
          )}
        </Col>

        <Col
          md={6}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <div>
            <h2 className="text-center">Title : {selectedmovieorshow.Title}</h2>
          </div>
          <div>
            <h5 className="text-center">Genre : {selectedmovieorshow.Genre}</h5>
          </div>
          <div>
            <h5>Released : {selectedmovieorshow.Released}</h5>
          </div>
          <div>
            <p>Plot : {selectedmovieorshow.Plot}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Moviedetail;
