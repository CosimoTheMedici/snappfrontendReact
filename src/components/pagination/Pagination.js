import React from 'react'
import ReactPaginate from 'react-paginate'

import './pagination.scss'
const Pagination = () => {
  const handlePageClick = (data) => {
    console.log(data.selected);

  }
  return (
    <ReactPaginate 
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
      pageCount={15}
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
  )
}

export default Pagination

