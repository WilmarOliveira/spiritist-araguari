import { useParams } from 'react-router-dom'
import { TableActivities } from '../../components/TableActivities'
import { TableOtherActivities } from '../../components/TableOtherActivities'
import mainActivities from '../../mocks/mainActivities.json'
import otherActivities from '../../mocks/otherActivities.json'
import { Caption, ContainerAbout, Description } from './styles'

export const About = () => {
   const { id } = useParams()

   return (
      <ContainerAbout>
         <h3>Centro Espírita Caminho da Luz</h3>
         <Caption>Atividades no centro</Caption>
         <TableActivities rows={mainActivities[id] || []} />
         <Caption>Outras Atividades</Caption>
         <TableOtherActivities rows={otherActivities[id] || []} />
         <Caption>História</Caption>
         <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
         </Description>
         <Caption>Contato</Caption>
         <span>Nome: (34) 0000-0000</span>
      </ContainerAbout>
   )
}
