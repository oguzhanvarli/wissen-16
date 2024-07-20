import { useState } from "react"
import Footer from "./samples/componentSample/Footer"
import Header from "./samples/componentSample/Header"
import Main from "./samples/componentSample/Main"
import CounterSample from "./samples/CounterSample"
import CounterWithState from "./samples/CounterWithState/CounterWithState"
import PropSample from "./samples/PropSample"
import StyleSample from "./samples/StyleSample"
import UseStateSample from "./samples/UseStateSample"


const App = () => {

    const [deneme, setDeneme] = useState(0)
    return (
        <>
            {/* <StyleSample></StyleSample> */}
            {/* <PropSample /> */}
            {/* <UseStateSample /> */}
            {/* <CounterSample /> */}
            <CounterWithState setDeneme={setDeneme} />
            <Footer footerText={deneme}/>
        </>
    )
}

export default App