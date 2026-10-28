import React from "react";
import st from './Pagination.module.scss';

const Pagination = ({totalPosts,PostsPerPage, setCurrentPage,currentPage}) => {
    let pages = [];

    for(let i  = 1; i <= Math.ceil(totalPosts/PostsPerPage); i++){
        pages.push(i);
    }

    return(
        <div className={st.container}>
            {pages.map((page, index) => {
                return <button key={index} onClick={() => {setCurrentPage(page);window.scroll({ top: 0, behavior: 'smooth' })}} className={page == currentPage ? st.btnactive : st.btn}>{page}</button>
            })}
        </div>
    )
}


export default Pagination;