import { Outlet } from "react-router-dom"
import { Aside } from "../components/Aside/Aside"


export const BaseLayout = () => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 3fr 1fr'
        }}>
            <aside >
                <nav>
                    навишация
                </nav>
            </aside>
            <main>
                <header>

                </header>
                <Outlet />
            </main>
            <Aside>
                покупки
            </Aside>
        </div>
    )
}




