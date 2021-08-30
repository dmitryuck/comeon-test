import { atom } from "recoil";
import { defaultFilters } from "./Filters";

export const gamesState = atom({
  key: "gamesState",
  default: [],
});

export const filtersState = atom({
  key: "filtersState",
  default: defaultFilters,
});

export const filteredGamesState = atom({
  key: "filteredGamesState",
  default: [],
});

export const categoriesState = atom({
  key: "categoriesState",
  default: [],
});

export const selectedCategoryIdState = atom({
  key: "selectedCategoryIdState",
  default: 0,
});
