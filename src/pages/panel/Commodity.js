import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setProduct } from "../../redux/productSlice";
import {IoArrowRedoSharp} from 'react-icons/io5';
import {IoArrowUndoSharp} from 'react-icons/io5';

function Commodity() {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.productItem);
  const category = useSelector((state) => state.product.categoryItem);

  const [subCategory, setSubCategory] = useState([]);
  const [page, setPage] = useState(1);
  const URL = "http://localhost:3001/";

  useEffect(() => {
    getProducts();
  }, [page]);

  const getProducts = () => {
    axios
      .get(`${URL}products?_page=${page}&_limit=5`)
      .then((res) => {
        dispatch(setProduct(res.data));
      })
      .catch((err) => console.log("error:" + err));

    axios
      .get(`${URL}category`)
      .then((res) => {
        dispatch(setCategory(res.data));
      })
      .catch((err) => console.log("error:" + err));

    axios
      .get(`${URL}subcategory`)
      .then((res) => {
        setSubCategory(res.data);
      })
      .catch((err) => console.log("error:" + err));
  };

  const handleNextPage = () => {
    if (products.length <= 0) {
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
    <div className="mt-64 flex flex-col justify-center items-center">
      <div className="flex w-[80%] justify-between">
        <p className="text-[#ffbd07] font-extrabold text-3xl border-b-4 border-[#ffbd07]">
          مدیریت کالا ها{" "}
        </p>
        <button className="border-2 font-bold p-3 rounded-2xl border-[#ffbd07] text-[#ffbd07] hover:bg-[#ffbd07] hover:text-white ">
          افزودن کالا{" "}
        </button>
      </div>
      <table className="border-2 border-[#ffa5a4] mt-20 w-[80%] text-start">
        <tr className=" bg-[#ffa5a4] h-10">
          <th className="text-start"> تصویر </th>
          <th className="text-start"> نام کالا </th>
          <th className="text-start"> دسته بندی </th>
          <th className="text-start"> ویرایش </th>
          <th className="text-start"> حذف </th>
        </tr>

        {products.map((el) => {
          return (
            <tr key={el.id} className="  odd:bg-[#7bdeeb]">
              <td> عکس </td>
              <td> {el.name} </td>

              {category.map((item) => {
                if (el.category == item.id) {
                  return (
                    <td>
                      {subCategory.map((sub) => {
                        if (el.subcategory == sub.id) {
                          return (
                            <span>
                              {item.name} / {sub.name}
                            </span>
                          );
                        }
                      })}
                    </td>
                  );
                }
              })}

              <td> ویرایش </td>
              <td> حذف </td>
            </tr>
          );
        })}
      </table>
      <div className="my-20 w-[15%] flex justify-between">
        <button onClick={() => handleNextPage()} className="border-2 font-bold pr-2 text-2xl w-12 h-12  rounded-full border-[#ffbd07] text-[#ffbd07] hover:bg-[#ffbd07] hover:text-white "> <IoArrowRedoSharp /> </button>
        <button onClick={() => handlePrevPage()} className="border-2 font-bold pr-3 text-2xl w-12 h-12  rounded-full border-[#ffbd07] text-[#ffbd07] hover:bg-[#ffbd07] hover:text-white "> <IoArrowUndoSharp /> </button>
      </div>
    </div>
  );
}

export default Commodity;
