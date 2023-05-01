import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { StyledCard } from './styles'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Card = ({ name, image, id }) => {
   const navigate = useNavigate()

   const handleOnNavigate = () => {
      navigate(`/centro/${id}`)
   }

   return (
      <StyledCard>
         <CardMedia sx={{ height: 140 }} image={image} title={name} />
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               {name}
            </Typography>
         </CardContent>
         <CardActions>
            <Button onClick={handleOnNavigate} size="small">
               Saiba Mais
            </Button>
         </CardActions>
      </StyledCard>
   )
}
