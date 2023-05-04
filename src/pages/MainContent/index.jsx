import { Card } from '../../components/Card'
import { ContainerCard } from './styles'
import { useContext } from 'react'
import { SpiritistsCenterContext } from '../../context/SpiritistsCenterContext'

export const MainContent = () => {
   const { spiritistCollection } = useContext(SpiritistsCenterContext)

   return (
      <ContainerCard>
         {spiritistCollection.map((centro) => (
            <Card key={centro.id} {...centro} />
         ))}
      </ContainerCard>
   )
}
