import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Calendar } from './calendar.jsx'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const Content = props => (
  <div id="content">
    <BrowserRouter>
      <Switch>
        <Route path="/plans/confirmation" component={ Confirmation } />
        <Route path="/plans/new" component={ () => (<MainContainer { ...props } />) } />
      </Switch>
    </BrowserRouter>
  </div>
)

const Confirmation = () => (
  <div id="main_container">
    <div className="title">
      以下の内容で旅行の募集をかけます。
    </div>
  </div>
)

const TopMenu = props => (
  <div id="top_menu">
    <div className="button">
      予定を立てる。
    </div>
  </div>
)

class MainContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalActive: false
    }
  }

  onChangeField = (e) => {
    var plan = Object.assign({}, this.state);
    plan[e.target.name] = e.target.value
    this.setState(plan)
  }

  onSubmit = () => {
    this.props.addPlan(this.state)
  }

  confirmModalToggle = () => {
    if (this.state.isModalActive) {
      this.setState({ isModalActive: false })
    } else {
      this.setState({ isModalActive: true })
    }
  }

  render() {
    return (
      <div id="main_container">
        {/* <form action="javascript:void(0)" onSubmit = { this.onSubmit } > */}
        <form action="javascript:void(0)">
          <LocationField { ...this.props } onChangeField={ this.onChangeField } />
          <DateField { ...this.props } onChangeField={ this.onChangeField } />
          <DescriptionField { ...this.props } onChangeField={ this.onChangeField } />
          <button type="submit" className="submit" onClick={ this.confirmModalToggle }>プランを投稿する</button>
        </form>
        <ConfirmModal { ...this.state } confirmModalToggle={ this.confirmModalToggle }/>
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
    <input placeholder="どんな旅にしたいですか？" name="description" onChange={ props.onChangeField } />
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
              <span>北海道</span>
            </div>
            <div className="confirm_dates">
              <span>日程:</span>
              <span>2017/10/27 - 2017/10/28</span>
            </div>
            <div className="confirm_description">
              <span>一言:</span>
              <span>楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行</span>
            </div>
            <button className="modal_submit submit cancel_button" onClick={ this.props.confirmModalToggle}>プランを修正する</button>
            <button type="submit" className="modal_submit submit" >プランを投稿する</button>
          </div>
        </div>
      )
    } else {
      return false
    }
  }
}

// const ConfirmModal = props => (
//   <div id="confirm_modal">
//     <div id="modal_background"></div>
//     <div id="confirm_content">
//       <h2 className="confirm_title">
//         以下の内容でplanを投稿します。
//       </h2>
//       <div className="confirm_location">
//         <span>場所:</span>
//         <span>北海道</span>
//       </div>
//       <div className="confirm_dates">
//         <span>日程:</span>
//         <span>2017/10/27 - 2017/10/28</span>
//       </div>
//       <div className="confirm_description">
//         <span>一言:</span>
//         <span>楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行楽しい旅行</span>
//       </div>
//       <button type="submit" className="submit" >プランを投稿する</button>
//     </div>
//   </div>
// )

export default Content