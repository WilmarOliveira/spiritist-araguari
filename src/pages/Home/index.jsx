import { Card } from "../../components/Card"
import { ContainerCard, ContainerHome } from "./styles"

export const Home = () => {
    return(
        <ContainerHome>
            <ContainerCard>
                <Card />
                <Card />
                <Card />
                <Card />
            </ContainerCard>
        </ContainerHome>
    )
}