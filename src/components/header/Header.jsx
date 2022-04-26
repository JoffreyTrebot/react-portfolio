
import React, { Component } from 'react'
import './header.css'

export class Header extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Joffrey Trébot</h1>
        <h5 className='text-light'>Software Engineer</h5>   
      </div>
    )
  }
}

export default Header