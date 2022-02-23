import React from "react";
import BaseContainer from "components/ui/BaseContainer";


/**
const Online = styled.span`
  color: #4caf50;
  &::after {
    content: "✔";
  }
  padding-right: 6px;
`;

const Offline = styled.span`
  color: #f44336;
  &::after {
    content: "✘";
  }
  padding-right: 6px;
`;
*/

/**
 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */
const Player = ({ user }) => {
  return (
    <BaseContainer>
        {user.status === 'ONLINE'?
          <h3/>
          :
          <h2/>
        }
      <h3>{user.username}</h3>
      <h3>Id: {user.id}</h3>
    </BaseContainer>
  );
};

export default Player;
