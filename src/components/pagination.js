import React from "react";

const Pagination = ({ totalBooks, booksPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pages.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page, index) => {
          return (
            <li className="page-item" key={index}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
