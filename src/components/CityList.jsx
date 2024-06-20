import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CitylItem from "./CityItem";
import Message from "./Message";
import PropTypes from "prop-types";


const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="Add your first city by clicking on a city on the map"/>
  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CitylItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Add other properties here
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CityList;
