import axios from "axios";

function SaveEdit() {
    const URL = "http://localhost:3001/";

    const putData=()=>{
        // ids.map((id)=>{
        //     axios
        // .patch(`${URL}products/${id}`)
        // })
        
    }

    return (  <button className="border-2 font-bold p-3 rounded-2xl border-[#ffbd07] text-[#ffbd07] hover:bg-[#ffbd07] hover:text-white "> ذخیره </button> );
}

export default SaveEdit;