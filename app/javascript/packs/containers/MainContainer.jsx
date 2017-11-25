import React from 'react'
import { postData } from '../actions/PlanActions'
import PropTypes from 'prop-types'

class MainContainer extends React.Component {

  onChangeField = (e) => {
    var plan = Object.assign({}, this.state);
    plan[e.target.name] = e.target.value
    this.setState(plan)
  }

  onSubmit = () => {
    var formData = new FormData(document.getElementById('plans_form'))
		this.props.modalToggle()
    this.props.request(formData)
  }

  confirmModalToggle = () => {
    this.props.modalToggle()
  }

  render() {
    return (
      <div id="content">
        <div id="main_container">
          <form action="javascript:void(0)" id="plans_form">
            <LocationField { ...this.props } onChangeField={ this.onChangeField } />
            <DateField { ...this.props } onChangeField={ this.onChangeField } />
            <DescriptionField { ...this.props } onChangeField={ this.onChangeField } />
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
    <input placeholder="どちらまで" name="location" onChange={ props.onChangeField } />
  </div>
)

const DateField = props => (
  <div id="date_field">
    <div className="date_container">
      <label htmlFor="departure_date">いつから</label>
      <input type="date" id="departure_date" name="start_date" onChange={ props.onChangeField } />
    </div>
    <div className="date_container">
      <label htmlFor="come_back_date">いつまで</label>
      <input type="date" id="come_back_date" name="finish_date" onChange={ props.onChangeField } />
    </div>
  </div>
)

const DescriptionField = props => (
  <div id="description_field">
    <textarea rows="5" placeholder="どんな旅にしたいですか？" name="description" onChange={ props.onChangeField } />
  </div>
)

class ConfirmModal extends React.Component {
  render() {
		let confirmModalClass = this.props.isModalActive ? "ModalIsActive" : "ModalIsNotActive"
		let confirmContentClass = this.props.isModalActive ? "ContentIsActive" : "ContentIsNotActive"
    return(
      <div id="confirm_modal" className= { confirmModalClass }>
        <div id="modal_background"></div>
        <div id="confirm_content" className= { confirmContentClass } >
          <h2 className="confirm_title">
            以下の内容でplanを投稿します。
          </h2>
          <div className="confirm_location">
            <span>場所:</span>
            <span>{this.props.location}</span>
          </div>
          <div className="confirm_dates">
            <span>日程:</span>
            <span>{this.props.start_date}</span>
            <span>{this.props.finish_date}</span>
          </div>
          <div className="confirm_description">
            <span>一言:</span>
            <span>{this.props.description}</span>
          </div>
          <button className="modal_submit submit cancel_button" onClick={ this.props.confirmModalToggle }>プランを修正する</button>
          <button type="submit" className="modal_submit submit" onClick={ this.props.onSubmit }>プランを投稿する</button>
        </div>
      </div>
    )
  }
}

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