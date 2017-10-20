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
      return console.log(action.value)
    }
    default: {
      return state
    }
  }
}

export default reducer