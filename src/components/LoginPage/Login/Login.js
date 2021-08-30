import React from "react";
import { Container, Form, Button, Input, Icon } from "semantic-ui-react";
import "./Login.scss";

export default function Login() {
  return (
    <Container className="login-container" textAlign="center">
      <Form className="login-form">
        <Form.Field>
          <Input placeholder="Username" icon="user" />
        </Form.Field>
        <Form.Field>
          <Input placeholder="Password" type="password" icon="lock" />
        </Form.Field>
        <Button basic>
          Login
          <Icon name="chevron right" />
        </Button>
      </Form>
    </Container>
  );
}
