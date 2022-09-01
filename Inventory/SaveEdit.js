import axios from "axios";

function SaveEdit() {
    const URL = "http://localhost:3001/";

    const putData=()=>{
        // ids.map((id)=>{
        //     axios
        // .patch(`${URL}products/${id}`)
        // })
        
    }

    return (  <button className="border-2 font-bold p-3 rounded-2xl border-[#013662] text-[#013662] hover:bg-[#013662] hover:text-white "> ذخیره </button> );
}

export default SaveEdit;