/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import classes from "./Pagination.module.css";

const Pagination = ({
  totalItems,
  currentPage,
  itemPerPage,
  setCurrentPage,
}) => {
  const pages = [];

  const totalPages = Math.ceil(totalItems / itemPerPage);
  // const totalPages = 6;

  const pageRange = 1;
  let nextPageStop;
  let seperatedLastPage;

  let prevPageStop;
  let seperatedPrevPage;

  if (currentPage + pageRange < totalPages) {
    nextPageStop = currentPage + pageRange;
    seperatedLastPage = true;
  } else {
    nextPageStop = totalPages;

    seperatedLastPage = false;
  }

  if (currentPage - pageRange > 1) {
    prevPageStop = currentPage - pageRange;
    seperatedPrevPage = true;
  } else {
    prevPageStop = 1;
    seperatedPrevPage = false;
  }

  if (currentPage === 1 && currentPage + (pageRange + 1) <= totalPages) {
    ++nextPageStop;
    seperatedLastPage = nextPageStop === totalPages ? false : true;
  }

  if (currentPage === totalPages && currentPage - (pageRange + 1) >= 1) {
    prevPageStop = currentPage - (pageRange + 1);
    seperatedPrevPage = prevPageStop === 1 ? false : true;
  }

  for (let i = prevPageStop; i <= nextPageStop; ++i) {
    pages.push(i);
  }

  const setCurrentPageHandler = (page) => {
    setCurrentPage(page);
  };

  // for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); ++i) {
  //   pages.push(i);
  // }

  const lastPageButton = (
    <button onClick={setCurrentPageHandler.bind(null, totalPages)}>
      {totalPages}
    </button>
  );

  const firstPageButton = (
    <button onClick={setCurrentPageHandler.bind(null, 1)}>{1}</button>
  );

  return (
    <div className={classes.pagination}>
      {seperatedPrevPage ? (
        <>
          {firstPageButton}
          <p>...</p>
        </>
      ) : null}
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className={page === currentPage ? classes.active : ""}
            onClick={setCurrentPageHandler.bind(null, page)}
          >
            {page}
          </button>
        );
      })}

      {seperatedLastPage ? (
        <>
          <p>...</p>
          {lastPageButton}
        </>
      ) : null}
    </div>
  );
};

export default Pagination;
