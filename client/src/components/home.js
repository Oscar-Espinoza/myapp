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
      <>
      <div className="container h-100 d-flex flex-column justify-content-around ">
        <div className="row mx-auto mt-5 pt-5" >
          <Header srcLogo={HeaderLogo} />
        </div>

        <div className="row">
          <div className="col-12 text-center pt-3" >
            <p>Find your perfect trick, designed by insiders who know and love their cities </p>
            <Link to='/cities'><img src={ArrowLogo} className="arrowLogo" alt="arrowLogo"></img></Link>          
          </div>
        </div>
       <Carousel />
      </div>
        

      </>
      
    )

  }

}

export default Home;