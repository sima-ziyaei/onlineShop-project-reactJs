import axios from "axios";
import { useEffect, useState } from "react";
import CheckOrder from "../../Components/Order/CheckOrder";
import Pagination from "../../Components/Pagination";

function Order() {
  const [allOrders, setAllOrders] = useState([]);
  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const [notDeliveredOrders, setNotDeliveredOrders] = useState([]);
  const [isDelivered, setDelivered] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal]= useState('');
  const URL = "http://localhost:3001/";
  const option = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  useEffect(() => {
   
    getAllOrders();
  }, [isDelivered]);

  const persianNumber = (x) => {
    return x.toLocaleString("fa-IR");
}

  const getAllOrders = async(currentPage) => {
   await axios
      .get(`${URL}orders?_page=${currentPage}&_limit=5`)
      .then((res) => {
        setAllOrders(res.data);
        setTotal(res.headers['x-total-count']) 
      })
      .catch((err) => console.log(err));

     await axios
      .get(`${URL}orders?delivered=true&_page=${currentPage}&_limit=5`)
      .then((res) => {
        setDeliveredOrders(res.data);
        setTotal(res.headers['x-total-count']) 
      })
      .catch((err) => console.log(err));

      await axios
      .get(`${URL}orders?delivered=false&_page=${currentPage}&_limit=5`)
      .then((res) => {
        setNotDeliveredOrders(res.data);
        setTotal(res.headers['x-total-count']) 
      })
      .catch((err) => console.log(err));
  };


  const handleChange = (event) => {
    setDelivered(event.target.value);
  };

 

  return (
    <div className="mt-64 flex flex-col justify-center items-center">
      <div className="flex w-[80%] justify-between">
        <p className="text-[#013662] font-extrabold text-3xl border-b-4 border-[#013662]">
          {" "}
          مدیریت سفارش ها{" "}
        </p>
        <div className="flex ">
        <div className="ml-3">
            <input
              type="radio"
              id="all"
              name="all"
              value="all"
              checked={isDelivered === "all"}
              onChange={handleChange}
              className="ml-2"
            />
            <label
              for="all"
              className="border-b-2 border-[#013662] text-[#013662] font-extrabold text-2xl"
            >
              همه 
            </label>
             
          </div>
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
              className="border-b-2 border-[#013662] text-[#013662] font-extrabold text-2xl"
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
              className="ml-2"
            />
            <label
              for="notDelivered"
              className="border-b-2 border-[#013662] text-[#013662] font-extrabold text-2xl"
            >
              سفارش های در حال انتظار
            </label>
          </div>
        </div>
      </div>
      <table className="border-2 border-[#013662] mt-24 w-[80%] ">
        <tr className=" bg-[#013662] text-white h-10">
          <th className="text-center">نام کاربر</th>
          <th className="text-center">مجموع مبلغ</th>
          <th className="text-center">زمان ثبت سفارش</th>
          <th className="text-center">بررسی</th>
        </tr>

        {isDelivered === "delivered"
          ? deliveredOrders.map((el) => {
              return (
                <tr key={el.id} className="  odd:bg-[#ccc9eb]">
                  <td  className="text-center">
                    {el.username} {el.lastname}
                  </td>
                  <td  className="text-center">{persianNumber(el.prices)}</td>
                  <td  className="text-center">
                    {new Date(el.expectAt).toLocaleString("fa-IR", option)}
                  </td>
                  <td className="text-center"> <CheckOrder id={el.id} /> </td>
                </tr>
              );
            })
          :isDelivered === "notDelivered"
          ? notDeliveredOrders.map((el) => {
              return (
                <tr key={el.id} className=" odd:bg-[#ccc9eb]">
                  <td  className="text-center">
                    {el.username} {el.lastname}
                  </td >
                  <td  className="text-center">{persianNumber(el.prices)}</td>
                  <td  className="text-center">
                    {new Date(el.expectAt).toLocaleString("fa-IR", option)}
                  </td>
                  <td className="text-center"> <CheckOrder id={el.id} /> </td>
                </tr>
              );
            }): 
            allOrders.map((el) => {
              return (
                <tr key={el.id} className=" odd:bg-[#ccc9eb]">
                  <td className="text-center">
                    {el.username} {el.lastname}
                  </td>
                  <td className="text-center">{persianNumber(el.prices)}</td>
                  <td className="text-center">
                    {new Date(el.expectAt).toLocaleString("fa-IR", option)}
                  </td>
                  <td className="text-center"> <CheckOrder id={el.id} /> </td>
                </tr>
              );
            })
            }
      </table>
      <Pagination currentPage={currentPage} total={total} getProducts={getAllOrders}/>
    </div>
  );
}

export default Order;
