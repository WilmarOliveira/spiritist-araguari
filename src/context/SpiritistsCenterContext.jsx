import { createContext, useEffect, useState } from 'react'
import allSpiritistsCenter from '../mocks/spiritistsCenter.json'
import caminhoDaLuz from '../mocks/caminho-da-luz.json'

export const SpiritistsCenterContext = createContext({})

export const SpiritistsCenterProvider = ({ children }) => {
   const [spiritistCollection, setSpiritistCollection] = useState([])
   const [spiritistCenter, setSpiritistCenter] = useState({})

   const handleOnSelectedSpiritistCenter = (id) => {
      switch (id) {
         case 'caminho-da-luz':
            verifyCenterHistory(caminhoDaLuz)
            return
         default:
            verifyCenterHistory({})
            return
      }
   }

   //TODO research the true history of the center and remove this function
   const verifyCenterHistory = (center) => {
      if (!center.history) {
         const generatedDescription = [...new Array(10)]
            .map(() => {
               return `Cras mattis consectetur purus sit amet fermentum. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at
                eros. Praesent commodo cursus magna, vel scelerisque
                nisl consectetur et.`
            })
            .join('\n')

         setSpiritistCenter({ ...center, history: generatedDescription })
      } else {
         setSpiritistCenter(center)
      }
   }

   const defaultImage =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/LLDE_cep_vigne.jpg/1200px-LLDE_cep_vigne.jpg'
   const spiritistsCenterWithDefaultImage = allSpiritistsCenter.map((item) => {
      return { ...item, image: defaultImage }
   })

   useEffect(() => {
      setSpiritistCollection(spiritistsCenterWithDefaultImage)
   }, [])

   return (
      <SpiritistsCenterContext.Provider
         value={{
            spiritistCenter,
            spiritistCollection,
            handleOnSelectedSpiritistCenter,
         }}
      >
         {children}
      </SpiritistsCenterContext.Provider>
   )
}
