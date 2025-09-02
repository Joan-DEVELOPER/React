import Icon from "./AppIcon.module.scss";

// *Import de font awesome //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

//-------------------------//
function AppIcon() {
  return (
    <div className={Icon.main}>
      <FontAwesomeIcon icon={faCartShopping} />
      <h2>EcoGrocery</h2>
    </div>
  );
}

export default AppIcon;
