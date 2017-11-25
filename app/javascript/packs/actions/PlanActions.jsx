import fetch from 'cross-fetch'

export const GET_PLAN = 'GET_PLAN'
export const POST_PLAN = 'POST_PLAN'
export const MODAL_TOGGLE = 'MODAL_TOGGLE'
export const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE'

const Actions = {
  getPlan(value) {
    return {
      type: GET_PLAN,
      value
    }
  },
  postPlan(value) {
    return {
      type: POST_PLAN,
      value
    }
  },
  receiveResponse(value) {
    return {
      type: RECEIVE_RESPONSE,
      value
    }
  },
  modalToggle(value) {
    return {
      type: MODAL_TOGGLE,
      value
    }
  },
  request(formData) {
    console.log("request呼ばれた")
    return (dispatch) => {
      const REQUEST_URL = "http://localhost:3002/plans"
      fetch(REQUEST_URL, {
        method: "POST",
        body: formData,
        mode: 'cors',
      })
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText)
        }
        return response
      })
      .then((response) => (response.json()))
      .then((data) => {
        console.log("success")
        console.log(data)
      })
      .then((response) => {
        console.log("最後のpromise")
        console.log(response)
        console.log("終わり")
        // dispatch(Actions.receiveResponse(response))
      })
      .catch((err) => {
        console.log("fail")
        console.log(err)
        dispatch(Actions.receiveResponse(err))
        // dispatch( err => Actions.receiveResponse )
      })
    }
  }
}

export default Actions