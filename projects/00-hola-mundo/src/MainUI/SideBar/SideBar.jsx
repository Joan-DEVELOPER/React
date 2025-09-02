import SideBarStyle from "./SideBar.module.scss";
import SideBtn from "./SideBarBtn";
import Style from "./SideBar.module.scss";

function SideBar() {
  return (
    <div className={SideBarStyle.sideBar}>
      <div className="SideNav">
        <SideBtn className={Style.SideBtn} BtnTitle="Home" />
        <SideBtn className={Style.SideBtn} BtnTitle="Explore" />
        <SideBtn className={Style.SideBtn} BtnTitle="Subscrition" />

        <hr />

        <SideBtn className={Style.SideBtn} BtnTitle="Library" />
        <SideBtn className={Style.SideBtn} BtnTitle="History" />
        <SideBtn className={Style.SideBtn} BtnTitle="Watch later" />
        <SideBtn className={Style.SideBtn} BtnTitle="Liked videos" />

        <hr />
        <SideBtn className={Style.SideBtn} BtnTitle="Trading" />
        <SideBtn className={Style.SideBtn} BtnTitle="Movies" />
        <SideBtn className={Style.SideBtn} BtnTitle="Gaming" />
        <SideBtn className={Style.SideBtn} BtnTitle="Learning" />
        <SideBtn className={Style.SideBtn} BtnTitle="Live" />
        <SideBtn className={Style.SideBtn} BtnTitle="Sports" />
        <SideBtn className={Style.SideBtn} BtnTitle="Send Feedback" />
      </div>
    </div>
  );
}

export default SideBar;
