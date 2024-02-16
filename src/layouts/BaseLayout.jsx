import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar/Sidebar"
import { Header } from "../components/Header/Header"

export const BaseLayout = () => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 3fr 1fr'
        }}>
            <Sidebar/>
            
            <main>
                <Header/>
                <Outlet />
            </main>
            <aside>
                покупки
            </aside>
        </div>
    )
}




