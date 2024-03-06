import styles from './Menu.module.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <>
      <div className={styles.menu_categories}>
        <Link to='/categories/pizza'>
          <img src="menu/pizza.png" alt="" />
        </Link>
        <Link to='/categories/sets'>
          <img src="menu/sets.png" alt="" />
        </Link>
        <Link to='/categories/wok'>
          <img src="menu/wok.png" alt="" />
        </Link>
        <Link to='/categories/rolls'>
          <img src="menu/rolls.png" alt="" />
        </Link>
        <Link to='/categories/sushi'>
          <img src="menu/sushi.png" alt="" />
        </Link>
        <Link to='/categories/soups'>
          <img src="menu/soup.png" alt="" />
        </Link>
        <Link to='/categories/salats'>
          <img src="menu/salads.png" alt="" />
        </Link>
        <Link to='/categories/drinks'>
          <img src="menu/drinks.png" alt="" />
        </Link>
      </div>









    </>
  )
}
