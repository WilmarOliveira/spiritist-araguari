import { useEffect } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useRef } from 'react'
import { Typography } from '@mui/material'

export const ScrollDialog = ({ open, setOpen }) => {
   const descriptionElementRef = useRef(null)
   const generatedDescription = [...new Array(50)]
      .map(() => {
         return `Cras mattis consectetur purus sit amet fermentum. Cras
          justo odio, dapibus ac facilisis in, egestas eget quam.
          Morbi leo risus, porta ac consectetur ac, vestibulum at
          eros. Praesent commodo cursus magna, vel scelerisque
          nisl consectetur et.`
      })
      .join('\n')

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
         <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
         <DialogContent dividers={true}>
            <DialogContentText
               id="scroll-dialog-description"
               ref={descriptionElementRef}
               tabIndex={-1}
            >
               <Typography gutterBottom>{generatedDescription}</Typography>
            </DialogContentText>
         </DialogContent>
         <DialogActions>
            <Button onClick={() => setOpen(false)}>Fechar</Button>
         </DialogActions>
      </Dialog>
   )
}
