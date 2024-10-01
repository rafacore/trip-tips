import styles from './Header.module.css';

export interface IHeader {
  text: string;
  description: string;
}

const Header: React.FC<IHeader> = ({ text, description }) => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.highlight}>{text}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
};

export default Header;
