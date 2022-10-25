import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Main from './Main'

export default function layoutPage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
    </div>
  )
}
