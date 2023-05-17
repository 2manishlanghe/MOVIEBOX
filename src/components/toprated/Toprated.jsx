import { React, useState } from "react";
import ContentWrapper from "../contentwrapper/ContentWrapper";
import SwitchTabs from "../../pages/home/switchtabs/SwitchTabs";
import useFetch from "../../hooks/UseFetch";
import Carousel from "../../pages/home/carousel/Carousel";

const Toprated = () => {
  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endPoint}/top_rated`);
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
        <Carousel data={data?.results} loading={loading} endpoint={endPoint} />
      </ContentWrapper>
    </div>
  );
};

export default Toprated;
