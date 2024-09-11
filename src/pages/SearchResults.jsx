import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../utils/api";
import Card from "../components/Card";
import Loader from "../components/Loader";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);
  const [token, setToken] = useState();
  const [page, setPage] = useState(1);

  // 1) Urlden aratılan terimi al
  const query = searchParams.get("search_query");
  // 2) Api'den aratılan terime uygun verileri al
  useEffect(() => {
    setIsLoading(true);
    let params = {
      query,
      type: "video",
      // eğer ki sayfa 1'den fazla ise yapılan api isteğine token eklenir.
      token: page > 1 ? token : undefined,
    };
    api
      .get(`/search`, { params: params })
      .then((res) => {
        setData((prev) => [...prev, ...res.data.data]);
        setToken(res?.data?.continuation);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [query, page]);
  // eğer bir şey aratılırsa önceki datayı sil
  useEffect(() => {
    setPage(1), setData([]), setToken(null);
  }, [query]);

  return (
    <div className="p-4 sm:p-6 md:p-10 h-[90vh] overflow-y-auto flex flex-col items-center">
      <h2 className="text-xl mb-5">
        <span className="font-bold">{query}</span> için sonuçlar
      </h2>
      <div className="flex flex-col gap-5 justify-center">
        {data &&
          data.map(
            (item) =>
              item.type === "video" && (
                <Card key={item.videoId} isRow video={item} />
              )
          )}
        {isLoading && <Loader spinner />}
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setPage(page + 1)}
          disabled={isLoading}
          className={`bg-zinc-600 py-2 px-5 rounded-md my-10 hover:bg-zinc-800 transition ${
            isLoading ? "hidden" : ""
          }`}
        >
          Daha Fazla
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
