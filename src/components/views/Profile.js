import React from "react";
import BaseContainer from "components/ui/BaseContainer";
import style from 'styled-components';

// MUI
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
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
      <Item>
        <Box sx={{ flexGrow: 1 }}>
          <Stack spacing={2}>
            <Item>Username: {user.username}</Item>
            <Item>Id: {user.id}</Item>
            <Item>
              Status: {user.status === "ONLINE" ? <Online /> : <Offline />}
            </Item>
            <Item>Creation Date: {user.creationDate}</Item>
          </Stack>
        </Box>
      </Item>
    </>
  );
};

export default Profile;

