import React from 'react'
import About from './components/About'
import MenuSection from './components/MenuSection'
import Contact from './components/Contact'

function PageContent() {
  return (
    <div className="w3-content" style={{ maxWidth: 1100 }}>
      <About />
      <MenuSection />
      <Contact/>
    </div>
  )
}

export default PageContent