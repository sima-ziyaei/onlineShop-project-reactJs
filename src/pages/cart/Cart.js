import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, reduceNumber, removeProduct, setTotalPrice } from "../../redux/cartSlice";
import { BsTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
//import { loadState, saveState } from '../../Components/Cart/LocalStorage'

function Cart() {
  const buyItems = useSelector((state) => state.cart.value);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  // const product = useSelector((state) => state.product.productItem);
  // const [totalPrice, setTotalPrice] = useState(0);
  let price = 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const persianNumber = (x) => x.toLocaleString("fa-IR");

 

  useEffect(() => {
    buyItems.map((el) => {
       price = price+ el.number * el.productInfo.Price
      dispatch(setTotalPrice( price));
    });
  }, [buyItems]);

  return (
    <div className="mt-64 mb-36 w-[100%] flex items-center justify-center">
      {buyItems.length !== 0 ? (
        <div className=" w-[100%]  flex flex-col items-center justify-center">
          <table className="border-2 border-[#013662] text-[#013662] mt-20 mb-10 w-[80%] text-start">
            <tr className=" bg-[#013662] text-white h-10">
              <th> حذف </th>
              <th> تصویر </th>
              <th> کالا </th>
              <th> قیمت </th>
              <th> تعداد </th>
              <th> قیمت نهایی </th>
            </tr>
            <tbody>
              {buyItems.map((el) => {
                return (
                  <tr className=" even:bg-[#ccc9eb]">
                    <td className="text-[#013662] cursor-pointer pr-2 text-center text-lg" onClick={() => dispatch(removeProduct(el.id))}>    
                      <BsTrashFill/>
                    </td>
                    <td className=" flex justify-center">
                      
                      <img
                        src={`http://localhost:3001/files/${el.productInfo.thumbnail}`}
                        className="w-8 h-8 rounded-full "
                      />
                    </td>
                    <td className="text-center"> {el.productInfo.name} </td>
                    <td className="text-center">
                      
                      {persianNumber(+el.productInfo.Price)}
                    </td>
                    <td className="text-center">
                      <span
                        onClick={() => dispatch(addNumber(el.id))}
                        className=" py-1 px-2 ml-2 text-lg cursor-pointer rounded-full w-[20px] h-[20px] bg-[#013662] text-white"
                      >
                        +
                      </span>
                      {persianNumber(el.number)}
                      <span
                        onClick={() => dispatch(reduceNumber(el.id))}
                        className=" py-1 px-3 mr-2 cursor-pointer rounded-full w-[20px] h-[20px] bg-[#013662] text-white text-lg"
                      >
                        -
                      </span>
                    </td>
                    <td className="text-center">
                      
                      {persianNumber(+el.number * el.productInfo.Price)}
                    </td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-around w-[100%] ">
            <div className="text-[#013662] text-3xl font-bold border-b-2 border-[#013662]"> جمع کل: {persianNumber(totalPrice)} تومان </div>
            <button onClick={()=> navigate('/cart/buy')} className=" text-white rounded-lg p-3 text-xl bg-[#013662] hover:scale-[0.9] ">
              
              ادامه فرآیند خرید
            </button>
            <button
              onClick={() => navigate("/")}
              className=" bg-[#013662] text-white p-3 bottom-1 h-10 text-center hover:scale-[0.9] rounded-lg text-xl font-bold w-24 pt-2"
            >
              بازگشت
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="w[100%] flex items-center justify-center font-extrabold text-[#013662] text-5xl ">
            
            سبد خرید شما خالی است !
          </div>
          <button
            onClick={() => navigate("/")}
            className=" bg-[#013662] text-white p-3 bottom-1 h-10 text-center hover:scale-[0.9] rounded-lg text-xl font-bold w-24 pt-2"
          >
            بازگشت
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
