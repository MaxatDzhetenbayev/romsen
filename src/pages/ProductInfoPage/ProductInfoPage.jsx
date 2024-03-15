import  { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from "./ProductInfoPage.module.css";
import { NewProducts } from '../../components/NewProducts/NewProducts';
import { CartContext } from '../../context/cart.context';

export const ProductInfoPage = () => {
  
  const {id} = useParams()
  const {addToCart} = useContext(CartContext)
  const [product, setProduct] = useState(null)
  useEffect(() => {
  fetch(`https://65e830004bb72f0a9c4e817e.mockapi.io/api/v1/products/${id}`)
  .then((res) => {return res.json()})
  .then((data) => {setProduct(data)})  
  }, [])
  
  

  return (
    <div>
      <div className={styles.navigButton}>
      <Link to = "#" onClick={() => history.back()}  style={{display: "flex", alignItems: "center", gap: 10}}> 
      <img src="/Arrow.png" alt="" width={20} height={20} />
      Назад</Link>
      </div>

    {product ? (
      <div>
      <div className={styles.prodInfo}>
      <img src={product.imagePath} alt="" />
    
      <div className={styles.prodDiv}>
        <p className={styles.prodName}>{product.name}</p>
        <p className={styles.prodGrams}>{product.grams} грамм</p>
        <p className={styles.prodPrice}>{product.price} ТЕНГЕ</p>
        
        <p className={styles.prodСompos}>Состав</p>
        <p className={styles.prodСomposition}>Лосось, сыр, огурец, авокадо</p>
        <button className={styles.wantBtn} onClick={() => addToCart(product)}>Хочу!</button>
      </div>
      </div>
      <div className={styles.prodSlider}>
      <NewProducts />
      </div>
      </div>
    ) : (
      <div className={styles.loader}></div>
    )}
  </div>
);
};
  
