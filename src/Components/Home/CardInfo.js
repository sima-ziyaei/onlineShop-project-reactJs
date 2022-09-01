import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/card.css";

function CardInfo() {
  const { id } = useParams();
  const URL = "http://localhost:3001/";
  const [card, setCard] = useState([]);
  const navigate= useNavigate()

  useEffect(() => {
    getCard();
  }, []);

  const getCard = () => {
    axios
      .get(`${URL}products?id=${id}`)
      .then((res) => {
        setCard(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("error:" + err));
  };

  const persianNumber = (x) => {
    return x.toLocaleString("fa-IR");
  };

  return (
    <div className="mt-64 mb-36">
      {card.map((el) => {
        return (
          <div>
            <div className="grid grid-cols-3 gap-6 mr-10">
              <img
                src={`http://localhost:3001/files/${el.thumbnail}`}
                className="b-shadow h-[300px] rounded-lg hover:w-[130%] hover:h-[360px]"
              />
              <div className="flex flex-col justify-around items-start ">
                <p className="text-[#013662] text-2xl font-bold ">
                  
                  {el.name}
                </p>
                <button className="border-2 border-[#013662] text-[#013662] rounded-lg p-3 text-xl hover:text-white hover:bg-[#013662] hover:scale-[0.9] ">
                  
                  اضافه کردن به سبد خرید
                </button>
              </div>
              <div className="inverted-border-radius-tow text-2xl relative flex flex-col justify-center items-center bg-[#FFCAAA] h-[200px] ml-[8%] rounded-3xl rounded-tr-none  text-[#013662]">
                {el.off == "0"  ? (
                  <div className="flex flex-col">
                    <p className=" "> { persianNumber(+el.Price)} تومان </p>
                    {el.stock>3 ? <p className= " mt-5">
                     
                     {persianNumber(+el.stock)} عدد باقی مانده
                   </p> : <p className= " mt-5 text-red-600">
                    
                    تنها {persianNumber(+el.stock)} عدد باقی مانده
                  </p>}
                  </div>
                ) : (
                  <div className="flex relative flex-col">
                    <div className="mt-10">
                      <div className="absolute bottom-20 line-through left-16">
                        {persianNumber(+el.Price)}
                      </div>
                      <p className="text-end ml-2 mt-6 absolute bottom-14 left-14 font-semibold">
                        {persianNumber((el.Price * el.off) / 100)}
                      </p>
                      <span className="text-end ml-2 mt-6 absolute bottom-16 left-0 font-semibold">
                        تومان
                      </span>
                    </div>
                    {el.stock>3 ? <p className= " mt-5">
                     
                      {persianNumber(+el.stock)} عدد باقی مانده
                    </p> : <p className= " mt-5 text-red-600">
                     
                     تنها {persianNumber(+el.stock)} عدد باقی مانده
                   </p>}
                   
                  </div>
                )}
              </div>
            </div>
            <div className="inner-box bg-transparent w-[70%] mt-12 mr-[15%] text-[#013662] text-lg"> {el.information} </div>
            
            <div className="w-[300px] h-[300px] z-[-1] rounded-full bg-[#FFCAAA] absolute top-[38%] left-[60%]"></div>
            <div className="w-[100px] h-[100px] z-[-1] rounded-full bg-[#FFA5A4] absolute top-[68%] left-[60%]"></div>
            <div className="w-[300px] h-[300px] z-[-1] rounded-full bg-[#FFCAAA] absolute top-[95%] left-[15%]"></div>
          </div>
        );
      })}
      <button onClick={()=>navigate('/')} className=' bg-[#013662] text-[#FFCAAA] p-3 bottom-1 h-10 text-center rounded-xl text-lg font-semibold mr-[88%] mt-12 w-24 pt-2'> بازگشت  </button>
    </div>
  );
}

export default CardInfo;
