// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Calendar } from './calendar.jsx'

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      start_date: '',
      finish_date: '',
      description: '',
    }
  }

  onChangeField = (e) => {
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state)
  }

  onSubmit = () => {
    console.log("API叩く")
    console.log(this.state)
  }

  render(){
    return (
      <div id="content">
        {/* <TopMenu /> */}
        <MainContainer { ...this.state } onChangeField = { this.onChangeField } onSubmit = {this.onSubmit} />
      </div>
    )
  }
}

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
      <LocationField onChangeField = { props.onChangeField } />
      <DateField onChangeField = { props.onChangeField } />
      <DescriptionField onChangeField = { props.onChangeField } />
      <button type="submit" className="submit" >プランを投稿する</button>
    </form>
  </div>
)



const LocationField = props => (
  <div id="place_field">
    <input placeholder="どちらまで" name="location" onChange = { props.onChangeField } />
  </div>
)

const DateField = props => (
  <div id="date_field">
    <div className="date_container">
      <label htmlFor="departure_date">いつから</label>
      <input type="date" id="departure_date" name="start_date" onChange = { props.onChangeField } />
    </div>
    <div className="date_container">
      <label htmlFor="come_back_date">いつまで</label>
      <input type="date" id="come_back_date" name="finish_date" onChange = { props.onChangeField } />
    </div>
  </div>
)

const DescriptionField = props => (
  <div id="description_field">
    <input placeholder="どんな旅にしたいですか？" name="description" onChange = { props.onChangeField } />
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Content />,
    document.getElementById('react_root').appendChild(document.createElement('div')),
  )
})
