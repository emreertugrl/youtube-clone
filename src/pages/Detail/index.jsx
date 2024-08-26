import React, { act, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player/youtube";
import Channel from "./Channel";
import Description from "./Description";
import Card from "../../components/Card";
import Comments from "./../../components/Comments";

const Detail = () => {
  const [video, setVideo] = useState(null);
  // arama parametreleri için kurulum
  const [searchParams] = useSearchParams();
  // url'den "v" isimli parametreye eriş
  const id = searchParams.get("v");
  // id'si bilinen videonun bilgilerini api'den al
  useEffect(() => {
    const params = {
      id,
      extend: 1,
    };
    api
      .get(`/video/info`, { params })
      .then((res) => setVideo(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="detail-page h-screen overflow-auto">
      {/* sayfa içeriği */}
      <div>
        {/* video */}
        <div className="h-[50vh] lg:h-[60vh]  rounded overflow-hidden">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            width={"100%"}
            height={"100%"}
            muted={true}
            playing={true}
          />
        </div>
        {/* açıklamalar */}
        <div className="my-3 text-xl font-bold">
          {video && (
            <>
              {/* başlık */}
              <h1>{video.title}</h1>
              {/* kanal bilgileri */}
              <Channel video={video} />

              {/* video bilgileri */}
              <Description video={video} />

              {/* Yorumlar */}
              <Comments videoId={id} />
            </>
          )}
        </div>
      </div>
      {/* alakalı içerik */}
      <div className="flex flex-col gap-5 p-1">
        {video?.relatedVideos.data.map(
          (item) =>
            item.type === "video" && (
              <Card video={item} key={item.videoId} isRow={true} />
            )
        )}
      </div>
    </div>
  );
};

export default Detail;
