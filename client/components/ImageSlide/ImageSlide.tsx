"use client";

import { useState, useEffect } from 'react';
import styles from './ImageSlide.module.css';
import Image from 'next/image'
export interface IImageSlideShow {

}

const IMAGES_BANNER = [
{  image:"https://cms.inspirato.com/ImageGen.ashx?image=//media/4553884/RivieraMaya_Res_Mayakoba_GolfView1_LivingRoom2_2560.jpg",
  alt: "image text"
 },
 {  image:"https://cms.inspirato.com/ImageGen.ashx?image=//media/9443208/insp-montagehealdsburg_foss-creek.jpg",
  alt: " image text"
 },
]
const ImageSlideShow: React.FC<IImageSlideShow> = () => {
  const [currentImgIndex, setCuttentImgIndex] = useState(0);
  
useEffect(() => {
 const interval = setInterval(() => {
  setCuttentImgIndex((prevImg) => 
     prevImg < IMAGES_BANNER.length - 1 ? prevImg + 1 : 0 )
 }, 5000);

 return () => clearInterval(interval);

}, [])
  return (
  <div className={styles.container}>
    {IMAGES_BANNER.map((img, index)=> (
 <Image
 key={index}
 className={index === currentImgIndex ? styles.active : ''}
 src={img.image}
 alt={img.alt}
 unoptimized
 fill
/>
    ))}
      
    
    </div>);
};

export default ImageSlideShow;
