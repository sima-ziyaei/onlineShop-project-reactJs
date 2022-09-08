import image from "../../assets/sepeh2.png";
import { useDispatch, useSelector } from "react-redux";
import { setSolution, setPurchases } from "../../redux/cartSlice";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CartPayment() {
  const URL = "http://localhost:3001/";
  const firstName = useSelector((state) => state.cart.firstName);
  const lastName = useSelector((state) => state.cart.lastName);
  const address = useSelector((state) => state.cart.address);
  const tel = useSelector((state) => state.cart.tel);
  const buyItems = useSelector((state) => state.cart.value);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [data, setData] = useState({});
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
   buyItems.map((el) => {
    setProduct((prev) => [...prev, { product: el.productInfo }]);
  });
    setData({
      username: firstName,
      lastName: lastName,
      address: address,
      phone: tel,
      expectAt: Date.now(),
      products: product,
      id: Date.now(),
      delivered: "false",
      createdAt: "",
      prices: totalPrice,
    });
  }, []);

  const sendOrder = () => {
   
    axios.post(`${URL}orders`, data).then(() => {
      setData({});
      dispatch(setSolution(true));
      navigate("/cart/buy/paymentsolution");
      setPurchases([]);
      window.localStorage.removeItem("REDUX_STATE");
    });
    console.log(product);
  };

  return (
    <div className="flex relative flex-col justify-center items-center w-[100%] mt-64 mb-36">
      <img src={image} />
      <div className="absolute bottom-[25px]">
        <button
          onClick={() => {
            console.log(product);
            dispatch(setSolution(false));
            navigate("/cart/buy/paymentsolution");
          }}
          className="bg-[#FCBF55] border-none w-[200px] h-[50px] text-[23px] text-white rounded-xl  cursor-pointer hover:scale-[0.9]"
        >
          {" "}
          انصراف{" "}
        </button>
        <button
          onClick={sendOrder}
          className="bg-[#0EC491] border-none w-[200px] h-[50px] text-[23px] text-white rounded-xl mr-7 cursor-pointer hover:scale-[0.9]"
        >
          {" "}
          پرداخت{" "}
        </button>
      </div>
    </div>
  );
}

export default CartPayment;
