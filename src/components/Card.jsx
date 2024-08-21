//
import millify from "millify";
import { useState } from "react";
import { Link } from "react-router-dom";
//
const Card = ({ video, isRow }) => {
  const [isHover, setIsHover] = useState(false);
  //hover olduysa ve gifli tumbnail varsa onu kullan, normal thumnail dizisi içerisindeki son elemaanı al
  const source =
    isHover && video.richThumbnail && video.richThumbnail[0]
      ? video.richThumbnail[0].url
      : video.thumbnail[video.thumbnail.length - 1].url;
  return (
    <Link
      to={`/watch?v=${video.videoId}`}
      className={`cursor-pointer ${isRow ? "row" : ""}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/*Resim alanı  */}
      <div>
        <img src={source} className="rounded-lg w-full h-full" />
      </div>

      {/*Alt detay alanı  */}
      <div className="flex gap-4 mt-5">
        <img
          src={video.channelThumbnail[0].url}
          className={`w-14 h-14 rounded-full ${isRow && "row"}`}
        />

        <div>
          <h4 className="font-bold line-clamp-2">{video.title}</h4>

          <p>{video.channelTitle}</p>
          <div className="flex gap-3">
            <p>
              <span>{millify(video.viewCount)}</span>
              <span className="text-sm ms-2 view">Görüntülenme</span>
            </p>{" "}
            *
            <p>
              {video.isLive ? (
                <span className="bg-red-500 py-1 px-2 rounded-lg animate-pulse">
                  Canlı
                </span>
              ) : (
                video.publishedTimeText
              )}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
