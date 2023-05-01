import { Link } from 'react-router-dom'
import { ContainerHeader, TitleHeader } from './styles'

export const Header = () => {
   return (
      <ContainerHeader>
         <TitleHeader to={'/'}>Araguari Espírita</TitleHeader>
      </ContainerHeader>
   )
}
