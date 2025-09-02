import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // 🔹 faltava aquesta línia
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import IconStyle from "./Icon.module.scss";

function Icon() {
  return (
    <div className={IconStyle.wrapper}>
      <FontAwesomeIcon
        icon={faYoutube}
        size="xl"
        style={{ color: "#f03232ff" }}
      />
      <h2>YouTube</h2>
    </div>
  );
}

export default Icon;
