import { useState, useRef, useEffect } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { IconButton, ListItemIcon, ListItemText } from '@mui/material'
import ListIcon from '@mui/icons-material/List'
import InfoIcon from '@mui/icons-material/Info'
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from 'react-router-dom'

export default function MenuOptions() {
   const navigate = useNavigate()
   const menuRef = useRef(null)
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = (path) => {
      navigate(path)
      setAnchorEl(null)
   }

   useEffect(() => {
      function handler(event) {
         if (!menuRef.current?.contains(event.target)) {
            setAnchorEl(null)
         }
      }
      window.addEventListener('click', handler)
      return () => window.removeEventListener('click', handler)
   }, [])

   return (
      <div style={{ paddingTop: '5px' }} ref={menuRef}>
         <IconButton
            style={{ color: '#fff' }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
         >
            <ListIcon />
         </IconButton>
         <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
         >
            <MenuItem
               style={{ width: '120px' }}
               onClick={() => handleClose('/')}
            >
               <ListItemIcon>
                  <HomeIcon fontSize="small" />
               </ListItemIcon>
               <ListItemText style={{ paddingTop: '5px' }}>Início</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => handleClose('/sobre')}>
               <ListItemIcon>
                  <InfoIcon fontSize="small" />
               </ListItemIcon>
               <ListItemText style={{ paddingTop: '5px' }}>Sobre</ListItemText>
            </MenuItem>
         </Menu>
      </div>
   )
}
