import React from 'react'


import { Footer, Blog, Possibility, Features, Whatpage, Header } from './containers';

import { CTA, Brand, Navbar } from './components'


const App = () => {
  return (
    <div className='App'>
      <div>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatpage />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
        
    </div>
  )
}

export default App

// rafce is a react functional component