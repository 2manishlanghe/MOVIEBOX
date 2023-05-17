import React from "react";
import HeroBanner from "./herobanner/HeroBanner";
import Trending from "./trending/Trending";
import "./style.scss";
import Popular from "../../components/popular/popular";
import Toprated from "../../components/toprated/Toprated";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <Toprated />
    </div>
  );
};

export default Home;
