import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import Header from "../shared/Header/Header";
import UserInfo from "./UserInfo/UserInfo";
import GameSearch from "./GameSearch/GameSearch";
import GamesList from "./GamesList/GamesList";
import Categories from "./Categories/Categories";
import { userState } from "../../common/States";

export default function HomePage() {
  const history = useHistory();

  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, []);

  return (
    <>
      <Header />

      <Grid divided>
        <Grid.Row centered className="padding-0">
          <Grid.Column width={9} className="bg-white padding-tb20">
            <UserInfo />
          </Grid.Column>

          <Grid.Column width={3} className="bg-white padding-tb20">
            <GameSearch />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered className="padding-0">
          <Grid.Column width={9} className="bg-white padding-tb20">
            <GamesList />
          </Grid.Column>

          <Grid.Column width={3} className="bg-white padding-tb20">
            <Categories />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
