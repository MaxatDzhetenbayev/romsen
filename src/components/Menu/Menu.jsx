import styles from './Menu.module.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <>
      <div className={styles.menu_categories}>
        <Link>
          <img src="menu/pizza.png" alt="" />
        </Link>
        <Link>
          <img src="menu/sets.png" alt="" />
        </Link>
        <Link>
          <img src="menu/wok.png" alt="" />
        </Link>
        <Link>
          <img src="menu/rolls.png" alt="" />
        </Link>
        <Link>
          <img src="menu/sushi.png" alt="" />
        </Link>
        <Link>
          <img src="menu/soup.png" alt="" />
        </Link>
        <Link>
          <img src="menu/salads.png" alt="" />
        </Link>
        <Link>
          <img src="menu/drinks.png" alt="" />
        </Link>
      </div>









    </>
  )
}
