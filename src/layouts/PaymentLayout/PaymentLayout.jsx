import { Outlet } from "react-router-dom"
import {Header} from '../../components/Header/Header'
export const PaymentLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}
