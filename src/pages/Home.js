import Slider from "../Components/Swiper";
import axios from "axios";
import { useEffect, useState } from "react";
import OffSwiper from "../Components/OffSwiper";
import Card from '../Components/Card';
import { useNavigate , Outlet, Link} from "react-router-dom";

function Home() {
    const URL = "http://localhost:3001/";
    const navigate = useNavigate();
    const [Cards, setCards]=useState([]);
    const [categories, setCategories]= useState([]);

    useEffect(()=>{
        getCards()
    },[])

    const getCards=()=>{
         axios
        .get(`${URL}products`)
        .then((res) => {
          setCards(res.data)
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
               <Link to={cate.name} className="border w-[20%] h-[320px] ml-5 text-2xl font-bold text-center"> {cate.name} </Link> 
              
                {Cards.map((el)=>{
                    
                    if(cate.id == el.category){
                        return(
                            <Card name={el.name} id={el.id} cate={cate.name} price={el.Price} photo={el.thumbnail} off={el.off} />
                        )
                    }
               })} 
               
            </div>
                )
            })}
           <Outlet /> 
    </div>
     );
}

export default Home; 