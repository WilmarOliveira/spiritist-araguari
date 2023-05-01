import { Card } from '../../components/Card'
import { ContainerCard } from './styles'
import spiritistsCenter from '../../mocks/spiritistsCenter.json'

export const Home = () => {
   const defaultImage =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/LLDE_cep_vigne.jpg/1200px-LLDE_cep_vigne.jpg'
   const spiritistsCenterWithDefaultImage = spiritistsCenter.map((item) => {
      return { ...item, image: defaultImage }
   })

   return (
      <ContainerCard>
         {spiritistsCenterWithDefaultImage.map((centro) => (
            <Card key={centro.id} {...centro} />
         ))}
      </ContainerCard>
   )
}
