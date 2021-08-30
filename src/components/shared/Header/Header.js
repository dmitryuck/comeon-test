import React from "react";
import { Grid } from "semantic-ui-react";
import Logo from "./Logo/Logo";

export default function Header() {
  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={12}>
          <Logo />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
