import React from 'react'
import ReactDOM from 'react-dom'

export const Calendar = () => {
  const today = new Date();
  const thisMonth = today.getMonth() + 1; //thisMonthが-1された値を返すので
  const thisYear = today.getFullYear();
  const lastMonth = thisMonth - 1;
  const nextMonth = thisMonth + 1;

  const lastMonthLastDate = new Date(thisYear, lastMonth, 0);
  const nextMonthFirstDate = new Date(thisYear, nextMonth, 1);
  const thisMonstLastDate = new Date(thisYear, nextMonth, 0);

  const lastMonthDays = [];
  const thisMonthDays = [];
  const nextMonthDays = [];


  for(const i of Array(lastMonthLastDate.getDay()).keys()){
    lastMonthDays.push(lastMonthLastDate.getDate() - i)
  }

  for(const i of Array(thisMonstLastDate.getDate()).keys()){
    thisMonthDays.push(i + 1)
  }
  
  for(const i of Array(nextMonthFirstDate.getDay()).keys()){
    nextMonthDays.push(i + 1)
  }

  const weeks = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"].map((day, index) => (
    <span key={ index }>{day}</span>
  ))
  return (
    <div className="calendar">
      <div className="calendar-header">
        <div className="calendar-year">
          { today.getFullYear() }
        </div>
        <div className="calendar-month">
          { today.getMonth() } month
        </div>
        <div className="calendar-weeks">
          { weeks }
        </div>
      </div>
      <div className="calendar-main">
        <div className="week">
          <span><input type="checkbox" id="day"/><label htmlFor="day">{today.getDate()}</label></span><span><input type="checkbox" id="day2"/><label htmlFor="day2">1</label></span><span><input type="checkbox" id="day3"/><label htmlFor="day3">1</label></span><span><input type="checkbox" id="day4"/><label htmlFor="day4">1</label></span><span><input type="checkbox" id="day5"/><label htmlFor="day5">1</label></span><span><input type="checkbox" id="day6"/><label htmlFor="day6">1</label></span><span><input type="checkbox" id="day7"/><label htmlFor="day7">1</label></span>
        </div>
        <div className="week">
          <span>1</span><span>1</span><span>1</span><span>1</span><span>1</span><span>1</span><span>1</span>
        </div>
        <div className="week">
          <span>1</span><span>1</span><span>1</span><span>1</span><span>1</span><span>1</span><span>1</span>
        </div>
        <div className="week">
          <span>1</span><span>1</span><span>1</span><span>1</span><span>1</span><span>1</span><span>1</span>
        </div>
        <div className="week">
          <span>1</span><span>1</span><span>1</span><span>1</span><span>1</span><span>1</span><span>1</span>
        </div>
      </div>
    </div>
  )
}