import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useEffect, useState } from "react";
import axios from "axios";
// import "../styles/offSwiper.css";
import { useNavigate } from "react-router-dom";
import { WiLightning } from "react-icons/wi";
import Card from "./Card";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SliderOff from "./SliderOff";

// import Carousel from 'carousel-react-rcdev'
function OffSwiper() {
  const [offCards, setOffCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const URL = "http://localhost:3001/";
  const navigate = useNavigate();

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
    axios.get(`${URL}category`).then((res) => {
      setCategories(res.data);
    });
  };
  const persianNumber = (x) => {
    return x.toLocaleString("fa-IR");
  };

  return (
    <div className="flex ">
      <div className="border rounded-r-full bg-[#013662] text-[#FFCAAA]  text-4xl font-bold flex flex-col items-center justify-center w-52 h-96 mr-5 ">
        <span> پیشنهاد های </span>
        <span> ویژه </span>
        <WiLightning />
      </div>
  {/* <SliderOff offCards={offCards} categories={categories} navigate={navigate} /> */}
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
          if (item.off !== "0") {
            return (
              <>
                {categories.map((cate) => {
                  if (item.category == cate.id) {
                    return (
                      <SwiperSlide
                        onClick={() => navigate(`/${cate.name}/${item.id}`)}
                      >
                         
                        <div className="bg-white h-[380px]">
                        <img className="h-[190px] w-[190px]" src={`http://localhost:3001/files/${item.thumbnail}`} />
                        <div className="h-[190px] z-10 mt-36 bg-[#ffcaaa] "></div>
                        </div> 
                      </SwiperSlide>
                    );
                  }
                })}
              </>
            );
          }
        })}
      </Swiper>

    </div>
  );
}

export default OffSwiper;







// <div className=" bg-white b-shadow ml-6 relative text-[#013662] rounded-xl h-[380px]!  mt-5">
//                           <img
//                             src={`http://localhost:3001/files/${item.thumbnail}`}
//                             className="mt-2 h-[50%]! mx-5 w-[80%]!"
//                           />
//                           <div className="bg-[#FFCAAA] h-[48%] rounded-b-xl hover:h-[52%] hover:w-[106%] hover:absolute hover:left-[-8px] rounded-tl-3xl inverted-border-radius">
//                             <p className="mt-3 pt-4 mr-2 text-lg font-semibold">
//                               {item.name}
//                             </p>
//                             <div>
//                               <div className="absolute bottom-20 line-through left-12">
//                                 {persianNumber(+item.Price)}
//                               </div>
//                               <p className="text-end ml-2 mt-6 absolute bottom-14 left-10 font-semibold">
//                                 {persianNumber(+(item.Price * item.off) / 100)}
//                               </p>
//                               <span className="text-end ml-2 mt-6 absolute bottom-16 left-0 font-semibold">
//                                 تومان
//                               </span>
//                             </div>
//                           </div>
//                         </div> 
