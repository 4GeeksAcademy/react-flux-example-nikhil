import React from 'react'

import Home from './component/home'

import { ThemeProvider } from '../GlobalContext'

const App = () => {
    return (
        <React.StrictMode>
            <ThemeProvider>
                <Home />
            </ThemeProvider>
        </React.StrictMode>
    )
}

export default App