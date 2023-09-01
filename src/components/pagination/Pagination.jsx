/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import classes from "./Pagination.module.css";

const Pagination = ({ totalItems, currentPage, itemPerPage }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); ++i) {
    pages.push(i);
  }

  console.log(pages);

  return (
    <div className={classes.pagination}>
      {pages.map((page, index) => {
        console.log(page);
        return <button key={index}>{page}</button>;
      })}
    </div>
  );
};

export default Pagination;
