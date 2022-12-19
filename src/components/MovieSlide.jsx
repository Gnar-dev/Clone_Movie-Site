//react multi carousel 슬라이더 컴포넌트
//https:// www.npmjs.com/package/react-multi-carousel

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";
///

///

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

///

///
const MovieSlide = ({ movie }) => {
  console.log("받아온 movie는?", movie);
  return (
    <div>
      <Carousel responsive={responsive}>
        {movie.results.map((item) => (
          <div className="card-wrap">
            <MovieCard item={item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlide;
