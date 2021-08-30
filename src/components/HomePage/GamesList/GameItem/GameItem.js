import React from "react";
import { Image, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./GameItem.scss";

export default function GameItem({ data }) {
  return (
    <div className="game-item-container flex-row justify-content-start">
      <div className="image-container">
        <Image src={data.icon} />
      </div>

      <div className="full-width">
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <div>
          <Link to={`/game/${data.code}`}>
            <Button secondary className="float-right">
              Play
              <Icon name="chevron right" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
