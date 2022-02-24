import React from "react";
import BaseContainer from "components/ui/BaseContainer";
import style from 'styled-components';

// MUI
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(1),
  textAlign: 'center',
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
 const Player = ({ user }) => {
   return (
     <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={3}>
         <Grid item xs margin={1}>
           <Item>{user.username} </Item>
         </Grid>
         <Grid item xs margin={1}>
           <Item>Id: {user.id}</Item>
         </Grid>
         <Grid item xs margin={1}>
           <Item>
             Status: {user.status === "ONLINE" ? <Online /> : <Offline />}
           </Item>
         </Grid>
       </Grid>
     </Box>
   );
 };

 export default Player;


