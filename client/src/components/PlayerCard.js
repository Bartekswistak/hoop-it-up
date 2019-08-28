import React from 'react'

const PlayerCard = ({playerCard}) => {
    return(
        playerCard ? 
        <div className="playerCard">
            <h3>Player Card for: {playerCard.attributes.nickname}</h3>
          <ul>
            <li><strong>Player Height:</strong> {playerCard.attributes.playerHeightFeet} feet {playerCard.attributes.playerHeightInched} inches</li>
            <li><strong>Player Weight:</strong> {playerCard.attributes.playerWeight} lbs</li>
            <li><strong>Player Age:</strong> {playerCard.attributes.playerAge}</li>
            <li><strong>Favorite Player:</strong> {playerCard.attributes.playerFavPlayer}</li>
          </ul>
        </div> 

        : null
    )
}


export default PlayerCard