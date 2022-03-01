import React from "react";
import BaseContainer from "components/ui/BaseContainer";
import style from "styled-components";

// MUI
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import GlasBox from "components/ui/GlasBox";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
}));

const Online = style.span`
  color: #4caf50;
  &::after {
    content: "✔";
  }
  padding-right: 6px;
`;

const Offline = style.span`
  color: #f44336;
  &::after {
    content: "✘";
  }
  padding-right: 6px;
`;

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
      <Item sx={{ boxShadow: 0 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Stack spacing={2}>
            <GlasBox>
              <Item>Username: {user.username}</Item>
            </GlasBox>
            <GlasBox>
              <Item>Id: {user.id}</Item>
            </GlasBox>
            <GlasBox>
              <Item>
                Status: {user.status === "ONLINE" ? <Online /> : <Offline />}
              </Item>
            </GlasBox>
            <GlasBox>
              <Item>Creation Date: {user.creationDate}</Item>
            </GlasBox>
            <GlasBox>
              <Item>Birthday: {user.birthday}</Item>
            </GlasBox>
          </Stack>
        </Box>
      </Item>
    </>
  );
};

export default Profile;
