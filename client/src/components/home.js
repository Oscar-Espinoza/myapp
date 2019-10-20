import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header.js'
import HeaderLogo from '../MYtineraryLogo.png'
import ArrowLogo from '../arrowLogo.png'
import homeIcon from '../homeIcon.png'

const Home = () => {
  return(
    <div className="row ">
      <Header srcLogo={HeaderLogo} />
      <div className="col-12 mt-4">
        <p className="text-center">Find your perfect trick, designed by insiders who know and love their cities </p>
      </div>
      <div className="col-12 text-center mt-3" >
        <h4 className="text-center">Start browsing</h4>
        <Link to='/cities'><img src={ArrowLogo} className="App-logo" alt="arrowLogo"></img></Link>
        <p className="pt-4"> Want to build your own MYtinerary </p>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-6 text-center"><a>Login</a></div>
          <div className="col-6"><a>Create account</a></div>
        </div>
      </div>
      <div className="fixed-bottom text-center">
      <img src={homeIcon} className="homeIcon" alt="logo"></img>
      </div>
    </div>
  )
}

export default Home