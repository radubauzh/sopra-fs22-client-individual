import BaseContainer from 'components/ui/BaseContainer';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { api, handleError } from '../../helpers/api';
import {Button} from 'components/ui/Button';
import styled from 'styled-components';


const InputField = styled.input`
  &::placeholder {
    color: rgba(255, 255, 255, 1.0);
  }
  height: 35px;
  padding-left: 15px;
  margin-left: -4px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  text-align: center;
`;


class Edit extends React.Component {

  constructor() {
    super();
    this.state = {
      username: null,
      birthday: null
    };
  }

  handleInputChange(key, value) {
    // Example: if the key is username, this statement is the equivalent to the following one:
    // this.setState({'username': value});
    this.setState({ [key]: value });
  }

// Server: UserService - updateBirthday(id, birthday)
//@PutMapping("/users/{id}/username")
  async changeBirthday() {
    try {
      const response = await api.put("/users/"+localStorage.getItem("id")+"/birthday", this.state.birthday)
      alert("Success")
      this.props.history.push('/profilePage/'+localStorage.getItem("id"));
    } catch (error) {
      alert(`Something went wrong: \n${handleError(error)}`);
    }
  }

// Server: UserService - updateUsername(id, username)
//@PutMapping("/users/{id}/username")
async changeUsername() {
  try {
    const response = await api.put("/users/"+localStorage.getItem("id")+"/username", this.state.username)
    alert("Success")
    this.props.history.push('/profilePage/'+localStorage.getItem("id"));

  } catch (error) {
    alert(`Something went wrong: \n${handleError(error)}`);
  }
}

  // redirect to your profile page
  back() {
    this.props.history.push('/profilePage/'+localStorage.getItem("id"));
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


    render() {
        return (
          <BaseContainer>
            <h3>Birthday:</h3> 
            <br /> <br /> 
            <InputField
              placeholder="DD-MM-YYYY"
              onChange={e => {
                this.handleInputChange('birthday', e.target.value);
              }}
            />

            <Button
              width="20%"
              disabled={!this.state.birthday}
              onClick={() => {
                this.changeBirthday();
              }}>
              Change birthday
            </Button>
            <br /> <br /> 
            <h3>Username:</h3> 
            <br /> <br /> 
            <InputField
              placeholder="Change username" 
              onChange={e => {
                this.handleInputChange('username', e.target.value);

              }}
            />
            <Button
              width="25%"
              disabled={!this.state.username}
              onClick={() => {
                this.changeUsername();
              }}>
              Change username
            </Button>
            <br /> <br /> <br /> 
            <Button
              width="50%"
              onClick={() => {
                this.back();
              }}>
              Back
            </Button>
          </BaseContainer>
        );
      }
    }

    export default withRouter(Edit);
    
