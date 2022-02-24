import React from "react";
import Image from "next/image";
import styles from "../styles/Featured.module.css";
import { useState } from "react";
const Featured = () => {
  const [index,setIndex] = useState(0);
  const images = ["/img/pizza.png"];

  const handleArrow = (direction)=>{
    if(direction === "1"){
      setIndex(index!== 0 ? index-1:2)
    }
    if(direction === "r"){
      setIndex(index!== 2 ? index+1:0)
    }
  }

  
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick = {()=>handleArrow("1")}>
        <Image src="/img/arrowL.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100 * index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} key={i} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }}onClick = {()=>handleArrow("r")}>
        <Image src="/img/arrowR.png" alt="" layout="fill" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Featured;
