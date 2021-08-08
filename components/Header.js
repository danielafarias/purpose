import styles from '../styles/components/header.module.scss';

export default function Header(props) {

  return (

        <header className={styles.Header}>
            <img src='images/logocomtexto.svg' className={styles.Header__logo}/>
            <p className={styles.Header__pageName}>{props.pageName}</p>
            {props.brightnessIcon}
        </header>

        
  )
}

