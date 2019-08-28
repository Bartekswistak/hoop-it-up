import React from 'react'
import {connect} from 'react-redux'
import {createPlayerCard} from '../actions/myEntries.js'
import PlayerCard from './PlayerCard.js';


const NewPlayerCard = ({history, createPlayerCard}) => {

    const handleSubmit = (event, formData, userId) => {
        event.preventDefault()
        createPlayerCard({formData, userId}, history)
    }
    
    return <PlayerCard history={history} handleSubmit={handleSubmit}/>
}

export default connect(null, {createPlayerCard})(NewPlayerCard)