import React, { useState } from "react";
import st from './WholeNews.module.scss';
import NewsMainCard from "../../components/NewsMainCard/NewsMainCard";
import arr from '../../consts/wholenews.js'
import Pagination from "../Pagination/Pagination.jsx";

const WholeNews = () => {
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage, setPostspPerPage] = useState(10);
    const lastPageIndex = currentPage * postsPerPage;
    const firstPageIndex = lastPageIndex - postsPerPage;
    const posts = arr.slice(firstPageIndex,lastPageIndex);


    return(
        <div className={st.container}>
            {posts.map((el) => <NewsMainCard img={el.img} text={el.text} title={el.title} date={el.date}/>)}
            <Pagination totalPosts={arr.length} PostsPerPage={postsPerPage} setCurrentPage= {setCurrentPage} currentPage= {currentPage}/>
        </div>
    )
}


export default WholeNews;