import { useContext } from "react";
import { categories } from "./../constants/constants";
import { Link, NavLink } from "react-router-dom";
import { VideoContext } from "./../context/videoContext";

const SideBar = () => {
  const { category, setCategory } = useContext(VideoContext);
  return (
    <div className="flex flex-col p-1 md:p-4 h-screen overflow-y-auto ">
      {categories.map((item, i) => (
        <Link to={"/"} key={i} onClick={() => setCategory(item)}>
          <div
            className={`
            ${category.name === item.name && "bg-[#242424]"}
               flex items-center gap-2 py-2 px-2 md:px-3 md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d]`}
          >
            <span className="max-md:text-2xl">{item.icon}</span>
            <span className="max-md:hidden">{item.name}</span>
          </div>
          {item.divider && <hr />}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
