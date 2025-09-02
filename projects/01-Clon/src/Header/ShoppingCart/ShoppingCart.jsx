import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartStyle from "./CartStyle.module.scss";

function ShoppingCart() {
  return (
    <button className={CartStyle.cartButton}>
      <FontAwesomeIcon icon={faCartShopping} />
    </button>
  );
}

export default ShoppingCart;
