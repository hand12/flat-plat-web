export const GET_PLAN = 'GET_PLAN'
export const POST_PLAN = 'POST_PLAN'
export const MODAL_TOGGLE = 'MODAL_TOGGLE'
export const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE'
export const POST_REQUEST = 'POST_REQUEST'
export const UPDATE_STATE_PLAN = 'UPDATE_STATE_PLAN'
export const POST_COMPLETE = 'POST_COMPLETE'

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
	postRequest(value) {
		return {
			type: POST_REQUEST,
			value
		}
  },
  updateStatePlan(value) {
    return {
      type: UPDATE_STATE_PLAN,
      value
    }
  },
  modalToggle(value) {
    return {
      type: MODAL_TOGGLE,
      value
    }
  },
  postComplete(value) {
    return {
      type: POST_COMPLETE,
      value
    }
  },
  request(formData) {
    console.log("request呼ばれた")
    return (dispatch) => {
			dispatch(Actions.postRequest())
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
        dispatch(Actions.receiveResponse(response))
        dispatch(Actions.postComplete(response))
      })
      .catch((err) => {
        console.log("fail")
        console.log(err)
        dispatch(Actions.receiveResponse(err))
      })
    }
  }
}

export default Actions