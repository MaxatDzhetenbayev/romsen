import { Outlet } from "react-router-dom"

export const BaseLayout = () => {
    return (
        <div>
            <aside>

            </aside>
            <main>
                <header>

                </header>
                <Outlet />
            </main>
            <aside>

            </aside>
        </div>
    )
}
