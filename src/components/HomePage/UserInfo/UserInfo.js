import React from "react";
import { Image, Button, Icon } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
import { userState } from "../../../common/States";
import { userLogout, removeUserFromStorage } from "../../../common/Api";

export default function UserInfo() {
  const history = useHistory();

  const [user, setUser] = useRecoilState(userState);

  const onLogoutClick = async () => {
    const responseData = await userLogout(user.username);

    if (responseData.status === "success") {
      setUser(null);

      removeUserFromStorage();

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
