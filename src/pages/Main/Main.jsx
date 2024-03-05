import MainSwiper from "../../components/MainSwiper/MainSwiper";
import './Main.css'
import Application from "../../components/Application/Application";
import {motion} from 'framer-motion'
const blockAnimation = {
    hidden: {
        y: -10, 
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom*0.1},
    })
}
function Main() {
    return (  
        <div className="main">
            <MainSwiper blockAnimation={blockAnimation}></MainSwiper>
            <div className="main__info">
                    <div className="main__info__parts">
                    <motion.section
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount:  0.5 }}  className="main__info__part__one">
                        <motion.div custom={1} variants={blockAnimation} className="info__part__head"><h1>Для чего?</h1></motion.div>
                        <motion.div custom={2} variants={blockAnimation} className="info__part__text__first">
                            <p>
                                - презентовать проект <br />    
                                - привлечь новых клиентов <br />
                                - расширить сферу предоставляемых услуг <br />
                                - сэкономить время на этапе визуализации/ создании 3д модели <br />
                            </p>
                        </motion.div>
                    </motion.section>
                    <motion.section
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount:  0.5 }}  className="main__info__part__two">
                        <motion.div custom={2} variants={blockAnimation} className="info__part__text__second">
                            <p>
                                - архитекторы и дизайнеры <br />
                                - заказчики и потенциальные клиенты <br />
                                - риелторы и агенты по продаже недвижимости <br />
                                - строительные компании и подрядчики <br />
                            </p>
                        </motion.div>
                        <motion.div custom={1} variants={blockAnimation} className="info__part__head"><h1>Для кого?</h1></motion.div>
                    </motion.section>
                </div>
            </div>
            <div id="application"></div>
            <Application blockAnimation={blockAnimation}/>
        </div>
        
    );
}

export default Main;