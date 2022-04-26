import React, { Component } from 'react'
import CV from '../../assets/cv.pdf'

export class CTA extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='cta'>
          <a href={CV} className='btn'>Download CV</a>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    )
  }
}

export default CTA