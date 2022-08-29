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
        .then(setModalIsOpen(false))
        axios.get(`${URL}products?_limit=5`)
        .then((res)=>dispatch(setProduct(res.data)))
    }

    return ( <>
    <button onClick={openModal} className='text-[#ffbd07] text-center'> <BsTrashFill /> </button>
    <Modal isOpen={modalIsOpen} className=' p-2 w-[30%] h-[40%] bg-white border-2 rounded-md absolute left-[30%]  border-[#7bdeeb] top-[30%] flex flex-col items-center justify-center'>
        <div className="text-2xl mb-6"> آیا می خواهید این کالا را حذف کنید؟ </div>
        <div>
        <button onClick={deleteProduct} className='border-2 ml-4 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold p-2 px-4 text-xl rounded-xl '> بله </button>
        <button onClick={()=> setModalIsOpen(false)} className='border-2 mr-4 border-[#7bdeeb] text-[#7bdeeb] hover:bg-[#7bdeeb] hover:text-white font-bold p-2 px-4 text-xl rounded-xl '> خیر </button>
        </div>
    </Modal>

    </>);
}

export default DeleteCommodity;