import { useParams } from "react-router-dom"

export const About = () => {
    const {id} = useParams()
    return <div>Saiba Mais{id}</div>
}