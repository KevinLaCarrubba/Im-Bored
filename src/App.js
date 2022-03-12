import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import Nav from './Components/Nav/Nav'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'
const App = () => {
    return (
        <NextUIProvider>
            <Nav />
            <Body />
            <Footer />
        </NextUIProvider>
    )
}

export default App
