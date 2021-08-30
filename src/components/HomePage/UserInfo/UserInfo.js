import React from "react";
import { Image, Button, Icon } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
import { userState } from "../../../common/States";

export default function UserInfo() {
  const history = useHistory();

  const [user, setUser] = useRecoilState(userState);

  const onLogoutClick = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}/logout`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
      }),
    });

    const responseData = await response.json();

    if (responseData.status === "success") {
      setUser(null);

      localStorage.removeItem("user");

      history.push("/login");
    }
  };

  return (
    <div>
      <div className="flex-row justify-content-start align-items-center margin-b10">
        <div className="inline-block margin-r10">
          <Image src={user?.avatar} avatar />
        </div>
        <div className="inline-block">
          <div>
            <b>{user?.name}</b>
          </div>
          <div>{user?.event}</div>
        </div>
      </div>
      <Button secondary onClick={onLogoutClick}>
        <Icon name="chevron left" />
        Log out
      </Button>
    </div>
  );
}
