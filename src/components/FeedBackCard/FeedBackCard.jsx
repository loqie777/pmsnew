import React from "react";
import st from './FeedBackCard.module.scss';


const FeedBackCard = ({img,name,info}) => {
    return(
        <div className={st.container}>
            <img src={`/img/${img}`} className={st.img} />
            <span className={st.name}>{name}</span>
            <span className={st.info}>{info == '+375 (1633) 2 15 39' ? <a className={st.link} href={'tel:' + info}>{info}</a> : info}</span>
        </div>
    )
}


export default FeedBackCard;