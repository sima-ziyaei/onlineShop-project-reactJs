import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
import { BsCalendar2CheckFill, BsX } from "react-icons/bs";

function CheckOrder({ id }) {
  const URL = "http://localhost:3001/";
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const option = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const check = () => {
    axios
      .get(`${URL}orders?id=${id}`)
      .then((res) => {
        setSelectedProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    setModalIsOpen(true);
  };

  const deliverOrder = async () => {
    axios
      .patch(`${URL}orders/${id}`, {
        delivered: "true",
        createdAt: new Date().getTime(),
      })
      .then((response) => {
        check();
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="flex items-center justify-center w-[100%]">
      <button onClick={check} className="text-black text-center ">
        <BsCalendar2CheckFill />
      </button>
      <Modal isOpen={modalIsOpen} className="w-[50%] h-[80%] border absolute left-[26%] top-[10%] bg-white">
        {selectedProduct.map((el) => {
          return (
            <div className="m-3">
              <div className="flex justify-between m-2 mr-0">
                <span className="font-extrabold text-2xl border-b-2 border-[#013662] text-[#013662]"> اطلاعات سفارش </span>
                <span
                  onClick={() => {
                    setModalIsOpen(false);
                    setSelectedProduct([]);
                  }}
                  className='cursor-pointer text-2xl'
                >
                  <BsX />
                </span>
              </div>
              <div className=" my-2">{` نام: ${el.username} ${el.lastname}`}</div>
              <div className=" my-2"> {` آدرس: ${el.address}`} </div>
              <div className=" my-2"> {` شماره تلفن: ${el.phone}`} </div>
              <div className=" my-2">{` زمان سفارش: ${new Date(
                el.expectAt
              ).toLocaleString("fa-IR", option)}`}</div>
              <table className="w-[90%] my-4 mr-[5%] border border-[#013662]">
                <tr className="text-center border bg-[#013662] text-white">
                  <th className="text-center">کالا</th>
                  <th className="text-center">قیمت</th>
                  <th className="text-center">تعداد</th>
                </tr>
                {el.products.map((item) => {
                  return (
                    <tr className="odd:bg-[#ffcaaa]">
                      <td className="text-center"> {item.name} </td>
                      <td className="text-center"> {item.price} </td>
                      <td className="text-center"> {item.count} </td>
                    </tr>
                  );
                })}
              </table>
              {el.delivered === "true" ? (
                <div className=" my-2">{` زمان تحویل:  ${new Date(
                  el.createdAt
                ).toLocaleString("fa-IR", option)}`}</div>
              ) : (
                <button onClick={deliverOrder} className=" my-2 font-bold  border-2 border-[#013662] text-[#013662] hover:bg-[#013662] hover:text-white p-3 rounded-xl">
                 
                  تحویل سفارش
                </button>
              )}
            </div>
          );
        })}
      </Modal>
    </div>
  );
}

export default CheckOrder;
