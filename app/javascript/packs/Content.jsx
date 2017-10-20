import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Calendar } from './calendar.jsx'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class Content extends React.Component {

  onChangeField = (e) => {
    console.log(e)
  }

  onSubmit = () => {
    console.log("API叩く")
    console.log()
  }

  render(){
    return (
      <div id="content">
        <BrowserRouter>
          <Switch>
            <Route path="/plans/confirmation" component={ Confirmation } />
            <Route path="/plans/new" component={ () => (<MainContainer { ...this.props } onSubmit = {this.onSubmit} onChangeField = { this.onChangeField } />) } />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

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

const MainContainer = props => (
  <div id="main_container">
    <form action="javascript:void(0)" onSubmit = { props.onSubmit } >
      <LocationField { ...props } />
      <DateField { ...props } />
      <DescriptionField { ...props } />
      <button type="submit" className="submit" >プランを投稿する</button>
    </form>
  </div>
)



const LocationField = props => (
  <div id="place_field">
    { console.log(props) }
    <input placeholder="どちらまで" name="location" onChange={ props.onChangeField } />
  </div>
)

const DateField = props => (
  <div id="date_field">
    <div className="date_container">
      <label htmlFor="departure_date">いつから</label>
      <input type="date" id="departure_date" name="start_date" />
    </div>
    <div className="date_container">
      <label htmlFor="come_back_date">いつまで</label>
      <input type="date" id="come_back_date" name="finish_date" />
    </div>
  </div>
)

const DescriptionField = props => (
  <div id="description_field">
    <input placeholder="どんな旅にしたいですか？" name="description" />
  </div>
)

export default Content