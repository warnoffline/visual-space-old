import './Footer.css'
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';
function Footer() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    return (  
        <div className="main__footer">
            <div className="footer">
                <div className="footer__column">
                    <div className="footer__img"><img src="./img/LogoLight.svg" alt="" /></div>
                    <p className='agree'>
                        © Visual Space 2023. Использование сайта, в том числе подача объявлений, означает согласие с <a className='agree' href="#" >пользовательским соглашением</a>
                    </p>
                </div>
                <div className="footer__column">
                    <Link className='foot__head__link' to='/about'>О нас</Link>
                    <Link className='foot__head__link' to='/works'>Наши работы</Link>
                    <HashLink className='foot__link' to='/works#eks'>Экстерьер</HashLink>
                    <HashLink className='foot__link' to='/works#int'>Интерьер</HashLink>
                    <HashLink className='foot__link' to='/works#3d'>3D модели</HashLink>
                    <HashLink className='foot__link' to='/works#web'>Web - Дизайн</HashLink>
                </div>
                <div className="footer__column">
                    <h4 className='foot__head'>Услуги</h4>
                    <Link className='foot__link' to='/'>Архитектурная визуализация</Link>
                    <Link className='foot__link' to='/intvisual'>Визуализация интерьера</Link>
                    <Link className='foot__link' to='/modeling'>3D моделирование</Link>
                    <Link className='foot__link' to='/design'>Web - дизайн</Link>
                </div>
                <div className="footer__column">
                    <p className='foot__head'>Контакты</p>
                    <span>+7 937 586 11 37</span>
                    <span>E - mail</span>
                    <div className="footer__icons">
                        <a href="#"><img src="../img/LTelegram.png" alt="Telegram" /></a>
                        <a href="#"><img src="../img/LWhatsapp.png" alt="Whatsapp" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;