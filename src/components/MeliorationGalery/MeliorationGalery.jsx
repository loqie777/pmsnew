import React, { useState } from "react";
import st from './MeliorationGalery.module.scss';
import arr from '../../consts/Meliorationconsts.js';
import { motion, AnimatePresence } from "framer-motion";

const MeliorationGalery = () => {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <>
      <div className={st.container}>
        {arr.map((el, index) => (
          <div 
            className={st.item} 
            key={index}
            onClick={() => setActiveImg(el)} 
          >
            <div className={st.imgWrapper}>
              <img src={`/img/${el}`} className={st.img} alt={`Работа ${index + 1}`} />
            </div>
            <div className={st.photoOverlay}>
              <span className={st.zoomIcon}>🔍 Увеличить фото</span>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeImg && (
          <motion.div 
            className={st.lightboxOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImg(null)} 
          >
   
            <button className={st.closeBtn} onClick={() => setActiveImg(null)}>✕</button>


            <motion.div 
              className={st.lightboxContent}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} 
            >
              <img src={`/img/${activeImg}`} className={st.lightboxImg} alt="Просмотр работы" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MeliorationGalery;
