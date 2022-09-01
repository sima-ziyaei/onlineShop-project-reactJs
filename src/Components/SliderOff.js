import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SliderOff({offCards, categories, navigate}) {
    const persianNumber = (x) => {
        return x.toLocaleString("fa-IR");
      };
    return ( 
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
               <SwiperSlide
                        onClick={() => navigate(`/${item.id}`)}
                      >
                {categories.map((cate) => {
                  if (item.category == cate.id){ 
                     
                   
                         
                        <div className=" bg-white b-shadow ml-6 relative text-[#013662] rounded-xl h-[380px]!  mt-5">
                          <img
                            src={`http://localhost:3001/files/${item.thumbnail}`}
                            className="mt-2 h-[50%]! mx-5 w-[80%]!"
                          />
                          <div className="bg-[#FFCAAA] h-[48%] rounded-b-xl hover:h-[52%] hover:w-[106%] hover:absolute hover:left-[-8px] rounded-tl-3xl inverted-border-radius">
                            <p className="mt-3 pt-4 mr-2 text-lg font-semibold">
                              {item.name}
                            </p>
                            <div>
                              <div className="absolute bottom-20 line-through left-12">
                                {persianNumber(+item.Price)}
                              </div>
                              <p className="text-end ml-2 mt-6 absolute bottom-14 left-10 font-semibold">
                                {persianNumber(+(item.Price * item.off) / 100)}
                              </p>
                              <span className="text-end ml-2 mt-6 absolute bottom-16 left-0 font-semibold">
                                تومان
                              </span>
                            </div>
                          </div>
                        </div>
                    }
                    
                
            })}
            </SwiperSlide>
              
            );
          }
        })}
      </Swiper> );
}
export default SliderOff;