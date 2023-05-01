import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StyledCard } from './styles';


export const Card = () => {
    return (
        <StyledCard >
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Caminho da Luz
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Saiba Mais</Button>
            </CardActions>
        </StyledCard>
    )
}