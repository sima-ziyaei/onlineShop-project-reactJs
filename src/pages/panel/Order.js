import axios from "axios";
import { useEffect, useState } from "react";
import { IoArrowRedoSharp } from "react-icons/io5";
import { IoArrowUndoSharp } from "react-icons/io5";

function Order() {
  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const [notDeliveredOrders, setNotDeliveredOrders] = useState([]);
  const [isDelivered, setDelivered] = useState(false);
  const [page, setPage] = useState(1);
  const URL = "http://localhost:3001/";
  const option = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  useEffect(() => {
    getDeliveredOrders();
    getNotDeliveredOrders();
  }, [page]);

  const getDeliveredOrders = () => {
    axios
      .get(`${URL}orders?delivered=true&_page=${page}&_limit=2`)
      .then((res) => {
        setDeliveredOrders(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getNotDeliveredOrders = () => {
    axios
      .get(`${URL}orders?delivered=false&_page=${page}&_limit=2`)
      .then((res) => {
        setNotDeliveredOrders(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    setDelivered(event.target.value);
  };

  const handleNextDeliveredPage = () => {
    if (deliveredOrders.length <= 0) {
      setPage(page);
    } else {
      setPage(page + 1);
    }
  };

  const handleNextNotDeliveredPage = () => {
    if (notDeliveredOrders.length <= 0) {
      setPage(page);
    } else {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page <= 1) {
      setPage(page);
    } else {
      setPage(page - 1);
    }
  };

  return (
    <div className="my-64 flex flex-col justify-center items-center">
      <div className="flex w-[80%] justify-between">
        <p className="text-[#ffbd07] font-extrabold text-3xl border-b-4 border-[#ffbd07]"> مدیریت سفارش ها </p>
        <div className="flex ">
        <div className="ml-3">
          <input
            type="radio"
            id="delivered"
            name="isDelivered"
            value="delivered"
            checked={isDelivered === "delivered"}
            onChange={handleChange}
            className="ml-2"
          />
          <label
            for="delivered"
            className="border-b-2 border-[#ffbd07] text-[#ffbd07] font-extrabold text-2xl"
          >
            سفارش های تحویل داده شده
          </label>
           
        </div>
        <div>
          <input
            type="radio"
            id="notDelivered"
            name="isDelivered"
            value="notDelivered"
            checked={isDelivered === "notDelivered"}
            onChange={handleChange}
            className='ml-2'
          />
          <label
            for="notDelivered"
            className="border-b-2 border-[#ffbd07] text-[#ffbd07] font-extrabold text-2xl"
          >
            سفارش های در حال انتظار
          </label>
        </div></div>
      </div>
      <table className="border-2 border-[#ffa5a4] mt-24 w-[80%] text-start">
        <tr className=" bg-[#ffa5a4] h-10">
          <th className="text-start">نام کاربر</th>
          <th className="text-start">مجموع مبلغ</th>
          <th className="text-start">زمان ثبت سفارش</th>
          <th className="text-start">بررسی</th>
        </tr>

        {isDelivered === "delivered"
          ? deliveredOrders.map((el) => {
              return (
                <tr key={el.id} className="  odd:bg-[#7bdeeb]">
                  <td>
                    {el.username} {el.lastname}
                  </td>
                  <td>{el.prices}</td>
                  <td>
                    {new Date(el.expectAt).toLocaleString("fa-IR", option)}
                  </td>
                  <td>بررسی سفارش</td>
                </tr>
              );
            })
          : notDeliveredOrders.map((el) => {
              return (
                <tr key={el.id} className=" odd:bg-[#7bdeeb]">
                  <td>
                    {el.username} {el.lastname}
                  </td>
                  <td>{el.prices}</td>
                  <td>
                    {new Date(el.expectAt).toLocaleString("fa-IR", option)}
                  </td>
                  <td>بررسی سفارش</td>
                </tr>
              );
            })}
      </table>
      <div className="my-20 w-[15%] flex justify-between">
        <button
          onClick={() => handleNextDeliveredPage()}
          className="border-2 font-bold pr-2 text-2xl w-12 h-12  rounded-full border-[#ffbd07] text-[#ffbd07] hover:bg-[#ffbd07] hover:text-white "
        >
          {" "}
          <IoArrowRedoSharp />{" "}
        </button>
        <button
          onClick={() => handlePrevPage()}
          className="border-2 font-bold pr-3 text-2xl w-12 h-12  rounded-full border-[#ffbd07] text-[#ffbd07] hover:bg-[#ffbd07] hover:text-white "
        >
          {" "}
          <IoArrowUndoSharp />{" "}
        </button>
      </div>
    </div>
  );
}

export default Order;
