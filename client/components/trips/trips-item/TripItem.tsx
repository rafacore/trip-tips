import Image from 'next/image';
import styles from './TripItem.module.css';

export interface ITripItem {
  id: number;
  heroImage: string;
  unitName: string;
  unitStyleName?: string;
  checkInDate?: string;
}

const TripItem: React.FC<ITripItem> = ({
  heroImage,
  unitName,
  unitStyleName,
  checkInDate,
}) => {
  return (
    <article className={styles.trip}>
      <header>
        <div className={styles.image}>
          <Image
            src={`https://cms.inspirato.com/ImageGen.ashx?image=/${heroImage}`}
            alt={unitName}
            unoptimized
            fill
          />
        </div>
        <div className={styles.headerText}>
          <h2>{unitName}</h2>
          <p>Check in date {checkInDate}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{unitStyleName}</p>
      </div>
    </article>
  );
};

export default TripItem;
