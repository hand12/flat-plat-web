import React from 'react'
import { postData } from '../actions/PlanActions'
import PropTypes from 'prop-types'

class MainContainer extends React.Component {

  onSubmit = () => {
    var formData = new FormData(document.getElementById('plans_form'))
    formData.append('plan[location]', this.state.plan.location)
    formData.append('plan[start_date]', this.state.plan.start_date)
    formData.append('plan[finish_date]', this.state.plan.finish_date)
    formData.append('plan[description]', this.state.plan.description)

		this.props.modalToggle()
    this.props.request(formData)
  }

  confirmModalToggle = () => {
    //ここでstateを更新しているので、コンポーネントが作り変えられる。なので、inputの値が消える。
    //このコンポーネントの中で、stateとしてもって、その値をactionにdispatchして更新するのは？
    //valueもその中で渡す。
    this.updatePlan()
    this.props.modalToggle()
  }

  updatePlan = () => {
    let plan = Object.assign({}, this.props.plan)
    plan.location = document.getElementById('location_field').value
    plan.start_date = document.getElementById('departure_date').value
    plan.finish_date = document.getElementById('come_back_date').value
    plan.description = document.getElementById('description_area').value
    this.props.updateStatePlan(plan)
  }

  render() {
    return (
      <div id="content">
        <div id="main_container">
          <form action="javascript:void(0)" id="plans_form">
            <LocationField { ...this.props } />
            <DateField { ...this.props } />
            <DescriptionField { ...this.props } />
            <button type="submit" className="submit" onClick={ this.confirmModalToggle }>プランを投稿する</button>
          </form>
          <ConfirmModal { ...this.props } confirmModalToggle={ this.confirmModalToggle } onSubmit={ this.onSubmit } />
          <LoadingPanel { ...this.props } />
        </div>
      </div>
    )
  }
}

const LocationField = props => (
  <div id="place_field">
    <label>どちらまで</label>
    <input id="location_field" placeholder="北海道旭川市" name="location" defaultValue={ props.plan.location } />
  </div>
)

const DateField = props => (
  <div id="date_field">
    <div className="date_container">
      <label htmlFor="departure_date">いつから</label>
      <input type="date" id="departure_date" name="start_date" defaultValue={ props.plan.start_date } />
    </div>
    <div className="date_container">
      <label htmlFor="come_back_date">いつまで</label>
      <input type="date" id="come_back_date" name="finish_date" defaultValue={ props.plan.finish_date } />
    </div>
  </div>
)

const DescriptionField = props => (
  <div id="description_field">
    <label>どんな旅にしたいですか？</label>
    <textarea id="description_area" rows="5" placeholder="美味しいものをたくさん食べたい！" name="description" defaultValue={ props.plan.description } />
  </div>
)

class ConfirmModal extends React.Component {
  render() {
    if (this.props.isModalActive) {
      return(
        <div id="confirm_modal">
          <div id="modal_background"></div>
          <div id="confirm_content">
            <h2 className="confirm_title">
              以下の内容でplanを投稿します。
            </h2>
            <div className="confirm_location">
              <span>場所:</span>
              <span>{this.props.plan.location}</span>
            </div>
            <div className="confirm_dates">
              <span>日程:</span>
              <span>{this.props.plan.start_date}</span>
              <span>{this.props.plan.finish_date}</span>
            </div>
            <div className="confirm_description">
              <span>一言:</span>
              <span>{this.props.plan.description}</span>
            </div>
            <button className="modal_submit submit cancel_button" onClick={ this.props.confirmModalToggle }>プランを修正する</button>
            <button type="submit" className="modal_submit submit" onClick={ this.props.onSubmit }>プランを投稿する</button>
          </div>
        </div>
      )
    }
    else {
      return false
    }
  }
}


// class ConfirmModal extends React.Component {
//   render() {
// 		let confirmModalClass = this.props.isModalActive ? "ModalIsActive" : "ModalIsNotActive"
// 		let confirmContentClass = this.props.isModalActive ? "ContentIsActive" : "ContentIsNotActive"
//     return(
//       <div id="confirm_modal" className= { confirmModalClass }>
//         <div id="modal_background"></div>
//         <div id="confirm_content" className= { confirmContentClass } >
//           <h2 className="confirm_title">
//             以下の内容でplanを投稿します。
//           </h2>
//           <div className="confirm_location">
//             <span>場所:</span>
//             <span>{this.props.location}</span>
//           </div>
//           <div className="confirm_dates">
//             <span>日程:</span>
//             <span>{this.props.start_date}</span>
//             <span>{this.props.finish_date}</span>
//           </div>
//           <div className="confirm_description">
//             <span>一言:</span>
//             <span>{this.props.description}</span>
//           </div>
//           <button className="modal_submit submit cancel_button" onClick={ this.props.confirmModalToggle }>プランを修正する</button>
//           <button type="submit" className="modal_submit submit" onClick={ this.props.onSubmit }>プランを投稿する</button>
//         </div>
//       </div>
//     )
//   }
// }

class LoadingPanel extends React.Component {
  render() {
    if(this.props.isFetching) {
      return (
        <div id="confirm_modal">
          <div id="modal_background"></div>
          <div id="confirm_content">
            <h2 className="confirm_title">
              読み込み中
            </h2>
            <div id="loading"></div>
          </div>
        </div>
      )
    } else {
      return false
    }
  }
}

export default MainContainer