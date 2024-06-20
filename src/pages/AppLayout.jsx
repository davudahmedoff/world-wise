import Map from "../components/Map"
import Sidebar from "../components/Sidebar"
import styles from "./AppLayout.model.css"


const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar/>
      <Map/>
    </div>
  )
}

export default AppLayout
