import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewPrice, setNewStock } from "../../redux/productSlice";


function EditInventory({ price, stock }) {
  const [disablePriceButton, setDisablePriceButton] = useState(true);
  const [disableStockButton, setDisableStockButton] = useState(true);
  const [newPrice, setNewPrice]=useState(price);
  const [newStock, setNewStock]=useState(stock)
  // const dispatch = useDispatch();
  // const newPrice = useSelector((state) => state.product.newPrice);
  // const newStock = useSelector((state) => state.product.newStock);

  const keyDownHandler =(event)=>{
    if(event.keyCode == '27'){
      setDisablePriceButton(true)
      setDisableStockButton(true)
    }
    
  }

  document.addEventListener('keydown', keyDownHandler);

    const handleChangePrice=(e)=>{
        const { value}=e.target;
        setNewPrice(value)
        // dispatch(setNewPrice(value));
    }

    const handleChangeStock=(e)=>{
        const { value}=e.target;
        setNewStock(value)
        // dispatch(setNewStock(value));
    }
  
  return (
    <>
      <td onClick={() => setDisablePriceButton(false)} className="cursor-pointer text-center">
        <input value={newPrice} disabled={disablePriceButton} onChange={handleChangePrice} className={ disablePriceButton ? " cursor-pointer text-center " : "text-center border-2 border-black "}/>
      </td>
      <td onClick={() => setDisableStockButton(false) } className="cursor-pointer text-center">
        <input value={newStock} disabled={disableStockButton} onChange={handleChangeStock} className={ disableStockButton ? " cursor-pointer  text-center" : "text-center border-2 border-black "}/>
      </td>
    </>
  );
}

export default EditInventory;
