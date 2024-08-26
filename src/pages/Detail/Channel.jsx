import millify from "millify";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

const Channel = ({ video }) => {
  return (
    <div className="flex justify-between max-sm:flex-col">
      {/* sol */}
      <div className="flex items-center gap-2 sm:gap-4 max-sm:justify-between">
        <div className="flex gap-2 sm:gap-4 items-center">
          <img
            className="rounded-full size:10 sm:size-12"
            src={video.channelThumbnail[0].url}
          />
          <div>
            <h4 className="font-bold">{video.channelTitle}</h4>
            <p className="text-gray-400">{video.subscriberCountText}</p>
          </div>
        </div>
        <button className="bg-white text-black px-3 py-1 sm:py-2 transition hover:bg-gray-400 rounded-full">
          Abone Ol
        </button>
      </div>
      {/* sağ */}
      <div className="max-sm:w-fit max-sm:mt-3 flex items-center bg-[#272727] rounded-full cursor-pointer">
        <div className="py-1 px-3  text-sm sm:py-2 sm:px-6 flex items-center gap-2 font-bold">
          <AiFillLike />
          <span>{millify(video.likeCount)}</span>
        </div>
        <div className="py-1 px-3 sm:py-2  sm:px-6 border-s">
          <AiFillDislike />
        </div>
      </div>
    </div>
  );
};

export default Channel;
