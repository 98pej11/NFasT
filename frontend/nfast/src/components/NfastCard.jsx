import React from "react";
import Card from "../assets/NfastCard.png";

function NfastCard({ name, date, price }) {
  return (
    <div>
      <img src={Card} alt="car!" />
      <h2>{name}</h2>
      <p>{date}</p>
      <div>{price}</div>
      <button type="button">확인</button>
    </div>
  );
}

export default NfastCard;
