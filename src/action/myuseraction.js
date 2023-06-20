export const getUserListStarted = () => ({
  type: 'REQ',
  
})

export const getUserListSuccess = (payload) => ({
  type: 'SUC',
  payload
})

export const getUserListFailure = (payload) => ({
  type: 'FAIL',
  payload
})
