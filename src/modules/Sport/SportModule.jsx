import React, { useState } from "react";
import st from './SportModule.module.scss';
import NewsPageBlock from "../../components/NewsPageBlock/NewsPageBlock.jsx"; 
import arr from '../../consts/Sportconsts.js';
import Pagination from "../Pagination/Pagination.jsx";

const SportModule = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8); 

  const lastPageIndex = currentPage * postsPerPage;
  const firstPageIndex = lastPageIndex - postsPerPage;
  const posts = arr.slice(firstPageIndex, lastPageIndex);

  return (
    <div className={st.center}>
      <div className={st.titleWrapper}>
        <h1 className={st.title}>Спорт</h1>
        <div className={st.line}></div>
      </div>

      <div className={st.newsList}>
        {posts.map((el, index) => (
          <NewsPageBlock 
            key={index}
            img={el.img} 
            text={el.text} 
            title={el.title} 
            date={el.date}
          />
        ))}
      </div>


      <div className={st.paginationWrapper}>
        <Pagination 
          totalPosts={arr.length} 
          postsPerPage={postsPerPage} 
          setCurrentPage={setCurrentPage} 
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default SportModule;
