import { useParams } from 'react-router-dom'
import { TableActivities } from '../../components/TableActivities'
import { TableOtherActivities } from '../../components/TableOtherActivities'
import mainActivities from '../../mocks/mainActivities.json'
import otherActivities from '../../mocks/otherActivities.json'
import { Caption, ContainerAbout } from './styles'
import { useState } from 'react'
import { ScrollDialog } from '../../components/ScrollDialog'

export const About = () => {
   const { id } = useParams()
   const [open, setOpen] = useState(false)

   return (
      <ContainerAbout>
         <h3>Centro Espírita Caminho da Luz</h3>
         <Caption>Atividades no centro</Caption>
         <TableActivities rows={mainActivities[id] || []} />
         <Caption>Outras Atividades</Caption>
         <TableOtherActivities rows={otherActivities[id] || []} />
         <Caption>História</Caption>
         <button onClick={setOpen}>
            Clique aqui para ver a história do centro
         </button>
         <Caption>Contato</Caption>
         <span>Nome: (34) 0000-0000</span>
         <ScrollDialog open={open} setOpen={setOpen} />
      </ContainerAbout>
   )
}
