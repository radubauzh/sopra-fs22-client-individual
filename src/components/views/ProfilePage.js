import { Spinner } from "components/ui/Spinner";
import React from "react";
import { withRouter } from "react-router-dom";
import { api, handleError } from "../../helpers/api";
import Profile from "./Profile";
import { Button } from "components/ui/Button";
import BaseContainer from "components/ui/BaseContainer";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
}));

class ProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null,
    };
  }

  edit() {
    this.props.history.push("/edit");
  }

  back() {
    localStorage.removeItem("profileID");
    this.props.history.push("/game");
  }

  async componentDidMount() {
    try {
      const response = await api.get(
        "/users/" + localStorage.getItem("profileID")
      );
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

  render() {
    return (
      <Item sx={{ boxShadow: 0 }}>
        {!this.state.users ? (
          <Spinner />
        ) : (
          <BaseContainer>
            <BaseContainer>
              <Profile user={this.state.users} />
            </BaseContainer>
            <br />
            <Button
              width="20%"
              disabled={localStorage.getItem("id") != this.state.users.id}
              onClick={() => {
                this.edit();
              }}
            >
              Edit
            </Button>

            <Button
              width="20%"
              onClick={() => {
                this.back();
              }}
            >
              Back
            </Button>
          </BaseContainer>
        )}
      </Item>
    );
  }
}

export default withRouter(ProfilePage);
