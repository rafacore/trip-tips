import styles from './TripsGrid.module.css';
import TripItem, { ITripItem } from '../trips-item/TripItem';

export interface ITripsGrid {
  trips: ITripItem[];
}

const TripsGrid: React.FC<ITripsGrid> = ({ trips }) => {
  return (
    <>
      <ul className={styles.trips}>
        {trips.map((trip: any) => (
          <li key={trip.id}>
            <TripItem {...trip} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TripsGrid;
