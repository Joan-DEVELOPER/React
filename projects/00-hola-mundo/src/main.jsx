import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import HeaderRender from "./MainUI/Header/Head";
import SideBar from "./MainUI/SideBar/SideBar";
import VideoRender from "./MainUI/MainBody/Video";
import ButtonList from "./MainUI/MainBody/ButtonList";
import ChanelIcon from "./MainUI/MainBody/ChannelIcon";
import ChanelName from "./MainUI/MainBody/ChanelName";
import ChanelDescription from "./MainUI/MainBody/ChanelDesc";
import Style from "./main.module.scss";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <>
      <HeaderRender text={darkMode ? "🌙 Mode Fosc" : "☀️ Mode Clar"} />
      <button onClick={() => setDarkMode(!darkMode)} className={Style.mainBtn}>
        {darkMode ? "☀️ Mode Clar" : "🌙 Mode Fosc"}
      </button>
      <div className={Style.contentBody}>
        <SideBar />

        <div className={Style.videoMedia}>
          <VideoRender />
          <ButtonList />

          <div className={Style.channelInfo}>
            <ChanelIcon ChannelPhotoUrl="https://yt3.googleusercontent.com/teuevM7HuT6ap1FW50v80NmmwmuNJhyKiWhznSEmFleIqPES39v7MksSKi4sLDPTn2C0u87D_g=s160-c-k-c0x00ffffff-no-rj" />
            <ChanelName Chanel="Adrià Solar Pastor" subs="20M" />
          </div>
          <ChanelDescription className={Style.chanelDesc} />
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
