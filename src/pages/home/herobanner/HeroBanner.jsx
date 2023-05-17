import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useFetch from "../../../hooks/UseFetch";
import { useSelector } from "react-redux";
import ContentWrapper from "../../../components/contentwrapper/ContentWrapper";
import Img from "../../../components/footer/lazyloadimg/Img";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    console.log(event.key);
    if (query.length > 0 && event.key === "Enter") {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        <Img src={background} />
      </div>
      <ContentWrapper>
        <div className="heroBannercontent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of Movies, TV shows and People to Discover Explore Now
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a Movie or TV show..."
              onKeyUp={searchQueryHandler}
              onChange={(event) => setQuery(event.target.value)}
            ></input>
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
