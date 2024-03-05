import { useState } from 'react';
import './Application.css'
import { postApplicationSchema } from './validation';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {motion} from 'framer-motion'
function Application({blockAnimation}) {
    const [myResponse, setMyResponse] = useState()
    const {register, handleSubmit, reset, formState: {errors}} = useForm({resolver:yupResolver(postApplicationSchema)})
    const onSubmit = (data) => {
        const dataToBackend = {
            name: data.name,
            phoneNumber: data.phoneNumber,
            comment: data.comment
        }
        fetch('https://animechan.xyz/api/random')
            .then(response => response.json())
            .then(data => {
                console.log('Данные отправлены и получены')
                console.log(dataToBackend)
                console.log(data)
                localStorage.setItem('dataToBackend', JSON.stringify(dataToBackend))
                localStorage.setItem('responseFromBackend', JSON.stringify(data))
                setMyResponse(data)
            })
        
    }
    const handleStatusClick = (e) => {
        e.preventDefault()
        setMyResponse('')
        reset()
    }
    return (  
        <div className="main__application">
            <div className="application__parts">
                <motion.section
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.5 }} className="application__head">
                    <motion.h2 custom={1} variants={blockAnimation}>Оставить заявку</motion.h2>
                    <motion.h3 custom={2} variants={blockAnimation}>Заполните форму и наши сотрудники свяжутся с вами для консультации</motion.h3>
                </motion.section>
                <form onSubmit={handleSubmit(onSubmit)} className='application_foot' >
                    <motion.section
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.5 }} className="application__foot_up">
                        <div className="application__inputs">
                            <div className="application__inputs__left">
                                <motion.div custom={3} variants={blockAnimation} className="application__input">
                                    <p>{errors.name?.message}</p>       
                                    <input {...register('name')} className={errors.phoneNumber?.message ? 'error__mess' : ''} type="text" placeholder="Ваше имя" />
                                </motion.div>
                                <motion.div custom={4} variants={blockAnimation} className="application__input">
                                    <p>{errors.phoneNumber?.message}</p> 
                                    <input {...register('phoneNumber')} className={errors.phoneNumber?.message ? 'error__mess' : ''} type="text" placeholder="Номер телефона" />
                                </motion.div>
                            </div>
                            <motion.textarea custom={5} variants={blockAnimation} {...register('comment')} className='application__textarea' placeholder="Комментарий к проекту"/>
                        </div>
                        <motion.div custom={6} variants={blockAnimation} className="application__button">
                            {myResponse ? 
                                <button onClick={(e) => handleStatusClick(e)} className='app__button__done'>
                                    Заявка принята
                                    <div className='done__img'></div>
                                </button>
                                :
                                <>
                                    <button className='app__button__submit' type="submit">Отправить заявку</button>
                                    <p>Я даю согласие, что студия Visual Space собирает и хранит личные данные, указанные в этой контактной форме.</p>
                                </>    
                            }
                            
                        </motion.div>
                    </motion.section>
                    <motion.section
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.5 }} className="application__footer">
                        <motion.div custom={6} variants={blockAnimation} className="application_contacts">
                            <span><strong>Адрес:</strong> Ул. Адрес студии д.1</span>
                            <span><strong>Номер телефона:</strong> +7 937 586 11 37</span>
                        </motion.div>
                        <motion.div custom={6} variants={blockAnimation} className="application__social__media">
                            <p>Соцсети:</p>
                            <div className="soc__icons">
                                <a href="#"><img src="./img/Telegram.svg" alt="Telegram" /></a>
                                <a href="#"><img src="./img/Whatsapp.svg" alt="Whatsapp" /></a>
                            </div>
                        </motion.div>
                    </motion.section>
                </form>
            </div>
        </div>
    );
}

export default Application;