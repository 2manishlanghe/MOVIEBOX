import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMB_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjFjNTc0MzI3ODFlZWZjNTRmMzU1ZDBiNjc3MGZhYSIsInN1YiI6IjY0NWM2OWQ5MDIzMWYyMDExYzAxNmE5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XjAbsS8ZdQmO161jwROC8S6_RCabonW7reugcLk_rCo`;
const headers = {
  Authorization: `bearer ${TMB_TOKEN}`,
};

export const FetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
