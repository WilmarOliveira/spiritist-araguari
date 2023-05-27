import { Card } from '../../components/Card'
import { ContainerCard } from './styles'
import { useContext } from 'react'
import { SpiritistsCenterContext } from '../../context/SpiritistsCenterContext'

export const Home = () => {
   const { spiritistCollection, isLoading } = useContext(
      SpiritistsCenterContext
   )

   if (isLoading)
      return (
         <ContainerCard>
            <div>Loading...</div>
         </ContainerCard>
      )

   return (
      <ContainerCard>
         {spiritistCollection.map((centro) => (
            <Card key={centro.id} {...centro} />
         ))}
      </ContainerCard>
   )
}
