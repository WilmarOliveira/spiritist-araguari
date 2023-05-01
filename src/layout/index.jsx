import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { ContainerLayout } from "./styles"

export const Layout = () => {
    return (
        <ContainerLayout>
            <Header />
            <Outlet />
            <Footer />
        </ContainerLayout>
    )
}