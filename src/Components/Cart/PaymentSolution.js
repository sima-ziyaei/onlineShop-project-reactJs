import { useState } from "react";
import {BsFillCheckCircleFill, BsFillXCircleFill} from 'react-icons/bs'
import {useSelector} from 'react-redux'

function PaymentSolution() {

    const solution = useSelector((state) => state.cart.solution);

    return ( <div className="mt-64 mb-28 flex items-center justify-center">
        {solution ?
        <div className="w-[30%] flex "> <BsFillCheckCircleFill className="text-green-600 text-[260px] ml-6 mb-12"/><span className="text-3xl mt-16">باتشکر از پرداخت شما، سفارش شما ثبت شده و جهت هماهنگی ارسال با شما تماس گرفته خواهد شد</span> </div>
        : <div className="w-[30%] flex "> <BsFillXCircleFill className="text-red-600 text-[260px] ml-6 mb-12"/><span className="text-3xl mt-16"> پرداخت شما موفقیت آمیز نبود، سفارش شما در انتظار پرداخت است. </span></div>
        }

        
    </div> );
}

export default PaymentSolution;