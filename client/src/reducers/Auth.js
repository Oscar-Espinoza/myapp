const actions = {
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAIL: 'REGISTER_FAIL'
}

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    user: null
}

export default (state = initialState, action) => {
    const { type, payload }
    switch (type) {
        case 'REGISTER_SUCCESS':
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
            break;
        case 'REGISTER_FAIL':
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated: false,
                loading: false
            }
    
        default:
            return state
        break;
    }
}