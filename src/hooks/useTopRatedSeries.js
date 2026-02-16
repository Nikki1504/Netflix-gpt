import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedShows } from "../utils/Store/Slice/tvSlice";

const useTopRatedSeries = () => {
  const dispatch = useDispatch();
  const topRatedSeries = useSelector((store) => store.tv.topRatedShows);
  const getTopRatedSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addTopRatedShows(json.results));
  };
  useEffect(() => {
    !topRatedSeries && getTopRatedSeries();
  }, []);
};

export default useTopRatedSeries;
