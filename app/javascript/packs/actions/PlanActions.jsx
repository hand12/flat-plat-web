export const GET_PLAN = 'GET_PLAN'
export const POST_PLAN = 'POST_PLAN'
export const MODAL_TOGGLE = 'MODAL_TOGGLE'

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
  modalToggle(value) {
    return {
      type: MODAL_TOGGLE,
      value
    }
  }
}

// export const postData = (formData) => {
//   console.log("postDate呼ばれた")
//   const REQUEST_URL = "http://localhost:3002/plans"
//   fetch(REQUEST_URL, {
//     method: "POST",
//     body: formData,
//     mode: 'cors',
//   })
//   .then((response) => {
//     if(!response.ok) {
//       throw Error(response.statusText)
//     }
//     return response
//   })
//   .then((response) => (response.json()))
//   .then((data) => {
//     console.log("success")
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log("fail")
//     console.log(err)
//     // alert(err)
//   })
//   .then((response) => {
//     console.log("最後のpromise")
//     console.log(response)
//     console.log("終わり")
//     despatch(Actions.receiveResponse)
//   })
// }

export default Actions