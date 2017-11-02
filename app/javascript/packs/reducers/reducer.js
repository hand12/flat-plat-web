import { ADD_PLAN, HOGE_HOGE } from '../actions/PlanActions'

const initialState = {
  plan: {
    location: '',
    start_date: '',
    finish_date: '',
    description: '',
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAN: {
      console.log(action.value)
      return Object.assign({}, state, {
        plan: action.value,
      });
    }
    case HOGE_HOGE: {
      console.log("HOGE_HOGE呼ばれた")
      console.log(action.value)
      return state
    }
    default: {
      return state
    }
  }
}

export default reducer