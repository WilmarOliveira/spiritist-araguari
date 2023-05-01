import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

export const TableActivities = ({ rows }) => {
   return (
      <TableContainer sx={{ maxWidth: '500px' }} component={Paper}>
         <Table sx={{ minWidth: '300px' }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell>Local</TableCell>
                  <TableCell>Horário</TableCell>
                  <TableCell>Atividades</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row) => (
                  <TableRow
                     key={row.id}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                     <TableCell component="th" scope="row">
                        {row.weekday}
                     </TableCell>
                     <TableCell>{row.time}</TableCell>
                     <TableCell>{row.activities}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}
