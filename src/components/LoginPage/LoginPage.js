import React from "react";
import { Grid } from "semantic-ui-react";
import Header from "../shared/Header/Header";
import Login from "./Login/Login";

export default function LoginPage() {
  return (
    <>
      <Header />

      <Grid>
        <Grid.Row centered>
          <Grid.Column width={12}>
            <Login />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
