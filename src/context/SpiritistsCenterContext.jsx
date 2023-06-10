import { createContext, useEffect, useState } from 'react'
import caminhoDaLuz from '../mocks/caminho-da-luz.json'
import batuira from '../mocks/batuira.json'
import padreZabeu from '../mocks/padre-zabeu.json'
import missionariosDeAlah from '../mocks/missionarios-de-alah.json'
import { database } from '../firebase'
import { ref, onValue } from 'firebase/database'

export const SpiritistsCenterContext = createContext({})

export const SpiritistsCenterProvider = ({ children }) => {
   const [spiritistCollection, setSpiritistCollection] = useState([])
   const [spiritistCenter, setSpiritistCenter] = useState({})
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      function callServer() {
         const starCountRef = ref(database, 'spiritists_center')
         onValue(starCountRef, (snapshot) => {
            let data = []
            snapshot.forEach(function (childSnapshot) {
               var childData = childSnapshot.val()
               data.push({
                  id: childData.id,
                  name: childData.name,
                  image: childData.image,
               })
            })

            setSpiritistCollection(data)
            setIsLoading(false)
         })
      }

      callServer()
   }, [])

   const handleOnSelectedSpiritistCenter = (id) => {
      switch (id) {
         case 'caminho-da-luz':
            verifyCenterHistory(caminhoDaLuz)
            return
         case 'batuira':
            verifyCenterHistory(batuira)
            return
         case 'padre-zabeu':
            verifyCenterHistory(padreZabeu)
            return
         case 'missionarios-de-alah':
            verifyCenterHistory(missionariosDeAlah)
            return
         default:
            setSpiritistCenter({})
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

   return (
      <SpiritistsCenterContext.Provider
         value={{
            spiritistCenter,
            spiritistCollection,
            isLoading,
            handleOnSelectedSpiritistCenter,
         }}
      >
         {children}
      </SpiritistsCenterContext.Provider>
   )
}
