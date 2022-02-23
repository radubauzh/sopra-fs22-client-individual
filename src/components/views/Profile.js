import React from "react";
import BaseContainer from "components/ui/BaseContainer";



/**
 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */
const Profile = ({ user }) => {
  return (
    <>
        <BaseContainer>
            <h3>Username:</h3>
            <h3>{user.username}</h3>
        </BaseContainer>

        <BaseContainer>
            <h3>Birthday:</h3>
            <h3>{user.birthday}</h3> 
        </BaseContainer>

        <BaseContainer>
            <h3>Status:</h3>
            <h3>{user.status}</h3>
            {user.status === 'ONLINE'?
            <h3/>
            :
            <h3/>
        }
        </BaseContainer>
        <BaseContainer>
            <h3>Creation Date:</h3>
            <h3>{user.creationDate}</h3>
        </BaseContainer>

    </>
  );
};

export default Profile;
