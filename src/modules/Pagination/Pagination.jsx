import React from "react";
import st from './Pagination.module.scss';

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);


  if (totalPages <= 1) return null;

  const getPagesRange = () => {
    const pages = [];
    const siblingCount = 1;


    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;


    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      for (let i = 1; i <= leftItemCount; i++) pages.push(i);
      pages.push("...");
      pages.push(totalPages);
    } 

    else if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      pages.push(1);
      pages.push("...");
      for (let i = totalPages - rightItemCount + 1; i <= totalPages; i++) pages.push(i);
    } 
  
    else if (shouldShowLeftDots && shouldShowRightDots) {
      pages.push(1);
      pages.push("...");
      for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) pages.push(i);
      pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPagesRange();

  return (
    <div className={st.container}>

      <button 
        disabled={currentPage === 1}
        onClick={() => { setCurrentPage(currentPage - 1); window.scroll({ top: 0, behavior: 'smooth' }); }}
        className={st.btn}
      >
        {"<"}
      </button>


      {pages.map((page, index) => {
        if (page === "...") {
          return <span key={`dots-${index}`} className={st.dots}>...</span>;
        }

        return (
          <button
            key={page}
            onClick={() => { setCurrentPage(page); window.scroll({ top: 0, behavior: 'smooth' }); }}
            className={page === currentPage ? st.btnactive : st.btn}
          >
            {page}
          </button>
        );
      })}


      <button 
        disabled={currentPage === totalPages}
        onClick={() => { setCurrentPage(currentPage + 1); window.scroll({ top: 0, behavior: 'smooth' }); }}
        className={st.btn}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
