// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Calendar } from './calendar.jsx'

const Content = props => (
    <div id="content">
      {/* <TopMenu /> */}
      <MainContainer/>
    </div>
)

const TopMenu = props => (
  <div id="top_menu">
    <div className="button">
      予定を立てる。
    </div>
  </div>
)

const MainContainer = props => {
  const handleSubmit = () => {
    console.log("ほげ")
  }

  const setValue = (value) => {
    console.log(value)
  }
  return (
    <div id="main_container">
      <form action="javascript:void(0)" onSubmit={ handleSubmit }>
        <PlaceField setValue = { setValue } />
        <DateField setValue = { setValue } />
        <DescriptionField setValue = { setValue } />
        <button type="submit" className="submit" >プランを投稿する</button>
      </form>
    </div>
  )
}

const PlaceField = props => (
  <div id="place_field">
    <input placeholder="どちらまで" onChange = { e => props.setValue(e.target.value) } />
  </div>
)

const DateField = props => (
  <div id="date_field">
    <div className="date_container">
      <label htmlFor="departure_date">いつから</label>
      <input type="date" id="departure_date" onChange = { e => props.setValue(e.target.value) } />
    </div>
    <div className="date_container">
      <label htmlFor="come_back_date">いつまで</label>
      <input type="date" id="come_back_date" onChange = { e => props.setValue(e.target.value) } />
    </div>
  </div>
)

const DescriptionField = props => (
  <div id="description_field">
    <input placeholder="どんな旅にしたいですか？" onChange = { e => props.setValue(e.target.value) } />
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Content />,
    document.getElementById('react_root').appendChild(document.createElement('div')),
  )
})
