import React from "react";
import st from './IdeologCard.module.scss';

const IdeologCard = ({img,title,text,date}) => {
    return(
        <div className={st.block}>
                    <hr />
                        <div className={st.container}>
                        <img src={`/img/${img}`} className={st.img} />
                        <div className={st.textContainer}>
                            <div>
                            <span className={st.title}>{title}</span>
                            <p className={st.text}>{text}</p>
                            </div>
                        <span className={st.date}>{date}</span>
                        </div>
                    </div>
                </div>
    )
}

export default IdeologCard;