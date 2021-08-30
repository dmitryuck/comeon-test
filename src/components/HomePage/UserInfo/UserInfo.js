import React from "react";
import { Image, Button, Icon } from "semantic-ui-react";

export default function UserInfo() {
  return (
    <div>
      <div className="flex-row justify-content-start align-items-center margin-b10">
        <div className="inline-block margin-r10">
          <Image src="/images/wireframe/square-image.png" avatar />
        </div>
        <div className="inline-block">
          <div>
            <b>Name</b>
          </div>
          <div>Descr</div>
        </div>
      </div>
      <Button secondary>
        <Icon name="chevron left" />
        Log out
      </Button>
    </div>
  );
}
