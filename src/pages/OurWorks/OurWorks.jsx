import './OurWorks.css'
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
function OurWorks() {
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }
    return (  
        <div className="our__works">
            <div id='up'></div>
            <div className="works__links">
                <a href="#eks">Экстерьер</a>
                <a href="#int">Интерьер</a>
                <a href="#3d">3D модели</a>
                <a href="#web">Web - Дизайн</a>
                <a onClick={scrollTop}>Наверх</a>
            </div>
            <h1>Наши работы</h1>
            <div className="works">
                <motion.section
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount:  0.5 }} 
                    className='into__works'
                >
                    <motion.h2 custom={1} variants={blockAnimation} className="works__unit" id="eks">Экстерьер</motion.h2>
                    <motion.img custom={2} variants={blockAnimation} className="works__img" src="./img/eks.jpg" alt="" />
                </motion.section>
                <motion.section
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount:  0.5 }} 
                    className='into__works'
                >
                    <motion.h2 custom={1} variants={blockAnimation} className="works__unit" id="int">Интерьер</motion.h2>
                    <motion.img custom={2} variants={blockAnimation} className="works__img" src="./img/int.jpg" alt="" />
                </motion.section>
                <motion.section
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount:  0.5 }}
                    className='into__works'
                >
                    <motion.h2 custom={1} variants={blockAnimation} className="works__unit" id="3d">3D модели</motion.h2>
                    <motion.img custom={2} variants={blockAnimation} className="works__img" src="./img/3d.jpg" alt="" />
                </motion.section>
                <motion.section
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount:  0.5 }}
                    className='into__works'
                >
                    <motion.h2 custom={1} variants={blockAnimation} className="works__unit" id="web">Web - Дизайн</motion.h2>
                    <motion.img custom={2} variants={blockAnimation} className="works__img" src="./img/image.png" alt="" />
                </motion.section>
            </div>
        </div>
    );
}

export default OurWorks;