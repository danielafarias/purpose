import styles from '../styles/components/header.module.scss';

export default function Header(props) {

  if (props.darkMode == false) {
    return (
      <header id={styles.header} className={styles.Header} darkMode={props.darkMode}>
        {props.menu}
        <img src='images/logocomtexto.svg' className={styles.Header__logo} />
        <p className={styles.Header__pageName}>{props.pageName}</p>
        {props.brightnessIcon}
      </header>
    )
  } else {
    return (
      <header id={styles.header} className={styles.Header__dark} darkMode={props.darkMode}>
        {props.menu}
        <img src='images/logocomtexto.svg' className={styles.Header__logo} />
        <p className={styles.Header__pageName}>{props.pageName}</p>
        {props.brightnessIcon}
      </header>
    )
  }
}

