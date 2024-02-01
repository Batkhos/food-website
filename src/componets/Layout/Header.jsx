import React, { Fragment } from 'react'
import Cartbutton from './Cartbutton'
import "./HeaderStyle.css"

export default function Headering (props) {
  return (
    <Fragment>
        <header className='header'>
            <h1>Food Ordering App</h1>
            <Cartbutton onClick={props.onShowCart}/>
        </header>
        <div  className="main-image">
          <img src="https://images.unsplash.com/photo-1699236290868-8070cd393ba6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="food" />
        </div>
    </Fragment>
  )
}
