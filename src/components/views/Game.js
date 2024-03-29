import React from "react";
import { api, handleError } from "../../helpers/api";
import Player from "./Player";
import { withRouter } from "react-router-dom";
import { Spinner } from "components/ui/Spinner";
import { Button } from "components/ui/Button";
import GlasBox from "components/ui/GlasBox";

import BaseContainer from "components/ui/BaseContainer";

// MUI
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const ViewProfile = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
  "&:hover": {
    background: "rgba( 255, 255, 255, 0.3 )",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
}));

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null,
    };
  }

  //template
  async componentDidMount() {
    try {
      const response = await api.get("/users");
      // delays continuous execution of an async operation for 1 second.
      // This is just a fake async call, so that the spinner can be displayed
      // feel free to remove it :)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Get the returned users and update the state.
      this.setState({ users: response.data });

      // This is just some data for you to see what is available.
      // Feel free to remove it.
      console.log("request to:", response.request.responseURL);
      console.log("status code:", response.status);
      console.log("status text:", response.statusText);
      console.log("requested data:", response.data);

      // See here to get more data.
      console.log(response);
    } catch (error) {
      alert(
        `Something went wrong while fetching the users: \n${handleError(error)}`
      );
    }
  }

  async logout() {
    try {
      const set_user_offline = await api.put(
        "/users/" + localStorage.getItem("id")
      );
      //localStorage.removeItem("token");
      localStorage.removeItem("id");
      localStorage.removeItem("is_logged_in");

      this.props.history.push("/login");
    } catch (error) {
      alert("Something went wrong while logout");
    }
  }

  openUserProfile(userId) {
    localStorage.setItem("profileID", userId); // sets local id to open the selected user profile
    this.props.history.push("/profilePage/" + userId);
  }

  render() {
    return (
      <Item sx={{ boxShadow: 0 }}>
        <h2> Happy Coding! </h2>
        <p>Get all users from secure end point:</p>
        {!this.state.users ? (
          <Spinner />
        ) : (
          <div>
            <BaseContainer>
              {this.state.users.map((user) => {
                return (
                  <GlasBox>
                    <ViewProfile
                      key={user.id}
                      onClick={() => {
                        this.openUserProfile(user.id);
                      }}
                    >
                      <Player user={user} />
                    </ViewProfile>
                  </GlasBox>
                );
              })}
            </BaseContainer>
            <br></br>
            <Button
              width="10%"
              onClick={() => {
                this.logout();
              }}
            >
              Logout
            </Button>
          </div>
        )}
      </Item>
    );
  }
}

export default withRouter(Game);
