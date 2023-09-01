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

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); ++i) {
    pages.push(i);
  }

  const setCurrentPageHandler = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={classes.pagination}>
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
    </div>
  );
};

export default Pagination;
