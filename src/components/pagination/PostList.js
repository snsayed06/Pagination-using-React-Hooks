import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='d-flex justify-content-center'>
      <ul className='pagination'>
        {currentPage === 1 ? null : (
          <>
            <li onClick={() => setCurrentPage(1)} className='page-link'>
              <i class='fas fa-angle-double-left'></i>
            </li>
            <li
              onClick={() => setCurrentPage(currentPage - 1)}
              className='page-link disabled'
            >
              <i class='fas fa-chevron-left'></i>
            </li>
          </>
        )}

        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='/#' className='page-link'>
              {number}
            </a>
          </li>
        ))}

        {Math.floor(totalPosts / postsPerPage) === currentPage ? null : (
          <>
            <li
              onClick={() => setCurrentPage(currentPage + 1)}
              className='page-link'
            >
              <i class='fas fa-chevron-right'></i>
            </li>
            <li
              onClick={() =>
                setCurrentPage(Math.floor(totalPosts / postsPerPage))
              }
              className='page-link'
            >
              <i class='fas fa-angle-double-right'></i>
            </li>
          </>
        )}

        {/* <a
          onClick={() => setCurrentPage(currentPage + 1)}
          href='/#'
          className='page-link'
        >
          <i class='fas fa-chevron-right'></i>
        </a>
        <a
          onClick={() => setCurrentPage(Math.floor(totalPosts / postsPerPage))}
          href='/#'
          className='page-link'
        >
          <i class='fas fa-angle-double-right'></i>
        </a> */}
      </ul>
    </nav>
  );
};

export default Pagination;
