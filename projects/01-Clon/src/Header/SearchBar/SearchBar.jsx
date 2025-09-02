import SearchStyle from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <div className={SearchStyle.bar}>
      <input type="text" placeholder="Search a product" />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
}

export default SearchBar;
