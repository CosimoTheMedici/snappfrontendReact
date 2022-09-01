import axios from "axios";

const ServiceBaseURL = 'https://snapp-backend-node.vercel.app'
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

export function fetchMoviesDataSearch(movietitle) {
    return axios.get(`${ServiceBaseURL}/movies/${movietitle}`,
    {
      headers: { 
        Authorization: "",
        'Content-Type': 'application/json'
     },
    });
  }
