import { useSelector } from "react-redux";
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import styles from "./CheckoutPage.module.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const CheckoutPage = () => {
  const state = useSelector((store) => store.cart);
  if (!state.itemsCounter)
    return (
      <div className={styles.empty}>
        <h1>Shopping card is Empty!!!</h1>
        <Link to="/">
          <FaArrowLeft /> Return To Shop
        </Link>
      </div>
    );
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <BasketSidebar state={state} />
      </div>
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
