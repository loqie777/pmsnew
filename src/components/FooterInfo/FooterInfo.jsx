import React from "react";
import st from './FooterInfo.module.scss';


const FooterInfo = () => {
    return(
        <div className={st.container}>
            <div className={st.block1}>
                <span className={st.text}>Адрес: 225370, г. Ляховичи, ул. Трудовая, 13</span>
                <span className={st.text}>Контактный номер: <a className={st.link} href="tel:+375163321539">+375 (1633) 2 15 39</a></span>
                <span className={st.text}>E-mail: pr@pmslhv.brest.by</span>
            </div>
            <div className={st.block2}>
                <span className={st.text}>Приём граждан:</span>
                <span className={st.text}>директор УП "Ляховичское ПМС": <br/>понедельник, 15:00 - 17:00</span>
                <span className={st.text}>заместитель директора УП "Ляховичское ПМС":<br/> пятница, 15:00 - 17:00</span>
            </div>
            <div className={st.block3}>
                <span className={st.text}>Режим работы:</span>
                <span className={st.text}>Начало работы: 8:00</span>
                <span className={st.text}>Обеденный перерыв: 12:00 - 13:00</span>
                <span className={st.text}>Окончание работы: 17:00</span>
                <span className={st.text}>Выходные дни: суббота, воскресенье.</span>
            </div>
        </div>
    )
}


export default FooterInfo;