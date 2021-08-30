import React, { useState } from "react";
import { Container, Form, Button, Input, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../../common/States";
import "./Login.scss";

export default function Login() {
  const history = useHistory();

  const [user, setUser] = useRecoilState(userState);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const onLoginClick = async () => {
    if (!username) {
      setUsernameError(true);
      return;
    }

    if (!password) {
      setPasswordError(true);
      return;
    }

    const response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}/login`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const responseData = await response.json();

    if (responseData.status === "fail") {
      alert(responseData.error);
    } else {
      const currentUser = { ...responseData.player, username };

      setUser(currentUser);

      localStorage.user = JSON.stringify(currentUser);

      history.push("/");
    }
  };

  return (
    <Container className="login-container" textAlign="center">
      <Form className="login-form">
        <Form.Field>
          <Input
            placeholder="Username"
            icon="user"
            onChange={(e) => {
              setUsernameError(false);
              setUsername(e.target.value);
            }}
            error={usernameError}
          />
        </Form.Field>
        <Form.Field>
          <Input
            placeholder="Password"
            type="password"
            icon="lock"
            onChange={(e) => {
              setPasswordError(false);
              setPassword(e.target.value);
            }}
            error={passwordError}
          />
        </Form.Field>
        <Button basic onClick={onLoginClick}>
          Login
          <Icon name="chevron right" />
        </Button>
      </Form>
    </Container>
  );
}
