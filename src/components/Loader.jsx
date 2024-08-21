import { FaUserCircle } from "react-icons/fa";

const Loader = () => {
  const arr = new Array(25).fill("");
  return arr.map(() => (
    <div className="animate-pulse shadow">
      <div className="  bg-gray-500 md:h-48 h-[300px] mb-4 rounded" />

      <div className="flex items-center gap-3">
        <FaUserCircle className="text-5xl text-gray-500" />

        <div>
          <div className="h-2.5 w-44 rounded-full bg-gray-500" />
          <div className="h-2 w-16 rounded-full bg-gray-500 my-4" />
          <div className="flex gap-2">
            <div className="h-2 w-28 rounded-full bg-gray-500" />
            <div className="h-2 w-28 rounded-full bg-gray-500" />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Loader;
