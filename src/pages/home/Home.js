import Slider from "../../Components/Swiper";
import axios from "axios";
import { useEffect, useState } from "react";
import OffSwiper from "../../Components/OffSwiper";
import Card from "../../Components/Card";
import { useNavigate, Outlet, Link } from "react-router-dom";
import {BsBoxArrowInLeft} from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import {
  setProduct, setSelectedCategory
} from "../../redux/productSlice";

function Home() {
  const URL = "http://localhost:3001/";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.productItem);
  const [categories, setCategories] = useState([]);
  let [cardCount, setCardCount] = useState(0);

  useEffect(() => {
    getCards();
  }, []);

  const getCards = () => {
    axios
      .get(`${URL}products`)
      .then((res) => {
        dispatch(setProduct(res.data))
      })
      .catch((err) => console.log("error:" + err));
    axios
      .get(`${URL}category`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log("error:" + err));
  };

  return (
    <div className="mt-44">
      <Slider />
      <OffSwiper />

      {categories.map((cate) => {
        cardCount = 0;
        return (
          <div className="grid grid-cols-4 gap-12 w-[100%] my-8">
            <Link
              to={cate.name}
              onClick={()=> dispatch(setSelectedCategory(cate.id))}
              className="h-[320px] ml-5 mt-7 text-3xl font-bold text-center"
            >
              <span className="text-[#013662] flex items-center justify-center"><span>{cate.name}</span>   <BsBoxArrowInLeft /></span>
              <img src={`http://localhost:3001/files/${cate.icon}`} className='mt-6 rounded-full w-64 h-64 shadow-md mr-[10%]' />
            </Link>

            {products.map((el) => {
              if (cate.id == el.category && cardCount <= 2) {
                cardCount++;
                return (
                  <Card
                    name={el.name}
                    id={el.id}
                    cate={cate.name}
                    price={el.Price}
                    photo={el.thumbnail}
                    off={el.off}
                  />
                );
              }
            })}
          </div>
        );
      })}
      <Outlet />
    </div>
  );
}

export default Home;
