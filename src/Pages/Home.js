import React from 'react'
import Banner from '../Components/Banner/Banner';
import Header from '../Components/Header/Header';
import Posts from '../Components/Posts/Post';

function Home(props) {
  return (
    <div className="homeParentDiv">
    <Header/>
    <Banner/>
    <Posts/>
    {/* <Footer /> */}
    </div>
  )
}

export default Home;