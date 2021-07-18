
import styles from '../styles/loginHeader.module.scss';

export default function LoginHeader(props) {
  return (
        <header className={styles.header}>
            <img src='new_images/persoicones-19.svg' className={styles.headerLogo}/>
            <p className={styles.pageName}>{props.pageName}</p>
        </header>

        
  )
}
