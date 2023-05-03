import { useParams } from 'react-router-dom'
import { TableActivities } from '../../components/TableActivities'
import { TableOtherActivities } from '../../components/TableOtherActivities'
import { Caption, ContainerAbout } from './styles'
import { useContext, useEffect, useState } from 'react'
import { ScrollDialog } from '../../components/ScrollDialog'
import { SpiritistsCenterContext } from '../../context/SpiritistsCenterContext'

export const About = () => {
   const { spiritistCenter, handleOnSelectedSpiritistCenter } = useContext(
      SpiritistsCenterContext
   )
   const { id } = useParams()
   const [open, setOpen] = useState(false)

   useEffect(() => {
      console.log(id)
      handleOnSelectedSpiritistCenter(id)
   }, [])

   return (
      <ContainerAbout>
         <h3>{spiritistCenter?.title}</h3>
         <Caption>Atividades no centro</Caption>
         <TableActivities rows={spiritistCenter?.mainActivities || []} />
         <Caption>Outras Atividades</Caption>
         <TableOtherActivities rows={spiritistCenter?.otherActivities || []} />
         <Caption>História</Caption>
         <button onClick={setOpen}>
            Clique aqui para ver a história do centro
         </button>
         <Caption>Contato</Caption>
         <span>
            {spiritistCenter?.contact?.name}: {spiritistCenter?.contact?.phone}
         </span>
         <ScrollDialog
            open={open}
            setOpen={setOpen}
            title={spiritistCenter?.title}
            history={spiritistCenter?.history}
         />
      </ContainerAbout>
   )
}
