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
    case 'ADDPLAN': {
      console.log(action.value)
      return Object.assign({}, state, {
        plan: action.value,
      });
    }
    default: {
      return state
    }
  }
}

export default reducer