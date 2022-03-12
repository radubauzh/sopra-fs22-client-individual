import React from "react";
import { api, handleError } from "../../helpers/api";
import User from "models/User";
import { withRouter } from "react-router-dom";
import { Button } from "components/ui/Button";
import BaseContainer from "components/ui/BaseContainer";
import styled from "styled-components";

// MUI
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";


const InputField = styled.input`
  &::placeholder {
    color: rgba(255, 255, 255, 1);
  }
  height: 35px;
  padding-left: 15px;
  margin-left: -4px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
`;

/**
 * Classes in React allow you to have an internal state within the class and to have the React life-cycle for your component.
 * You should have a class (instead of a functional component) when:
 * - You need an internal state that cannot be achieved via props from other parent components
 * - You fetch data from the server (e.g., in componentDidMount())
 * - You want to access the DOM via Refs
 * https://reactjs.org/docs/react-component.html
 * @Class
 */
class Login extends React.Component {
  /**
   * If you don’t initialize the state and you don’t bind methods, you don’t need to implement a constructor for your React component.
   * The constructor for a React component is called before it is mounted (rendered).
   * In this case the initial state is defined in the constructor. The state is a JS object containing two fields: name and username
   * These fields are then handled in the onChange() methods in the resp. InputFields
   */
  constructor() {
    super();
    this.state = {
      password: null,
      username: null,
    };
  }
  /**
   * HTTP POST request is sent to the backend.
   * If the request is successful, a new user is returned to the front-end
   * and its token is stored in the localStorage.
   */
  async register() {
    try {
      const requestBody = JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      });
      const response = await api.post("/users", requestBody);

      // Get the returned user and update a new object.
      const user = new User(response.data);

      // Store the token into the local storage.
      //localStorage.setItem("token", user.token);
      localStorage.setItem("is_logged_in", "True");
      localStorage.setItem("id", user.id);
      const set_user_online = await api.put("/users/" + user.id);

      // Login successfully worked --> navigate to the route /game in the GameRouter
      this.props.history.push(`/game`);
    } catch (error) {
      alert(
        `Something went wrong during the register: \n${handleError(error)}`
      );
    }
  }

  async login() {
    try {
      const requestBody = JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      });
      const response = await api.put(
        "/users_name/" + this.state.username,
        requestBody
      );

      // Store the token into the local storage.
      //localStorage.setItem("token", "I'm in the DB ;)");
      //localStorage.setItem("token", response.data.token);
      localStorage.setItem("is_logged_in", "True");
      localStorage.setItem("id", response.data.id);
      const set_user_online = await api.put(
        "/users/" + localStorage.getItem("id")
      );

      // Login successfully worked --> navigate to the route /game in the GameRouter
      this.props.history.push(`/game`);
    } catch (error) {
      alert(
        `Are you registered yet? Please register yourself first :-) \n${handleError(
          error
        )}`
      );
    }
  }

  /**
   *  Every time the user enters something in the input field, the state gets updated.
   * @param key (the key of the state for identifying the field that needs to be updated)
   * @param value (the value that gets assigned to the identified state key)
   */
  handleInputChange(key, value) {
    // Example: if the key is username, this statement is the equivalent to the following one:
    // this.setState({'username': value});
    this.setState({ [key]: value });
  }

  /**
   * componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
   * Initialization that requires DOM nodes should go here.
   * If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
   * You may call setState() immediately in componentDidMount().
   * It will trigger an extra rendering, but it will happen before the browser updates the screen.
   */
  componentDidMount() {}

  render() {
    return (
      <BaseContainer>
        <br></br> <br></br> <br></br>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          margin="normal"
        >
          <TextField
            label="username"
            type="text"
            placeholder="Enter here.."
            onChange={(e) => {
              this.handleInputChange("username", e.target.value);
            }}
          />

          <TextField
            label="password"
            placeholder="Enter here.."
            type="password"
            onChange={(e) => {
              this.handleInputChange("password", e.target.value);
            }}
          />
        </Stack>
        <br></br>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Button
            disabled={!this.state.username || !this.state.password}
            width="17%"
            onClick={() => {
              this.login();
            }}
          >
            Login
          </Button>

          <Button
            disabled={!this.state.username || !this.state.password}
            width="17%"
            onClick={() => {
              this.register();
            }}
          >
            Register
          </Button>
        </Stack>
      </BaseContainer>
    );
  }
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default withRouter(Login);
