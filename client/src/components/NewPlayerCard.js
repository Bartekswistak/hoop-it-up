import React from 'react'
import {connect} from 'react-redux'
import {createPlayerCard} from '../actions/myPlayerCard.js'
import PlayerCardForm from './PlayerCardForm.js';


const NewPlayerCard = ({history, createPlayerCard}) => {

    const handleSubmit = (event, formData, userId) => {
        event.preventDefault()
        createPlayerCard({formData, userId}, history)
    }
    
    return <PlayerCardForm history={history} handleSubmit={handleSubmit}/>
}

export default connect(null, {createPlayerCard})(NewPlayerCard)