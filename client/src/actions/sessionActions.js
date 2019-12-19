
export const logOut = () => async (dispatch, getState) => {
    localStorage.removeItem('token')
    dispatch({ type: 'UPDATE_SESSION_STATUS', payload: { loggedIn: false }})
  }
export const logIn = (token) => async (dispatch, getState) => {
    localStorage.setItem('token', token)
    dispatch({ type: 'UPDATE_SESSION_STATUS', payload: { loggedIn: true  }})
  }