import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Layout } from './layout'
import { About } from './pages/About'

export const AppRoutes = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<Layout />}>
               <Route path="/" element={<Home />} />
               <Route path="/centro/:id" element={<About />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}
