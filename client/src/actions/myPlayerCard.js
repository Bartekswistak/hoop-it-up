import {resetPlayerCardForm} from './playerCardForm.js'

export const setPlayerCard = (playercard) => {
    return {
        type: "SET_PLAYERCARD",
         playercard
    }
}

export const clearPlayerCard = () => {
    return {
        type: "CLEAR_PLAYERCARD"
    }

}

// export const addEntry = (entry) => {
    
//     return {
//         type: "ADD_ENTRY",
//         entry
//     }
// }

// export const deleteEntrySuccess = (entryId) => {
    
//     return {
//         type: "DELETE_ENTRY_SUCCESS",
//         entryId
//     }
// }

export const updatePlayerCard = (playercard) => {
    
    return {
        type: "UPDATE_PLAYERCARD",
        playercard
    }
}

export const getMyPlayerCard = () => {
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/playercard', {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            }
    }).then(res => res.json())
    .then(playercard => {
        if(playercard.error) {
            alert(playercard.error)
        } else {
            dispatch(setPlayerCard(playercard.data))
        }
    }).catch(console.log)
  }
}

export const createPlayerCard = (playerCardData, history) => {
    return dispatch => {
        const sendablePlayerCardData = {
            playercard: {
                player_nickname: playerCardData.formData.playerNickname,
                player_height_in_feet: playerCardData.formData.playerHeightFeet,
                player_height_in_inches: playerCardData.formData.playerHeightInches,
                player_weight: playerCardData.formData.playerWeight,
                player_age: playerCardData.formData.playerAge,
                player_fav_player: playerCardData.formData.playerFavPlayer,
                user_id: playerCardData.userId
            }
        }
        return fetch("http://localhost:3000/api/v1/playercard", {
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
                    alert(resp.error)
                } else {
                    // dispatch(addEntry(resp.data))
                    dispatch(resetPlayerCardForm())
                    history.push(`/playercard/${resp.data.id}`)
                 }
                })
                .catch(console.log)
        
    }
}

export const updatePlayerCard = (playerCardData, history) => {
    return dispatch => {
        const sendablePlayerCardData = {
            playercard: {
                player_nickname: playerCardData.formData.playerNickname,
                player_height_in_feet: playerCardData.formData.playerHeightFeet,
                player_height_in_inches: playerCardData.formData.playerHeightInches,
                player_weight: playerCardData.formData.playerWeight,
                player_age: playerCardData.formData.playerAge,
                player_fav_player: playerCardData.formData.playerFavPlayer,
                user_id: playerCardData.userId
            }
        }
        return fetch(`http://localhost:3000/api/v1/entries/${playerCardData.userId}`, {
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

// export const deleteEntry = (entryId, history) => {
//     return dispatch => {
//         // console.log(entryId)
//         return fetch(`http://localhost:3000/api/v1/entries/${entryId}`, {
//             credentials: "include",
//             method: "DELETE",
//             headers: {
//                 "Content-Type": 'application/json'
//                 }   
//             })
//             .then(r => r.json())
//             .then(resp => {
//             if (resp.error) {
//                 alert(resp.error)
//             } else {
//                 dispatch(deleteEntrySuccess(entryId))
//                 history.push(`/entries`) 
//                 // history.push(`/`)
//                 }
//             })
//             .catch(console.log)
        
//     }


// }