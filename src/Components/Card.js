function Card({name, photo, price, off}) {
    // const persianNumber = (x) => {
    //     return x.toLocaleString("fa-IR");
    // }
    return ( 
        <div className="border w-[20%] h-[320px] ml-5">
            <img src={`http://localhost:3001/files/${photo}`} />
            <p> {name} </p>
            {/* <p> {persianNumber(price)} </p> */}
        </div>
     );
}

export default Card;