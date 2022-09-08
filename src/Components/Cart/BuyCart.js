import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setAddress, setFirstName, setLastName, setTel} from '../../redux/cartSlice'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function BuyCart() {
//   const buyItems = useSelector((state) => state.cart.value);
//   const paymentUrl = "http://localhost:3002/";
const navigate= useNavigate();
  const firstName = useSelector(state=> state.cart.firstName)
  const lastName = useSelector(state=> state.cart.lastName)
  const address = useSelector(state=> state.cart.address)
  const tel = useSelector(state=> state.cart.tel);
  const dispatch = useDispatch();

  const handleFirstNameChange = (e) => {
    const {  value } = e.target;
    dispatch(setFirstName(value))
  }

  const handleLastNameChange = (e) => {
    const {  value } = e.target;
    dispatch(setLastName(value))
  }

  const handleAddressChange = (e) => {
    const {  value } = e.target;
    dispatch(setAddress(value))
  }

  const handleTelChange = (e) => {
    const {  value } = e.target;
    dispatch(setTel(value))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(firstName=== '' || lastName=== '' || address=== '' || tel=== ''){
      toast.error(" !همه ی اطلاعات را پر کنید ", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else{
        navigate('/cart/buy/payment')
    }
  }

  return (
    <div className="my-64 flex items-center justify-center">
      <form className="flex flex-col h-[500px] w-[600px] border-2 border-[#013662] rounded-lg text-2xl text-[#013662]">
        <div className="flex my-10 w-[70%] ">
          <div className="mx-10">
            <lable><span className="text-red-600">*</span>نام: </lable>
            <input
             value={firstName}
              type="text"
              onChange={handleFirstNameChange}
              name="firstName"
              className="border border-[#013662] mt-3 rounded-md pr-1 text-xl h-[35px]"
            />
          </div>
          <div>
            <lable><span className="text-red-600">*</span> نام خانوادگی:</lable>
            <input
            value={lastName}
              type="text"
              onChange={handleLastNameChange}
              name="lastName"
              className="border border-[#013662]  mt-3 rounded-md pr-1 text-xl h-[35px]"
            />
          </div>
        </div>
        <div className="flex my-10 w-[400px] ">
          <div className='mx-10'>
            <lable><span className="text-red-600">*</span> آدرس: </lable>
            <input
            value={address}
              type="text"
              onChange={handleAddressChange}
              name="address"
              className="border border-[#013662] mt-3 rounded-md pr-1 text-xl h-[35px] "
            />
          </div>
          <div className=''>
            <lable><span className="text-red-600">*</span> تلفن همراه: </lable>
            <input
            value={tel}
              type="tel"
              onChange={handleTelChange}
              name="tel"
              className="border border-[#013662] mt-3 rounded-md pr-1 text-xl h-[35px] "
            />
          </div>
        </div>
        <div className="flex">
        <button type="submit" onClick={handleSubmit} className=" bg-[#013662] mr-[17%] mt-14 rounded-lg py-2 hover:scale-[0.9] text-white w-[30%]"> پرداخت </button>
        <button onClick={()=>navigate('/cart')} className=" bg-white border-2 border-[#013662] text-[#013662] mr-5 mt-14 rounded-lg py-2 hover:scale-[0.9]  w-[30%]"> بازگشت </button>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default BuyCart;
