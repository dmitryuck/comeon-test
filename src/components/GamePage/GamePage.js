import React, { useEffect } from "react";
import { Button, Icon } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import Header from "../shared/Header/Header";
import { userState } from "../../common/States";

export default function GamePage() {
  let { gameCode } = useParams();

  const history = useHistory();

  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (user) {
      window.comeon.game.launch(gameCode);
    } else {
      history.push("/login");
    }
  }, []);

  const onBackClick = () => {
    history.push("/");
  };

  return (
    <>
      <Header />

      <Grid>
        <Grid.Row centered className="padding-0">
          <Grid.Column width={12} className="bg-white padding-tb20">
            <div id="game-launch" className="full-width flex-row justify-content-center"></div>
            <Button secondary onClick={onBackClick}>
              <Icon name="chevron left" />
              Go back
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
