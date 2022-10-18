import React from 'react'
import Layout from '../Components/Layout'
import "../Assets/Scss/Theme.scss"
import LeftSideBar from '../Components/LeftSideBar'
import RightSideBar from '../Components/RightSideBar'
import MainContent from '../Components/MainContent'
import CustomizeTheme from '../Components/CustomizeTheme'


const Home = () => {


  return (
    <Layout>
      <LeftSideBar/> 
      <MainContent/>
      <RightSideBar/>
      <CustomizeTheme/>
    </Layout>
  )
}

export default Home