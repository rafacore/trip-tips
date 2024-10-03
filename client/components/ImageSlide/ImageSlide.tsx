import styles from './ImageSlide.module.css';

export interface IImageSlideShow {
  sampleTextProp: string;
}

const ImageSlideShow: React.FC<IImageSlideShow> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default ImageSlideShow;
