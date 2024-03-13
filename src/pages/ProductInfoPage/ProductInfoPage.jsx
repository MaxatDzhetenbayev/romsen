import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from "./ProductInfoPage.module.css";




export const ProductInfoPage = () => {
  
  const {id} = useParams()
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)
  useEffect(() => {
  fetch(`https://65e830004bb72f0a9c4e817e.mockapi.io/api/v1/products/${id}`)
  .then((res) => {return res.json()})
  .then((data) => {setProduct(data); setLoading(false)})  
  }, [])
  
  return (
    <div>
    {product ? (
      
      <div className={styles.prodInfo}>
      {/* <Link to = "#" onClick={history.back()}>Назад</Link> */}
      <img src={product.imagePath} alt="" />
    
      <div className={styles.prodDiv}>
        <p className={styles.prodName}>{product.name}</p>
        <p className={styles.prodGrams}>{product.grams} грамм</p>
        <p className={styles.prodPrice}>{product.price} ТЕНГЕ</p>
        
        <p className={styles.prodСompos}>Состав</p>
        <p className={styles.prodСomposition}>Лосось, сыр, огурец, авокадо</p>
        <button className={styles.wantBtn} >Хочу!</button>
      </div>
      </div>
    ) : (
      <div class={styles.loader}></div>
    )}
  </div>
);
};
  
