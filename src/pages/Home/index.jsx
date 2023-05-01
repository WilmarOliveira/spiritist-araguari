import { Card } from "../../components/Card"
import { ContainerCard, ContainerHome } from "./styles"

export const Home = () => {

    const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/LLDE_cep_vigne.jpg/1200px-LLDE_cep_vigne.jpg'

    const centros = [
        {id:1, name: 'Caminho da Luz', image:defaultImage}, 
        {id:2, name: 'Batuíra', image:defaultImage},
        {id:3, name: 'Padre Zabeu', image:defaultImage},
        {id:4, name: 'Missionários de Alah', image:defaultImage},
    ]

    return(
        <ContainerCard>
            {centros.map((centro) => (
                <Card key={centro.id} {...centro} />
            ))}
        </ContainerCard>
    )
}