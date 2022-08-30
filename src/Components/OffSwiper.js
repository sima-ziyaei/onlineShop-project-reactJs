import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/offSwiper.css";
import { useNavigate } from "react-router-dom";

function OffSwiper() {
  const [offCards, setOffCards] = useState([]);
  const [categories, setCategories]= useState([]);
  const URL = "http://localhost:3001/";
  const navigate= useNavigate();

  useEffect(() => {
    getOffCards();
  }, []);

  const getOffCards = () => {
    axios
      .get(`${URL}products`)
      .then((res) => {
        setOffCards(res.data);
      })
      .catch((err) => console.log("error:" + err));
      axios
        .get(`${URL}category`)
        .then((res) => {
          setCategories(res.data);
        })
  };

  return (
    <div className="flex">
    <div className="border ">
        پیشنهاد های شگفت انگیز
    </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >


        {offCards.map((item) => {
            if(item.off !== '0'){
              
          return (
            <div>
            {categories.map((cate)=>{
              if(item.category == cate.id){
              return(
                <SwiperSlide  onClick={()=> navigate(`/${cate.name}/${item.id}`)} className="border flex flex-col">
              <img src={`http://localhost:3001/files/${item.thumbnail}`} />
               <p> {item.name} </p>
                                <p> {item.Price} </p>
                               
            </SwiperSlide>
              )}
            })}
            </div>
          );
       } })}
      </Swiper>
    </div>
  );
}

export default OffSwiper;
