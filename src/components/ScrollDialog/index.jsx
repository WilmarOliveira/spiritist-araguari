import { useEffect } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useRef } from 'react'
import { Typography } from '@mui/material'

export const ScrollDialog = ({ open, setOpen, history, title }) => {
   const descriptionElementRef = useRef(null)

   useEffect(() => {
      if (open) {
         const { current: descriptionElement } = descriptionElementRef
         if (descriptionElement !== null) {
            descriptionElement.focus()
         }
      }
   }, [open])

   return (
      <Dialog
         open={open}
         onClose={() => setOpen(false)}
         scroll={'paper'}
         aria-labelledby="scroll-dialog-title"
         aria-describedby="scroll-dialog-description"
      >
         <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
         <DialogContent dividers={true}>
            <DialogContentText
               id="scroll-dialog-description"
               ref={descriptionElementRef}
               tabIndex={-1}
            >
               <Typography gutterBottom>{history}</Typography>
            </DialogContentText>
         </DialogContent>
         <DialogActions>
            <button onClick={() => setOpen(false)}>Fechar</button>
         </DialogActions>
      </Dialog>
   )
}
