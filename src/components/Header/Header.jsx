import { useState } from 'react';
import './Header.css'
import { Link,  useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
function Header() {
    const [mouseOn, setMouseOn] = useState()
    const location = useLocation();  
    return (  
        <header className="head">
            <div className="header">
                <div className="head__frame">
                    <div className='head__img'>
                        <img src="./img/Logo.svg" alt="" onTouchStart={() => setMouseOn(false)}/>
                    </div>
                    <div className='head__links'>
                        <Link className={`head__link ${location.pathname == '/about' ? 'active_link' : ''}`} to='/about'>О нас</Link>
                        <Link className={`head__link ${location.pathname == '/' 
                            || location.pathname == '/intvisual' 
                            || location.pathname == '/modeling'
                            || location.pathname == '/design'
                            ? 'active_link' : ''}`} onMouseEnter={() => setMouseOn(true)} onTouchStart={() => setMouseOn(!mouseOn)}>Услуги</Link>
                        <Link className={`head__link ${location.pathname == '/works' ? 'active_link' : ''}`} to={'/works'}>Наши работы</Link>
                    </div>
                    <HashLink className='head__btn__link' smooth to='/#application'><button className='head__button'>Оставить заявку</button></HashLink>
                </div>
            </div>
            {mouseOn && <div class="dropdown-content" onMouseLeave={() => setMouseOn(false)}>
                    <div className='services__links'> 
                        <Link className={`services__link ${location.pathname == '/' ? 'active_link' : ''}`} to={'/'}>Архитектурная визуализация</Link>
                        <Link className={`services__link ${location.pathname == '/intvisual' ? 'active_link' : ''}`} to='/intvisual'>Визуализация интерьера</Link>
                        <Link className={`services__link ${location.pathname == '/modeling' ? 'active_link' : ''}`} to='/modeling'>3D моделирование</Link>
                        <Link className={`services__link ${location.pathname == '/design' ? 'active_link' : ''}`} to='/design'>Web - дизайн</Link>
                    </div>
                </div>}
        </header>
    );
}

export default Header;