import React from "react";
import { shortenText } from "../helper/helper";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./basketCard.module.css";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";

const BasketCard = ({ data }) => {
  const { image, title, quantity, price } = data;
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p className={styles.title}>{shortenText(title)}</p>
      <p className={styles.price}> ${price}</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => dispatch(decrease(data))}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => dispatch(increase(data))}>+</button>
      </div>
    </div>
  );
};

export default BasketCard;
