import { GET_PLAN, POST_PLAN, MODAL_TOGGLE, RECEIVE_RESPONSE, POST_REQUEST, UPDATE_STATE_PLAN, POST_COMPLETE } from '../actions/PlanActions'

const initialState = {
  plan: {
    location: '',
    start_date: '',
    finish_date: '',
    description: '',
  },
  isModalActive: false,
  isFetching: false,
  isComplete: false,
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
    case UPDATE_STATE_PLAN: {
      console.log("UPDATE_STATE_PLAN呼ばれた")
      return Object.assign({}, state, {
        plan: action.value
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
    case POST_COMPLETE: {
      console.log("POST_COMPLETE呼ばれた")
      if( state.isComplete) {
        return Object.assign({}, state, {
          isComplete: false
        })
      } else {
        return Object.assign({}, state, {
          isComplete: true
        })
      }
    }
    default: {
      return state
    }
  }
}

export default reducer