import axios from 'axios'
const actions = {
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAIL: 'REGISTER_FAIL',
}

export const register = ({name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({name, email, password})}

    try {
        const res = await axios.post('http://localhost:5000/user', body, config)
            .then(res => {
                dispatch({
                    type: actions.REGISTER_SUCCESS,
                    payload: res.data
                })
            })
    } catch (error) {
        dispatch({
            type: actions.REGISTER_FAIL
        })
    }
}