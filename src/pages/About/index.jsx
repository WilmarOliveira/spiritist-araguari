import { useParams } from 'react-router-dom'
import { TableActivities } from '../../components/TableActivities'
import { TableOtherActivities } from '../../components/TableOtherActivities'
import mainActivities from '../../mocks/mainActivities.json'
import otherActivities from '../../mocks/otherActivities.json'

export const About = () => {
   const { id } = useParams()

   return (
      <div>
         <h3>Centro Espírita Caminho da Luz</h3>
         <h4>Atividades no centro</h4>
         <TableActivities rows={mainActivities[id] || []} />
         <h4>Outras Atividades</h4>
         <TableOtherActivities rows={otherActivities[id] || []} />
         <h4>História</h4>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
         </p>
      </div>
   )
}
