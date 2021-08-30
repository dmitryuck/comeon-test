import { atom } from "recoil";
import { defaultFilters } from "./Filters";

export const userState = atom({
  key: "userState",
  default: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
});

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
