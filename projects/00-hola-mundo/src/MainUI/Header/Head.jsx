// *Componente que renderiza el encabezado
import Icon from "./icon";
import SearchBar from "./searchBar";
import HeadStyle from "./Head.module.scss";

function HeaderRender() {
  return (
    <div className={HeadStyle.header}>
      <div className={HeadStyle.icon}>
        <Icon />
      </div>
      <div className={HeadStyle.SearchBar}>
        <SearchBar />
      </div>
    </div>
  );
}

export default HeaderRender;
