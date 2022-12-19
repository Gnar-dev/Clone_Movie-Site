import React from "react";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  //store에서 genreList 불러옴
  //카드 클릭시 디테일 페이지로 전환
  const navigate = useNavigate();
  const gotoDetail = () => {
    navigate(`/movies/${item.id}`);
    // window.location.reload();
  };
  return (
    <div
      onClick={gotoDetail}
      className="slide-card"
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.backdrop_path})`,
      }}
    >
      <div className="card-info">
        <h5>{item.title}</h5>
        <p>
          {item.genre_ids.map((id) => (
            <Badge bg="danger">
              {genreList.find((item) => item.id === id)?.name}
            </Badge>
          ))}
        </p>
        <span className="star">⭐{item.vote_average}</span>
        <span className={item.adult ? "adult" : "kid"}>
          {item.adult ? "19+" : "15+"}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
