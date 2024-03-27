export const addToCart = (quantity)=>{
    return(dispatch)=>{
        dispatch({
            type: 'add',
            payload: quantity
        })
    }
}

export const removeFromCart = (quantity)=>{
    return(dispatch)=>{
        dispatch({
            type: 'remove',
            payload: quantity
        })
    }
}