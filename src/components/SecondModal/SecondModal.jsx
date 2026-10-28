import React from "react";
import st from './SecondModal.module.scss';


const SecondModal = ({visible,setVisible}) => {
    return(
        <div className={visible ? st.containerActive : st.container} onClick={() => setVisible(!visible)}>
            <div onClick={(e) => e.stopPropagation()}>

            </div>
        </div>
    )
}


export default SecondModal;