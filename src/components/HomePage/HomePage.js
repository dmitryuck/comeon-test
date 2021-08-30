import React from "react";
import { Grid } from "semantic-ui-react";
import Header from "../shared/Header/Header";
import UserInfo from "./UserInfo/UserInfo";
import GameSearch from "./GameSearch/GameSearch";
import GamesList from "./GamesList/GamesList";
import Categories from "./Categories/Categories";

export default function HomePage() {
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
