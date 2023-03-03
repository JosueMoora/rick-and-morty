import axios from "axios"
export const ADD_FAVORITE = "ADD_FAVORITE"
export const DELETE_FAVORITE = "DELETE_FAVORITE"
export const FILTER= "FILTER"
export const ORDER = "ORDER"
export const addFavorite = (character) => {
    return (dispatch)=> {
        axios.post("http://localhost:3001/favs/create", character).then(response => {
            
            return dispatch({type:ADD_FAVORITE, payload:response.data})
        })
    }
}

export const deleteFavorite = (id) => {
    return (dispatch)=>{
        axios.delete("http://localhost:3001/favs/delete/"+id).then(response =>{

            return dispatch({type:DELETE_FAVORITE, payload:response.data})
        })
    }
}

export const filterCards = (gender) => {
    return {type:FILTER, payload:gender}
}

export const orderCards = (id) => {
    return {type:ORDER, payload: id}
}