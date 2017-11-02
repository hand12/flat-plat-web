export const ADD_PLAN = 'ADD_PLAN'
export const ADD_PLAN_SUCCESS = 'ADD_PLAN_SUCCESS'
export const HOGE_HOGE = 'HOGE_HOGE'

const Actions = {
  addPlan(value) {
    console.log("addPlanよばれた")
    return {
      type: ADD_PLAN,
      value,
    }
  },
  addPlanSuccess() {
    return {
      type: ADD_PLAN_SUCCESS
    }
  },
  fetchSample(value) {
    return {
      type: HOGE_HOGE,
      value: fetchLocal()
    }
  }
}

const fetchLocal = () => {
  return fetch('http://localhost:3002/plans').then(response => (response.json))
}

export default Actions