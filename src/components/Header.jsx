import React from "react";
import { FaBell } from "react-icons/fa";
import { IoIosSearch, IoMdVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <Link to="/" className=" flex items-center gap-2">
        <img src="/public/youtube.png" alt="youtube-logo" className="w-12" />
        <h1 className="text-2xl font-mono max-md:hidden">Youtube</h1>
      </Link>
      <form className="flex border border-gray-400 rounded-[20px] overflow-hidden">
        <input
          type="text"
          className="bg-black outline-none  text-white px-5 py-2 border border-transparent focus:border-blue-500 rounded-l-[20px]"
        />
        <button className="px-4 text-2xl bg-zinc-800 hover:bg-zinc-600 transition">
          <IoIosSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-400 transition " />
        <IoMdVideocam className="hover:text-gray-400 transition " />
        <MdVideoLibrary className="hover:text-gray-400 transition " />
      </div>
    </div>
  );
};

export default Header;
