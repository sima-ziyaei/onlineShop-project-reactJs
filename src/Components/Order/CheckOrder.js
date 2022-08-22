import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";

function CheckOrder({id}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct]=useState({})

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

  return (
    <>
      <button onClick={check} className='border border-y-blue-900'> بررسی سفارش </button>
      <Modal isOpen={modalIsOpen}>
        <div>{`order:${selectedProduct.username} ${selectedProduct.lastname}`}</div>
        <button onClick={()=>setModalIsOpen(false)}> close </button>
      </Modal>
    </>
  );
}

export default CheckOrder;
