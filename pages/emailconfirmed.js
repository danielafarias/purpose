import Header from '../components/Header';
import styles from '../styles/pages/emailconfirmed.module.scss'
import { Grid } from '@material-ui/core'

export default function EmailConfirmed() {
    return (
        <div className={styles.confirmation}>
            <header className={styles.confirmation__header}>
                <Header pageName='Carta recebida!' />
            </header>


            <div className={styles.confirmation__body}>
            <Grid item xl={3} xs={8} sm={4}>
                <img src='/new_images/scroll.svg' />
                <a href='/'><img id={styles.imgCastle} src='/images/castle.svg' /></a>
            </Grid>
            </div>
        </div>
    )
}