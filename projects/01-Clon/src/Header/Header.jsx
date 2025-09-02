import AppIcon from "./AppIcon/AppIcon";
import SearchBar from "./SearchBar/SearchBar";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.icon}>
        <AppIcon />
      </div>

      <div className={styles.search}>
        <SearchBar />
      </div>

      <div className={styles.cart}>
        <ShoppingCart />
      </div>
    </div>
  );
}
export default Header;
