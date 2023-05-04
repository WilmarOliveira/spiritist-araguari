import { Link } from 'react-router-dom'
import { ContainerHeader, TitleHeader } from './styles'

export const Header = () => {
   return (
      <ContainerHeader>
         <TitleHeader to={'/main'}>Araguari Espírita</TitleHeader>
      </ContainerHeader>
   )
}
