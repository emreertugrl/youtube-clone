import React from "react";
import { FaBell } from "react-icons/fa";
import { IoIosSearch, IoMdVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputta aratılan metni al
    let text = e.target[0].value;

    // kullanıcıyı arama sonuçlarına yönlendirme
    // search_query parametresi ekle (aratılan terimi)
    navigate(`/results?search_query=${text}`);
  };
  return (
    <div className="flex items-center justify-between px-2 py-4 sm:p-4">
      <Link to="/" className=" flex items-center gap-1 sm:gap-2">
        <img
          src="/public/youtube.png"
          alt="youtube-logo"
          className="w-10 sm:w-12"
        />
        <h1 className="text-xl sm:text-2xl  font-mono">YouTube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex border border-gray-400 max-sm:w-1/2 rounded-[20px] overflow-hidden"
      >
        <input
          type="text"
          className="bg-black outline-none max-sm:text-base
            text-white px-1 md:px-5 py-1 md:py-2 border border-transparent focus:border-blue-500 rounded-l-[20px] w-full"
        />
        <button className="px-2 sm:px-4 text-2xl bg-zinc-800 hover:bg-zinc-600 transition">
          <IoIosSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer max-sm:hidden">
        <FaBell className="hover:text-gray-400 transition " />
        <IoMdVideocam className="hover:text-gray-400 transition " />
        <MdVideoLibrary className="hover:text-gray-400 transition " />
      </div>
    </div>
  );
};

export default Header;
