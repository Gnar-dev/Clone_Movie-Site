import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Trailer from "./Trailer";
const MovieExplain = ({ item, videoId }) => {
  return (
    <div>
      <Container className="detailContainer">
        <Row>
          <Col>
            <img
              className="detail-img"
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt="detail_img"
            />
          </Col>
          <Col>
            {item &&
              item.genres?.map((item) => (
                <Badge bg="danger" key={item.id}>
                  {item.name}
                </Badge>
              ))}

            <h1>{item.title}</h1>
            <p>{item.tagline}</p>
            <div className="pung">
              <span className="star">⭐ {item.vote_average}</span>
              <span>👥 {item.popularity} </span>
              <div className={item.adult ? "adult" : "kid"}>
                {item.adult ? "19+" : "15+"}
              </div>
            </div>

            <div className="detail-overview">{item.overview}</div>
            <div>
              <Trailer item={videoId} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieExplain;
