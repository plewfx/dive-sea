import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

function Layout() {
  return (
    <>
        <Header />
        <main className="flex-auto pt-[10.3vw] overflow-hidden">
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout