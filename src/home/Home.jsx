import Featured from "../components/featured/Featured"
import Navbar from "../components/Navbar/Navbar";
import List from "../components/list/List";
import "./home.scss"
import React from "react"
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured type='series' />
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}
export default Home