import styles from "./Map.module.css";
import { useLocation } from "react-router-dom";

const Map = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const handlePositionChange = () => {
    // Update the URL search parameters
    searchParams.set("lat", "23");
    searchParams.set("lng", "50");

    // Update the browser's location with the new search parameters
  };

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h1>
        Positions: {lat}, {lng}
      </h1>
      <button onClick={()=>{
        console.log("button clicked");
        handlePositionChange}}>Change positions</button>
    </div>
  );
};

export default Map;
