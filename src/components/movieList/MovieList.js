import React,{useEffect,useState} from 'react'
import ReactPaginate from 'react-paginate'
import {  MovieCard1 } from '../movieCard/MovieCard'
import Pagination from '../pagination/Pagination'
import { fetchAllMoviesData } from '../services/Services'
import { MovieData } from './MovieData'

import './movieList.scss'
const MovieList = () => {
    const [movieData, setMovieData] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const [limit, setLimit] = useState(9)
    useEffect(() => {
        getMovieListData(pageNum,limit)
      }, [])

      const getMovieListData = async (pageNum,limit) => {
        try {
          const getmoviesData = await fetchAllMoviesData(pageNum,limit);
          const total = getmoviesData.headers;
          console.log(total)
          setMovieData(getmoviesData.data);
        } catch (ex) {
          console.log(ex, "ex");
         
        }
      };
      const handlePageClick = (data) => {
        console.log(data.selected);
        let page = data.selected +1;
        getMovieListData(page,limit)
    
      }
  return (
    <>
    <section className='section_movielist'>
        <div className='title_heading'><span >Movie information hub</span></div>
        <div className='section_movielist-movies'>
            {
                (
                    movieData.map(data => (
                               
                      <MovieCard1 data={data} key={data.ID} />

                    ))
                )
            } 

        </div>
    </section>
    <ReactPaginate 
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
      pageCount={11}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={'pagination justify-content-center text-color'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}
    />
    </>
  )
}

export default MovieList