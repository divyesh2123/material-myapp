const initialState = {

    isLoading: false,
    data : [],
    error: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'REQ':
    return { ...state, isLoading : true }

    case 'SUC':
        return { ...state, isLoading : false, data: payload }

        case 'FAIL':
            return { ...state, isLoading : false,error : payload }

  default:
    return state
  }
}
