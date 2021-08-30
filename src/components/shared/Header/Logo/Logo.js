import React from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Logo.scss";

export default function Logo() {
  return (
    <div className="logo-container">
      <Link to="/">
        <Image src="/images/logo.svg" alt="logo" centered size="big" />
      </Link>
    </div>
  );
}
