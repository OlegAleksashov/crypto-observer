import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoins as CoinsIcon } from "@fortawesome/free-solid-svg-icons";
import { fetchCategories } from "../store/action";
import { PersonalCard } from "./PersonalCard";

library.add(CoinsIcon);

const Categories = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.fetch.categories);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchCategories());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <PersonalCard
      text="CATEGORIES"
      value={loading ? <p>Loading...</p> : categories.length}
      color={theme.palette.info.light}
      icon={CoinsIcon}
    />
  );
};

export default Categories;

// Note

/* useEffect(() => {
   (async () => {
     const allCoins = await fetchCategories();
     setCategories(allCoins.data);
   })();
 }, []);*/

/*useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchCategories());
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]); */

/*useEffect(() => {
    dispatch(fetchCategories())
      .then(() => {
        setLoading(true);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });
  }, [dispatch]);*/