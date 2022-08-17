import axios from "axios";
import { useEffect, useState } from "react";

function Inventory() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const URL = "http://localhost:3001/";

  useEffect(() => {
    getProducts();
  }, [page]);

  const getProducts = () => {
    axios
      .get(`${URL}products?_page=${page}&_limit=5`)
      .then((res) => {
        setProducts(res.data);
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
    <div className="my-64">
      <p>مدیریت موجودی و قیمت ها</p>
      <button> ذخیره </button>
      <table>
        <tr>
          <th>کالا</th>
          <th> قیمت (تومان) </th>
          <th>موجودی</th>
        </tr>

        {products.map((el) => {
          return (
            <tr key={el.id}>
              <td> {el.name} </td>
              <td> {el.Price} </td>
              <td> {el.stock} </td>
            </tr>
          );
        })}
      </table>

      <button onClick={() => handlePrevPage()}>prev</button>
      <button onClick={() => handleNextPage()}>next</button>
    </div>
  );
}

export default Inventory;
