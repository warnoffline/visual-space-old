import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules'

import './MainSwiper.css'
function MainSwiper() {
    return (  
        <div className="container">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    initialSlide={1} 
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{el: '.swiper-pagination', clickable:true}}
                    navigation={{
                        nextEl:'.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                        
                    }}
                    scrollbar={{ draggable: true }}
                    modules={[EffectCoverflow, Pagination,Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <img src="./img/Left.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="./img/Main.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  src="./img/Right.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./img/home.jpg" alt="" />
                    </SwiperSlide>
                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name='arrow-back-outline'></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name='arrow-forward-outline'></ion-icon>
                        </div>
                        <div className="swiper-pagination">
                        </div>
                    </div>

                </Swiper>
            </div>
    );
}

export default MainSwiper;