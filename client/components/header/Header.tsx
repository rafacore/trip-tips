import styles from './Header.module.css';
import MainHeaderBackground from './MainHeaderBackground';

export interface IHeader {
  text: string;
  description: string;
  highlightText: string;
}

const Header: React.FC<IHeader> = () => {
  return (
    <header className={styles.header}>
      <>
        <MainHeaderBackground />

        <header className={styles.header}>
          <div className={styles.logo}>Trip tips</div>
        </header>
      </>
    </header>
  );
};

export default Header;
