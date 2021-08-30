import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Header from "../shared/Header/Header";

export default function GamePage() {
  let { gameCode } = useParams();

  useEffect(() => {
    window.comeon.game.launch(gameCode);
  }, []);

  return (
    <>
      <Header />

      <Grid>
        <Grid.Row centered className="padding-0">
          <Grid.Column width={12} className="bg-white padding-tb20">
            <div id="game-launch" className="full-width flex-row justify-content-center"></div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
