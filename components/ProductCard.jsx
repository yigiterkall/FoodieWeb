import React from 'react'
import styles from "../styles/ProductCard.module.css"
import Image from "next/image"
const ProductCard = ()=> {
  return (
    <div className={styles.container}>
        <Image src = "/img/pizza.png" alt="" width="500" height="500"/>
        <h1 className={styles.title}>Title</h1>
        <span className={styles.price}>$9</span>
        <p>This is pizza</p>
    </div>
  )
}

export default ProductCard