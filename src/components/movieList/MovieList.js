import React,{useEffect,useState} from 'react'
import ReactPaginate from 'react-paginate'
import {  MovieCard1 } from '../movieCard/MovieCard'
import Pagination from '../pagination/Pagination'
import { fetchAllMoviesData, fetchMoviesDataSearch } from '../services/Services'
import { MovieData } from './MovieData'

import './movieList.scss'
const MovieList = () => {
    const [movieData, setMovieData] = useState([])
    const [wholeMovieData, setWholeMovieData] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const [limit, setLimit] = useState(9)
    const [pageCount, setPageCount] = useState(11)
    const [pager, setPager] = useState(false)
    useEffect(() => {
        getMovieListData(pageNum,limit)
      }, [])

      const getMovieListData = async (pageNum,limit) => {
        try {
          const getmoviesData = await fetchAllMoviesData(pageNum,limit);
          setMovieData(getmoviesData.data);
          console.log("pager1",pager);
        } catch (ex) {
          console.log(ex, "ex");
         
        }
      };
      const getMovieListSerchData = async (movietitle) => {
        try {
            console.log("pager2",pager)
            console.log("movietitle",movietitle.length)
            const me = movietitle.length === 0 ? setPager(false):setPager(true);
            let getmoviesData = movietitle !=="" || movietitle !==undefined ||movietitle.length !== 0 ?
           await fetchMoviesDataSearch(movietitle)
          : getMovieListData(pageNum,limit)
          console.log("pager2",pager)
          setWholeMovieData(getmoviesData.data)
          pagedata(pageNum,limit)
          setPageCount(getmoviesData.data.length/9)
          console.log("getmoviesData",getmoviesData)

          //setMovieData(getmoviesData.data);
        } catch (ex) {
          console.log(ex, "ex");
         
        }
      };
      const handlePageClick = (data) => {
        console.log(data.selected);
        let page = data.selected +1;
        pager ===true ?pagedata(page,9):getMovieListData(page,limit);
        console.log("pager",pager)
        
    
      }

      const pagedata = (page,limit) => {

           const startIndex = (page - 1) * limit
           const endIndex = page * limit
           setMovieData(wholeMovieData.slice(startIndex,endIndex))
        
    
      }
  return (
    <>
    
        <input className='input-tag' type="text" onKeyUp={(e) => getMovieListSerchData(e.target.value)} />
  
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
      pageCount={pageCount}
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