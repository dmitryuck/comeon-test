import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Container } from "semantic-ui-react";
import GameItem from "./GameItem/GameItem";
import { gamesState, filteredGamesState, selectedCategoryIdState } from "../../../common/States";

export default function GamesList() {
  const [games, setGames] = useRecoilState(gamesState);
  const [filteredGames, setFilteredGames] = useRecoilState(filteredGamesState);
  const [selectedCategoryId, setSelectedCategoryId] = useRecoilState(selectedCategoryIdState);

  useEffect(async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}/games`, {
      method: "get",
    });

    const gamesList = await response.json();

    setGames(gamesList);
    setFilteredGames(gamesList);
    setSelectedCategoryId(0);
  }, []);

  return (
    <Container fluid className="bg-white">
      <h2>Games</h2>
      <ul className="list-none">
        {filteredGames.map((game, gameIndex) => (
          <li key={gameIndex}>
            <GameItem data={game} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
