// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Calendar } from './calendar.jsx'

const Content = props => (
  <div id="content">
    <div id="top_menu">
      <div className="button">
        予定を立てる。
      </div>
    </div>
    <MainContainer />
  </div>
)

const MainContainer = props => (
  <div id="main_container">
    <div id="place_field">
      <input placeholder="どちらまで" />
    </div>
    <div id="date_field">
      <div className="date_container">
        <label htmlFor="departure_date">いつから</label>
        <input type="date" id="departure_date" />
      </div>
      <div className="date_container">
        <label htmlFor="come_back_date">いつまで</label>
        <input type="date" id="come_back_date" />
      </div>
    </div>
    <div id="description_field">
      <input placeholder="どんな旅にしたいですか？" />
    </div>
    <button type="submit" className="submit">プランを投稿する</button>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Content />,
    document.getElementById('react_root').appendChild(document.createElement('div')),
  )
})
