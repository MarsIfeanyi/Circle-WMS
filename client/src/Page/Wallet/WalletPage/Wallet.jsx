import DashNavbar from "../../../Components/DashNavbar/DashNavbar"
import DidYouKnow from "../../../Components/DidYouKnow/DidYouKnow"
import Sheader from "../../Settings/SettingsComponents/Header/Sheader"

import styles from './wallet.module.css'
import { Outlet } from "react-router-dom"
 

function Wallet() {
  return (
    <div>
      <DashNavbar title="Wallet" />
      <Sheader/>
      <main className={styles['wallet-home']}>

        <Outlet/>

        <div className={styles['layout-2']}>
          <DidYouKnow/>
          <DidYouKnow/>
        </div>
        
      </main>
    </div>
  )
}

export default Wallet
