import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.scss";
import { FetchDataFromApi } from "../../Api";
import ContentWrapper from "../../components/contentwrapper/ContentWrapper";
import noResults from "../../assets/no-results.png";
import { useParams } from "react-router-dom";
import Spinner from "./spinner/Spinner";
import MovieCard from "./movieCard/MovieCard";

const Search_Result = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    FetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  };

  const fetchNextPageData = () => {
    setLoading(true);
    FetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          console.log(res);
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }

        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.results ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.lenght || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results?.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">! no Results</span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default Search_Result;
