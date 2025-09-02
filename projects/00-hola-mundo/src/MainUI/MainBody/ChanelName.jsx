import style from "./ChanelName.module.scss";

function ChanelName({ Chanel, subs }) {
  const subscribed = subs;
  return (
    <div className={style.content}>
      <div className={style.info}>
        <p>
          <strong>{Chanel}</strong>
        </p>
        <p>{subscribed} subscribers</p>
      </div>
      <div className={style.infoBtn}>
        <button className={style.notify}>🔔</button>
        <button className={style.subscribe}>Subscribe</button>
      </div>
    </div>
  );
}
export default ChanelName;
