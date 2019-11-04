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
        <div className="row mx-auto pt-2 w-100" >
          <Header srcLogo={HeaderLogo} />
        </div>

        <div className="row w-100">
          <div className="col-12 text-center w-100" >
            <p className="text-center mx-auto">Find your perfect trick, designed by insiders who know and love their cities </p>
            <Link to='/cities'><img src={ArrowLogo} className="arrowLogo" alt="arrowLogo"></img></Link>          
          </div>
        </div>
       <Carousel />
        

      </>
      
    )

  }

}

export default Home;