import React from 'react';
import Image from 'next/image';
import styles from "../styles/Featured.module.css";
const Featured = () => {
    const images = [
        "/img/pizza.png"
    ];
  return <div className={styles.container}>
      <div className={styles.arrowContainer} style={{left:0}}>
      <Image src="/img/arrowL.png" alt="" layout='fill'  />
      </div>
      <div className={styles.wrapper}>
          
        {images.map((img,i)=>(
            <div className={styles.imgContainer}key = {i}>
            <Image src={img} key={i} alt="" layout='fill'/>
            </div>
        ))}
              
          
      </div>
      <div className={styles.arrowContainer} style={{right:0}}>
      <Image src="/img/arrowR.png" alt="" layout='fill' />
</div>
      </div>;
};

export default Featured;
