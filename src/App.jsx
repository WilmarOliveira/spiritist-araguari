import React from 'react'
import { Theme } from './theme/Theme'
import { AppRoutes } from './routes'
import { SpiritistsCenterProvider } from './context/SpiritistsCenterContext'

function App() {
   return (
      <SpiritistsCenterProvider>
         <Theme>
            <AppRoutes />
         </Theme>
      </SpiritistsCenterProvider>
   )
}

export default App
