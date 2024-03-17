import React from 'react'
import { Footer,Blog,Possibility,Features,Header,WhatGPT3 } from './container/index';
import {Cta,Brand,Navbar} from './component'; 
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <div className='bg'>
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer></Footer>
    </div>
  )
}

export default App
