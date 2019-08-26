    
export const updatePlayerCardForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_PLAYERCARD_FORM", 
        formData
    }
}