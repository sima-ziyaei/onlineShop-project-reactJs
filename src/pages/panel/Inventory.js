import axios from "axios";
import { useEffect, useState } from "react";
import EditInventory from '../../Components/Inventory/EditInventory'
import SaveEdit from "../../Components/Inventory/SaveEdit";
import Pagination from "../../Components/Pagination";


function Inventory() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal]= useState('');
  const URL = "http://localhost:3001/";

  const persianNumber = (x) => {
    return x.toLocaleString("fa-IR");
}

  useEffect(() => {
   getProducts();
  }, []);

  const getProducts =  async(currentPage) => {
    await axios
      .get(`${URL}products?_page=${currentPage}&_limit=5`)
      .then((res) => {
        setProducts(res.data);
        setTotal(res.headers['x-total-count']) 
      })
      .catch((err) => console.log("error:" + err));
  };


  return (
    <div className="mt-64 flex flex-col justify-center items-center">
      <div className="flex w-[80%] justify-between">
      <p className="text-[#013662] font-extrabold text-3xl border-b-4 border-[#013662]">مدیریت موجودی و قیمت ها</p>
      <SaveEdit /> </div>
      <table className="border-2 border-[#013262] mt-20 w-[80%] text-start">
        <tr className=" bg-[#013662] text-white h-10">
          <th className="text-center">کالا</th>
          <th className="text-center"> قیمت (تومان) </th>
          <th className="text-center">موجودی</th>
        </tr>

        {products.map((el) => {
          return (
            <tr key={el.id} className="  odd:bg-[#ccc9eb]">
              <td className="text-center"> {el.name} </td>
              <EditInventory price={persianNumber(+(el.Price))} stock={persianNumber(+(el.stock))} />
              
            </tr>
          );
        })}
      </table>

     <Pagination currentPage={currentPage} total={total} getProducts={getProducts}/>
    </div>
  );
}

export default Inventory;
