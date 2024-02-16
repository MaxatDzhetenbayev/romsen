import { Outlet } from "react-router-dom"

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
            <aside>
                покупки
            </aside>
        </div>
    )
}




