import {resetPlayerCardForm} from './playerCardForm.js'

export const setPlayerCard = (playercard) => {
    return {
        type: "SET_PLAYERCARD",
         payload: playercard
    }
}

export const clearPlayerCard = () => {
    return {
        type: "CLEAR_PLAYERCARD"
    }

}

export const addPlayerCard = (playercard) => {
    
    return {
        type: "ADD_PLAYERCARD",
        payload: playercard
    }
}

export const getMyPlayerCard = () => {
    return dispatch => {
        return fetch(`http://localhost:3000/api/v1/player_card`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            }
    }).then(res => res.json())
    .then(playercard => {
        if(playercard.error) {
            // alert(playercard.error)      This was the Not Found Error upon logging in
        } else {
            dispatch(setPlayerCard(playercard.data))
        }
    }).catch(console.log)
  }
}

export const createPlayerCard = (playerCardData) => {
    return dispatch => {
        const sendablePlayerCardData = {
            playercard: {
                player_nickname: playerCardData.playerNickname,
                player_height_in_feet: playerCardData.playerHeightFeet,
                player_height_in_inches: playerCardData.playerHeightInches,
                player_weight: playerCardData.playerWeight,
                player_age: playerCardData.playerAge,
                player_fav_player: playerCardData.playerFavPlayer,
                user_id: playerCardData.userId
            }
        }
        return fetch(`http://localhost:3000/api/v1/player_card`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
                }, 
                body: JSON.stringify(sendablePlayerCardData)
            })
                .then(r => r.json())
                .then(resp => {
                if (resp.error) {
                    
                    // alert(resp.error)
                } else {
                    dispatch(addPlayerCard(resp))
                    dispatch(resetPlayerCardForm())
                    debugger
                    // history.push(`/playercard/${resp.data.id}`)
                
                 }
                }) 
                .catch(console.log)
        
    }
}

export const updatePlayerCard = (playerCardData, history) => {
    return dispatch => {
        const sendablePlayerCardData = {
            playercard: {
                player_nickname: playerCardData.playerNickname,
                player_height_in_feet: playerCardData.playerHeightFeet,
                player_height_in_inches: playerCardData.playerHeightInches,
                player_weight: playerCardData.playerWeight,
                player_age: playerCardData.playerAge,
                player_fav_player: playerCardData.playerFavPlayer,
                user_id: playerCardData.userId
            }
        }
        return fetch(`http://localhost:3000/api/v1/player_card/${playerCardData.userId}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": 'application/json'
                }, 
                body: JSON.stringify(sendablePlayerCardData)
            })
                .then(r => r.json())
                .then(resp => {
                if (resp.error) {
                    alert(resp.error)
                } else {
                    dispatch(updatePlayerCard(resp.data))
                    history.push(`/entries/${resp.data.id}`)
                 }
                })
                .catch(console.log)
        
    }

}