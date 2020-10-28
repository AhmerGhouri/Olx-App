

const set_data = (data) => {

    return (dispatch) => {
        dispatch({type : "SET_DATA" , data : data})
        console.log(data)
    }

}


export {
    set_data
}