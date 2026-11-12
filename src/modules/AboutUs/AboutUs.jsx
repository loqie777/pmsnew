import React from "react";
import st from './AboutUs.module.scss';
import { motion } from "framer-motion";
import CountUp from "react-countup"; // Библиотека для бегущих цифр
import { useInView } from "react-intersection-observer"; // Хук отслеживания скролла

const AboutUs = ({ id }) => {

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,
  });

  return (
    <motion.div 
      className={st.container} 
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >

      <div className={st.textContainer}>
        <span className={st.subTitle}>О ПРЕДПРИЯТИИ</span>
        <h2 className={st.title}>УП "Ляховичское ПМС"</h2>
        <p className={st.text}>
          Современное высокотехнологичное предприятие, обеспечивающее 
          плановый ремонт и техническое обслуживание сложных мелиоративных 
          систем и гидросооружений.
        </p>

    
        <div className={st.statsContainer} ref={ref}>
          <div className={st.statItem}>
            <div className={st.number}>
              {inView ? (
                <CountUp 
                  start={0} 
                  end={1309} 
                  duration={2.5} 
                  separator=" " 
                  suffix=" км" 
                />
              ) : (
                "0 км"
              )}
            </div>
            <div className={st.label}>Каналов на обслуживании</div>
          </div>
          
          <div className={st.statItem}>
            <div className={st.number}>
              {inView ? (
                <CountUp 
                  start={0} 
                  end={878} 
                  duration={2.5} 
                  separator=" " 
                />
              ) : (
                "0"
              )}
            </div>
            <div className={st.label}>Гидросооружений эксплуатируется</div>
          </div>
        </div>
      </div>

  
      <div className={st.directorCard}>
        <div className={st.imgWrapper}>
          <img src="/img/aboutus.jpg" alt="Юшкевич Сергей Викентьевич" className={st.img} />
        </div>
        <div className={st.cardFooter}>
          <div className={st.name}>Юшкевич Сергей Викентьевич</div>
          <div className={st.position}>Директор предприятия</div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutUs;
