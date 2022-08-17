import axios from "axios";
import { useEffect, useState } from "react";

function Commodity() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(1);
  const URL = "http://localhost:3001/";

  useEffect(() => {
    getProducts();
  }, [page]);
  useEffect(() => {
    getCategory();
  }, []);

  const getProducts = () => {
    axios
      .get(`${URL}products?_page=${page}&_limit=5`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log("error:" + err));
  };

  const getCategory = () => {
    axios
      .get(`${URL}category`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => console.log("error:" + err));
  };

  const handleNextPage = () => {
    if (products.length <= 1) {
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
    <div className="mt-64">
      <p>مدیریت کالا ها </p>
      <button>افزودن کالا </button>
      <table>
        <tr>
          <th> تصویر </th>
          <th> نام کالا </th>
          <th> دسته بندی </th>
          <th> ویرایش </th>
          <th> حذف </th>
        </tr>

        {products.map((el) => {
          return (
            <tr key={el.id}>
              <td> عکس </td>
              <td> {el.name} </td>
              <td>
                {category.map((element)=>{
                    if(el.category===element.id){
                        return(
                            element.name
                        )
                    }
                })}
              </td>
              <td> ویرایش </td>
              <td> حذف </td>
            </tr>
          );
        })}
      </table>
      <button onClick={() => handlePrevPage()}>prev</button>
      <button onClick={() => handleNextPage()}>next</button>
    </div>
  );
}

export default Commodity;
