import React from 'react'
import {connect} from 'react-redux'
import {updatePlayerCardForm} from '../actions/playerCardForm.js'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const PlayerCardForm = ({formData, history, updatePlayerCardForm, userId, playercard, handleSubmit}) => {

  const {playerNickname, playerHeightInches, playerHeightFeet, playerWeight, playerAge, playerFavPlayer} = formData
  const playerCardId = playercard ? playercard.id : null

    const handleChange = (event) => {
        const {name, value} = event.target
        updatePlayerCardForm(name, value)
    }

 return ( 
    
    <Container className="playerCardForm"> 
      <Form onSubmit={event => handleSubmit(event, formData, userId)}>
        <Form.Group controlId="formPlayerNickname">
          <Form.Label>What is your nickname on the court?</Form.Label>
            <Form.Control type="textarea" name="playerNickname" onChange={handleChange}/><br/>
         </Form.Group>

        <Form.Group controlId="formPlayerHeight">
           <Form.Label>How tall are you?</Form.Label>
              <Form.Control type="textarea" name="playerHeightFeet" onChange={handleChange}/> Feet
              <Form.Control type="textarea" name="playerHeightInches" onChange={handleChange}/>Inches<br/>
        </Form.Group>

        <Form.Group controlId="formPlayerWeight">
         <Form.Label>How much do you weigh?</Form.Label>
           <Form.Control type="textarea" name="playerWeight" onChange={handleChange}/>Lbs<br/>
        </Form.Group>

        <Form.Group controlId="formPlayerAge">
         <Form.Label>How old are you?</Form.Label>
           <Form.Control type="textarea" name="playerAge" onChange={handleChange}/><br/>
        </Form.Group>

        <Form.Group controlId="formPlayerFavPlayer">
         <Form.Label>Who is your favorite basketball player?</Form.Label>
           <Form.Control type="textarea" name="playerFavPlayer" onChange={handleChange}/><br/>
        </Form.Group>
        <Form.Control type="submit" value={"Create Player Card"} />
      </Form>
    </Container> 
     )};

const mapStateToProps = (state) => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.playerCardForm,
      userId
    }
}

export default connect(mapStateToProps, {updatePlayerCardForm})(PlayerCardForm)