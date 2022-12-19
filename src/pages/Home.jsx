//api 를 불러오기 위한 셋팅
//로딩 스피너 사용 추가

import React from "react";
import { useEffect } from "react";
import { movieAction } from "./../redux/action/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./../components/Banner";
import MovieSlide from "./../components/MovieSlide";
import HashLoader from "react-spinners/HashLoader";
import Footer from "./../components/Footer";

const Home = () => {
  const dispatch = useDispatch();
  //켜지자 마자 데이터를 불러와져야함, 리덕스미들웨어 이용

  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie); //store에서 가져옴, loading상태도 추가

  // console.log("home data", popularMovies);

  useEffect(() => {
    dispatch(movieAction.getMovies());
    // eslint-disable-next-line
  }, []);

  //로딩 -true- 데이터 도착 전, 로딩스피너 보여줌
  //로딩 false 데이터 도착 후 , 에러 났을때

  if (loading) {
    return (
      <div className="loader-container">
        <HashLoader color="white" loading={loading} size={150} />
      </div>
    );
  }

  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
      <div className="slide-container">
        <h2>Popular Movie</h2>
        <MovieSlide movie={popularMovies} />
        <h2>Top Rated Movie</h2>
        <MovieSlide movie={topRatedMovies} />
        <h2>Upcoming Movie</h2>
        <MovieSlide movie={upcomingMovies} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
