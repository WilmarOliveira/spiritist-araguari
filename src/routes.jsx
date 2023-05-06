import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Center } from './pages/Center'

export const AppRoutes = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<Layout />}>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/center/:id" element={<Center />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}
