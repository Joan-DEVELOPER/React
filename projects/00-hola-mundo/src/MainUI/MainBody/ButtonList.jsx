import { useState } from "react";
import Style from "./ButtonList.module.scss";

function ButtonList() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [dislike, setDisliked] = useState(0);

  return (
    <div className={Style.ButtonList}>
      <div className="date">
        <input type="date" name="date" id="date" value="2000-01-01" readOnly />
      </div>
      <div className={Style.like}>
        <button
          onClick={() => setLikes(likes + 1)}
          className={liked ? Style.likedBtn : Style.unlikedBtn}
        >
          <p>{likes}</p>
          {likes ? "👍🏻" : "👍"}
        </button>
        <button
          onClick={() => setDisliked(dislike + 1)}
          className={liked ? Style.likedBtn : Style.unlikedBtn}
        >
          <p>{dislike}</p>
          {dislike ? "👎🏻" : "👎"}
        </button>
      </div>
    </div>
  );
}

export default ButtonList;
