import Slider from "../Components/Swiper";
import axios from "axios";
import { useEffect, useState } from "react";
import OffSwiper from "../Components/OffSwiper";
import Card from '../Components/Card'

function Home() {
    const URL = "http://localhost:3001/";
    const [safetyCards, setSafetyCards]=useState([]);
    const [categories, setCategories]= useState([]);

    useEffect(()=>{
        getSafety()
    },[])

    const getSafety=()=>{
         axios
        .get(`${URL}products`)
        .then((res) => {
          setSafetyCards(res.data)
        })
        .catch((err) => console.log("error:" + err));
        axios
        .get(`${URL}category`)
        .then((res) => {
          setCategories(res.data)
        })
        .catch((err) => console.log("error:" + err));
    }


    return ( 
    <div className="mt-64">
       
            <Slider/>
            <OffSwiper />
            
            {categories.map((cate)=>{
                return(
                <div className="flex w-[100%] my-4">
               <div className="border w-[20%] h-[320px] ml-5 text-2xl font-bold text-center"> {cate.name} </div> 
              
                {safetyCards.map((el)=>{
                    
                    if(cate.id == el.category){
                        return(
                            <Card name={el.name} price={el.Price} photo={el.thumbnail} off={el.off} />
                        )
                    }
               })} 
               
            </div>
                )
            })}
            
    </div>
     );
}

export default Home; 