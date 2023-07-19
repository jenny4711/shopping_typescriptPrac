import React from "react";
import { items } from "../model/types";
import "../CSS/ItemCard.css";
import { useNavigate } from "react-router-dom";
interface OwnProps {
  item: items;
  log: boolean;
}

const ItemCard: React.FC<OwnProps> = ({ item, log }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    if (log) {
      navigate(`/item/${item.id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div onClick={goToDetail} className="ItemCard">
      <img src={item.img} width={200} />
      <span>{item.title}</span>
      <span>{item.price}</span>
      <span>{item?.new === true ? "NEW" : ""}</span>
    </div>
  );
};

export default ItemCard;
