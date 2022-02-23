import React from "react";

import { Redirect, Route } from "react-router-dom";
import Game from "../../views/Game";
import ProfilePage from "../../views/ProfilePage";
import Edit from "../../views/Edit";
import BaseContainer from "components/ui/BaseContainer";



class GameRouter extends React.Component {
  render() {
    /**
     * "this.props.base" is "/app" because as been passed as a prop in the parent of GameRouter, i.e., App.js
     */
    return (
      <BaseContainer>
        <Route
          exact
          path={`${this.props.base}/dashboard`}
          render={() => <Game />}
        />

        <Route
          exact
          path={`${this.props.base}`}
          render={() => <Redirect to={`${this.props.base}/dashboard`} />}
        />
        
        <Route
          exact
          path={`${this.props.base}/profilePage/:id`}
          render={() => <ProfilePage />}
        />

        <Route
          exact
          path={`${this.props.base}/edit`}
          render={() => <Edit />}
        />
        
      </BaseContainer>
    );
  }
}
/*
* Don't forget to export your component!
 */
export default GameRouter;
