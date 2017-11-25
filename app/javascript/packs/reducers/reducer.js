import { GET_PLAN, POST_PLAN, MODAL_TOGGLE, RECEIVE_RESPONSE, POST_REQUEST } from '../actions/PlanActions'

const initialState = {
  plan: {
    location: '',
    start_date: '',
    finish_date: '',
    description: '',
  },
  isModalActive: false,
  isFetching: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAN: {
      console.log("GET_PLAN呼ばれた")
      return state
    }
    case POST_PLAN: {
      console.log("POST_PLAN呼ばれた")
      return Object.assign({}, state, {
        isFetching: true
      })
    }
    case RECEIVE_RESPONSE: {
      console.log("RECEIVE_RESPONSE呼ばれた")
      return Object.assign({}, state, {
        isFetching: false
      })
		}
		case POST_REQUEST: {
      console.log("POST_REQUEST呼ばれた")
      return Object.assign({}, state, {
        isFetching: true
      })
    }
    case MODAL_TOGGLE: {
      console.log("MODAL_TOGGLE呼ばれた")
      if( state.isModalActive) {
        return Object.assign({}, state, {
          isModalActive: false
        })
      } else {
        return Object.assign({}, state, {
          isModalActive: true
        })
      }
    }
    default: {
      return state
    }
  }
}

export default reducer