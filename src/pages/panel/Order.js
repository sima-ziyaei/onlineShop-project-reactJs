import axios from "axios";
import { useEffect, useState } from "react";

function Order() {
  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const [notDeliveredOrders, setNotDeliveredOrders] = useState([]);
  const [isDelivered, setDelivered] = useState(false);
  const URL = "http://localhost:3001/";
  const option = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  useEffect(() => {
    getDeliveredOrders();
    getNotDeliveredOrders();
  }, []);

  const getDeliveredOrders = () => {
    axios
      .get(`${URL}orders?delivered=true`)
      .then((res) => {
        setDeliveredOrders(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getNotDeliveredOrders = () => {
    axios
      .get(`${URL}orders?delivered=false`)
      .then((res) => {
        setNotDeliveredOrders(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange=(event)=>{
    setDelivered(event.target.value)
  }

  return (
    <div className="my-64">
      <div>
        <input
          type="radio"
          id="delivered"
          name="isDelivered"
          value="delivered"
          checked={isDelivered==="delivered"}
          onChange={handleChange}
        />
          <label for="delivered">سفارش های تحویل داده شده</label>
         
        <input
          type="radio"
          id="notDelivered"
          name="isDelivered"
          value="notDelivered"
          checked={isDelivered === "notDelivered"}
          onChange={handleChange}
          
        />
          <label for="notDelivered">سفارش های در حال انتظار</label>
      </div>
      <table>
        <tr>
          <td>نام کاربر</td>
          <td>مجموع مبلغ</td>
          <td>زمان ثبت سفارش</td>
          <td>بررسی</td>
        </tr>

        {isDelivered === "delivered"
          ? deliveredOrders.map((el) => {
              return (
                <tr>
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
                <tr>
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
    </div>
  );
}

export default Order;
