import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { PersonalCard } from "./PersonalCard";
import { fetchCategories } from "../store/action";
import {categories} from '../const/value'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoins as CoinsIcon } from "@fortawesome/free-solid-svg-icons";
library.add(CoinsIcon);

const Categories = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  //const categories = useSelector((state) => state.fetch.categories);

  // useEffect(() => {
  //   dispatch(fetchCategories());
  // }, [dispatch]);

  // console.log(categories);

  return (
    <PersonalCard
      text="CATEGORIES"
      value={categories.length}
      color={theme.palette.error.dark}
      icon={CoinsIcon}
    />
  );
};

export default Categories;

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
