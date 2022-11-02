import React from 'react'
import { Routes } from 'react-router-dom'

export const MainApp = () => {
  return (
    <>

    <h1>MainApp</h1>
    <hr />
    <Routes>
        
     <Route path="/" element = {<HomePage />}/>   
     <Route path="/" element = {<LoginPage />}/>
     <Route path="/" element = {<AboutPage />}/>   
     <Routes/>





    </>

  )
}
