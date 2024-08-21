import { useContext } from "react";
import SideBar from "../components/SideBar";
import { VideoContext } from "../context/videoContext";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Card from "../components/Card";

const Feed = () => {
  const { isLoading, error, videos } = useContext(VideoContext);
  return (
    <div className="flex ">
      <SideBar />

      <div className="w-full videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          videos?.map(
            (item) =>
              item.type === "video" && <Card key={item.videoId} video={item} />
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
