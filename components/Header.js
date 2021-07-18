
import styles from '../styles/header.module.scss';

export default function Header(props) {
  return (
        <header className={styles.Header}>
            <img src='new_images/persoicones-19.svg' className={styles.Header__logo}/>
            <p className={styles.Header__pageName}>{props.pageName}</p>
        </header>

        
  )
}
