//react multi carousel 슬라이더 컴포넌트
//https:// www.npmjs.com/package/react-multi-carousel

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { movieAction } from "./../redux/action/movieAction";
import HashLoader from "react-spinners/HashLoader";
import { useParams } from "react-router-dom";
import MovieExplain from "../components/MovieExplain";
import Footer from "../components/Footer";

const MovieDetail = () => {
  const { id } = useParams();
  const { detailMovies, loading, trailerVideo } = useSelector(
    (state) => state.movie
  );
  const dispatch = useDispatch(id);

  useEffect(() => {
    dispatch(movieAction.getMoviesDetail(id));
    window.scrollTo(0, 0); // 화면 제일 위로 올라간 상태로 열리게
    // eslint-disable-next-line
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loader-container">
        <HashLoader color="white" loading={loading} size={150} />
      </div>
    );
  }

  return (
    <div>
      {console.log("detailmovies는?", detailMovies)}
      <MovieExplain item={detailMovies} videoId={trailerVideo} />
      <br />
      <br />
      <h1>영화 리뷰들 넣을곳!!</h1>
      <Footer />
    </div>
  );
};

export default MovieDetail;
