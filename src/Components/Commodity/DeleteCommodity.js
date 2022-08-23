import axios from "axios";
import Modal from "react-modal";
import {BsTrashFill} from 'react-icons/bs'
import {useState} from 'react';
import { setProduct } from "../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

function DeleteCommodity({id}) {
    const URL = "http://localhost:3001/";
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const products = useSelector((state) => state.product.productItem);
    const dispatch = useDispatch();

    const openModal=()=>{
        setModalIsOpen(true)
    }

    const deleteProduct = ()=>{
        axios.delete(`${URL}products/${id}`)
        .then(console.log('deleted'))
        setModalIsOpen(false)
        axios.get(`${URL}products?_limit=5`)
        .then((res)=>dispatch(setProduct(res.data)))
    }

    return ( <>
    <button onClick={openModal} className='text-[#ffbd07] text-center'> <BsTrashFill /> </button>
    <Modal isOpen={modalIsOpen}>
        <div> آیا می خواهید این کالا را حذف کنید؟ </div>
        <button onClick={deleteProduct}> بله </button>
        <button onClick={()=> setModalIsOpen(false)}> خیر </button>
    </Modal>

    </>);
}

export default DeleteCommodity;