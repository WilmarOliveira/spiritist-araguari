import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainContent } from './pages/MainContent'
import { Layout } from './layout'
import { About } from './pages/About'

export const AppRoutes = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<Layout />}>
               <Route path="/main" element={<MainContent />} />
               <Route path="/about/:id" element={<About />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}
