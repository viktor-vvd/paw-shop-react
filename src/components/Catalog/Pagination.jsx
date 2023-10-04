import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({
  setCurrentPage = () => {},
  pageCount,
  forcePage = 1,
  onPageChange = () => {},
}) => {
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        nextLabel=""
        forcePage={forcePage - 1}
        onPageChange={(event) => {onPageChange(event.selected + 1)}}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel=""
        pageClassName="container-horisontal"
        pageLinkClassName="subtitle pagination__item__link pagination__item"
        previousClassName="pagination__button"
        previousLinkClassName="subtitle pagination__button__link pagination__button__link_previous"
        nextClassName="pagination__button"
        nextLinkClassName="subtitle pagination__button__link"
        breakLabel="..."
        breakClassName="container-horisontal pagination__item"
        breakLinkClassName="subtitle pagination__item__link"
        containerClassName="container-horisontal pagination"
        activeClassName="pagination__item_active"
        disabledClassName="pagination__button_disabled"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
