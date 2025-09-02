// SideBtn.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./SideBtn.module.scss";

function SideBtn({ BtnTitle, icon, className }) {
  return (
    <button className={className}>
      {icon && <FontAwesomeIcon icon={icon} className="icon" />}
      <span>{BtnTitle}</span>
    </button>
  );
}

export default SideBtn;
