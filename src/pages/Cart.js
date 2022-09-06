import { useSelector } from "react-redux";

function Cart() {
  const value = useSelector((state) => state.purchases.value);

  return (
    <div className="my-64">
      {value.length !== 0} ?
      <table>
        <tr>
          <th> کالا </th>
          <th> قیمت </th>
          <th> تعداد </th>
          <th> قیمت نهایی </th>
          <th> حذف </th>
        </tr>
        <tbody>
          {/* {value.map((el) => {
            return (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            );
          })} */}
        </tbody>
      </table>{" "}
      :<div> سبد خرید شما خالی است </div>
    </div>
  );
}

export default Cart;
