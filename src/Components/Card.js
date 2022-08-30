import { useNavigate } from "react-router-dom";


function Card({name, photo, price, off, id, cate}) {
    const navigate= useNavigate();
    const persianNumber = (x) => {
        return x.toLocaleString("fa-IR");
    }
    return ( 
        <div onClick={()=> navigate(`/${cate}/${id}`)} className="bg-white b-shadow ml-6 rounded-xl h-[380px] ">
            <img src={`http://localhost:3001/files/${photo}`} className='mt-2 h-[50%] mx-2 w-[80%] '/>
            <div className="bg-sky-200 h-[50%] mb-1 rounded-b-xl  rounded-tl-3xl">
            <p> {name} </p>
            <p> {persianNumber(+(price))} </p>
        </div></div>
     );
}

export default Card;