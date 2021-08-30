import React from "react";
import { Input } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import { filteredGamesState, gamesState, filtersState } from "../../../common/States";
import { applyFilters, concatFilters } from "../../../common/Filters";

export default function GameSearch() {
  const [games, setGames] = useRecoilState(gamesState);
  const [filters, setFilters] = useRecoilState(filtersState);
  const [filteredGames, setFilteredGames] = useRecoilState(filteredGamesState);

  const onSearchChange = (e) => {
    const allFilters = concatFilters(filters, { filterBy: "name", value: e.target.value });
    setFilters(allFilters);

    const filteredAllGames = applyFilters(filteredGames, games, allFilters);
    setFilteredGames(filteredAllGames);
  };

  return (
    <div className="float-right">
      <Input placeholder="Search Game" icon="search" onChange={onSearchChange} />
    </div>
  );
}
