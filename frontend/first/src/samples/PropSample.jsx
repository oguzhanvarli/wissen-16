import React from 'react'
import Header from './componentSample/Header'
import Main from './componentSample/Main'
import Footer from './componentSample/Footer'

function PropSample() {

    let headerText = "Merhaba Ben PropSample'dan Header için geldim."
    let mainText = "Merhaba Ben PropSample'dan Main için geldim."
    let footerText = "Merhaba Ben PropSample'dan Footer için geldim."

  return (
    <div>
        <Header yazi={headerText} deneme={22} />
        <Main yazi2={mainText}/>
        <Footer footerText={footerText} />
    </div>
  )
}

export default PropSample