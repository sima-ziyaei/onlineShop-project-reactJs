import { useNavigate } from "react-router-dom";
import "../styles/card.css";

function Card({ name, photo, price, off, id, cate }) {
  const navigate = useNavigate();
  const persianNumber = (x) => {
    return x.toLocaleString("fa-IR");
  };
  return (
    <div
      onClick={() => navigate(`/${cate}/${id}`)}
      className="bg-white b-shadow ml-6 relative text-[#013662] rounded-xl h-[380px]  mt-5"
    >
      <img
        src={`http://localhost:3001/files/${photo}`}
        className="mt-2 h-[50%] mx-5 w-[80%] "
      />
      <div className="bg-[#FFCAAA] h-[48%] rounded-b-xl hover:h-[52%] hover:w-[106%] hover:absolute hover:left-[-8px] rounded-tl-3xl inverted-border-radius">
        <p className="mt-3 pt-4 mr-2 text-lg font-semibold"> {name} </p>

        {off !== "0" ? (
          <>
            <div className="absolute bottom-20 line-through left-12">
              {persianNumber(+price)}
            </div>
            <p className="text-end ml-2 mt-6 absolute bottom-14 left-10 font-semibold">
              {persianNumber((price * off) / 100)}
            </p>
            <span className="text-end ml-2 mt-6 absolute bottom-16 left-0 font-semibold">
              
              تومان
            </span>
          </>
        ) : (
          <p className="text-end ml-2 mt-6 absolute bottom-14 left-0 font-semibold">
            {persianNumber(+price)} تومان
          </p>
        )}
        <button className="border-2 border-[#013662] absolute bottom-1 w-[40%] h-10 left-[32%] rounded-xl text-md font-semibold"> خرید </button>
        {/* <p> بیشتر </p> */}
      </div>
    </div>
  );
}

export default Card;
