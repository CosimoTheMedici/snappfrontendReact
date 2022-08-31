import axios from "axios";

const ServiceBaseURL = 'http://localhost:5000'
export function fetchTopMovieData() {
    return axios.get(`${ServiceBaseURL}/movies`,
    {
      headers: { 
        Authorization: "",
        'Content-Type': 'application/json'
     },
    });
  }

export function fetchAllMoviesData(pageNum,limit) {
    return axios.get(`${ServiceBaseURL}/movies/paginator/page=${pageNum}&limit=${limit}`,
    {
      headers: { 
        Authorization: "",
        'Content-Type': 'application/json'
     },
    });
  }
