import { createContext, useEffect, useState } from "react";
import { categories } from "../constants/constants";
import api from "../utils/api";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(categories[0]);

  useEffect(() => {
    let type = category.type;
    // seçilen kategori menu tipindeyse fonk. durdur.
    if (type === "menu") return;

    // istek atılacak url belirleme
    const url =
      type === "home"
        ? "/home"
        : type === "trending"
        ? "/trending"
        : `/search?query=${category.name}`;
    // yüklenme state'i true çekilir.
    setIsLoading(true);
    //api isteği atmak

    api
      .get(url)
      .then((res) => setVideos(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [category]);

  return (
    <VideoContext.Provider
      value={{
        error,
        setError,
        isLoading,
        setIsLoading,
        videos,
        setVideos,
        category,
        setCategory,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
