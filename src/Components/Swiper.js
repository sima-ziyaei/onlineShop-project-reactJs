import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import '../styles/swiper.css'

function Slider() {
    return ( 
        <div className='my-40'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className=''>
        {/* <SwiperSlide><img src='http://localhost:3001/files/66562145720eaa11e9afd00ef6190f98 '/> </SwiperSlide> */}
        {/* <SwiperSlide><img src='http://localhost:3001/files/89fa9eb3fd9443e635a9cbf60093058a'/> </SwiperSlide> */}
        <SwiperSlide><img src='http://localhost:3001/files/ff9092bab61095e72a5f1b769c4479ac'/></SwiperSlide>
        <SwiperSlide><img src='http://localhost:3001/files/70d0407b30de66374a6d98ee08e05700'/></SwiperSlide>
        <SwiperSlide><img src='http://localhost:3001/files/cc2fa2e496ef8aeb231c04996356863c'/></SwiperSlide>
        <SwiperSlide><img src='http://localhost:3001/files/38c7c810b2a6212f98d25b3aa844b38d'/></SwiperSlide>
        </div>
      </Swiper>
    </div>
     );
}

export default Slider;