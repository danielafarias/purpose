import styles from '../styles/header.module.scss';

export default function HeaderDark(props) {

  return (

        <header className={styles.Header__dark}>
            <img src='images/logocomtexto.svg' className={styles.Header__logo}/>
            <p className={styles.Header__pageName}>{props.pageName}</p>
            {props.brightnessIcon}
        </header>

        
  )
}