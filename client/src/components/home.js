import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './header.js'
import HeaderLogo from '../MYtineraryLogo.png'
import ArrowLogo from '../arrowLogo.png'
import Carousel from './carousel'
class Home extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    }
  }
  onNextClick() {
    this.setState({ activeIndex: this.state.activeIndex + 1 })
  }
  render() {
    return (
      <div className="row mx-auto" >
        <Header srcLogo={HeaderLogo} />
        <div className="col-12 mt-5">
          <p className="text-center mx-auto">Find your perfect trick, designed by insiders who know and love their cities </p>
        </div>
        <div className="col-12 text-center mt-1" >
          <Link to='/cities'><img src={ArrowLogo} className="arrowLogo" alt="arrowLogo"></img></Link>
          <p className="pt-4 text-left"> Popular MYitineraries:</p>
        </div>
        <div className="col-12">
          <Carousel />
        </div>
      </div>
    )

  }

}

export default Home;