
import React, { Component } from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.png'

export class Header extends Component {
  static propTypes = {}

  render() {
    return (
      <div id="header" className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Joffrey Trébot</h1>
        <h5 className='text-light'>Software Engineer</h5>   
        <CTA />

        <div id="picOfMe" className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    )
  }
}

export default Header