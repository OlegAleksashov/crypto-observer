import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { PersonalCard } from "./PersonalCard";
import { fetchCategories } from "../store/action";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoins as CoinsIcon } from "@fortawesome/free-solid-svg-icons";
library.add(CoinsIcon);
//import { fetchAllCategories } from "../services/coinService";

const Categories = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const cata = useSelector((state) => state.fetch.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  console.log(cata.length)

  return (
    <PersonalCard
      text="CATEGORIES"
      value={cata.length}
      color={theme.palette.error.dark}
      icon={CoinsIcon}
    />
  );
};

//const [categories, setCategories] = useState([]);

// const fetchCategories = () => {
//   axios
//     .get("https://api.coingecko.com/api/v3/coins/categories/list", {
//       headers: {
//         Accept: "application/json",
//       },
//     })
//     .then((response) => {
//       setCategories(response.data);
//     })
//     .catch((error) => console.log(error));
// };

// useEffect(() => {
//   (async () => {
//     const allCoins = await fetchAllCategories();
//     setCategories(allCoins.data);
//   })();
// }, []);

export default Categories;
