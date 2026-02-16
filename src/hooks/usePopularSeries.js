import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularShows } from "../utils/Store/Slice/tvSlice";

const usePopularSeries = () => {
  const dispatch = useDispatch();
  const popularSeries = useSelector((store) => store.tv.popularSeries);
  const getPopularSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addPopularShows(json.results));
  };

  useEffect(() => {
    !popularSeries && getPopularSeries();
  }, []);
};

export default usePopularSeries;
