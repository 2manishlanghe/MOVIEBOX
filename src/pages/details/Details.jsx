import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/UseFetch";
import "./style.scss";
import DetailsBanner from "./detailBanner/DetailBanner";
import Cast from "../../components/cast/Cast";
import VideosSection from "../../components/videoSection/Videosection";
import Similar from "./carousel/Similar";
import Recommendation from "./carousel/Recomendation";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);

  const { data: credits, loading: creditsloading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      DETAILS
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.Cast} loading={creditsloading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
