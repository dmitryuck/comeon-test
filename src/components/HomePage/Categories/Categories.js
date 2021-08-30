import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import {
  categoriesState,
  selectedCategoryIdState,
  filteredGamesState,
  gamesState,
  filtersState,
} from "../../../common/States";
import { applyFilters, concatFilters } from "../../../common/Filters";
import CategoryItem from "./CategoryItem/CategoryItem";

export default function Categories() {
  const [games, setGames] = useRecoilState(gamesState);
  const [filters, setFilters] = useRecoilState(filtersState);
  const [filteredGames, setFilteredGames] = useRecoilState(filteredGamesState);
  const [categories, setCategories] = useRecoilState(categoriesState);
  const [selectedCategoryId, setSelectedCategoryId] = useRecoilState(selectedCategoryIdState);

  useEffect(async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}/categories`, {
      method: "get",
    });

    const categoriesList = await response.json();

    setCategories(categoriesList);
  }, []);

  const onCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);

    const allFilters = concatFilters(filters, { filterBy: "categoryIds", value: categoryId });
    setFilters(allFilters);

    const filteredAllGames = applyFilters(games, games, allFilters);
    setFilteredGames(filteredAllGames);
  };

  return (
    <Container fluid className="full-width bg-white">
      <h2>Categories</h2>
      <ul className="list-none">
        {categories.map((category, catIndex) => (
          <li key={catIndex}>
            <CategoryItem
              data={category}
              onCategorySelect={onCategorySelect}
              isCategorySelected={category.id === selectedCategoryId}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}
