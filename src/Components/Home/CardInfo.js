import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CardInfo() {
  const { id } = useParams();
  const URL = "http://localhost:3001/";
  const [card, setCard] = useState([]);

  useEffect(() => {
    getCard();
  }, []);

  const getCard = () => {
    axios
      .get(`${URL}products?id=${id}`)
      .then((res) => {
        setCard(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("error:" + err));
  };

  return (
    <div className="my-64 text-7xl font-bold">
      
      {card.map((el)=>{
        return(
            <div> {el.name} </div>
        )
      })}
    </div>
  );
}

export default CardInfo;
