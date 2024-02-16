import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar/Sidebar"

export const BaseLayout = () => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 3fr 1fr'
        }}>
            <Sidebar/>
            
            <main>
                <header>

                </header>
                <Outlet />
            </main>
            <aside>
                покупки
            </aside>
        </div>
    )
}




