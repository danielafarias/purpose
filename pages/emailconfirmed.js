import LoginHeader from '../components/Header';
import styles from '../styles/emailconfirmed.module.scss'
import { Grid } from '@material-ui/core'

export default function emailconfirmed() {
    return (
        <div className={styles.organizer}>
            <header className={styles.header}>
                <LoginHeader pageName='Email Confirmado!'/>
            </header>
                    <Grid className={styles.teste} item xl={3} xs={8} sm={4}>
                        <img className={styles.scrollImg} src='/new_images/scroll.svg'/>
                        <a href='/'><img className={styles.imgCastle} src='/images/castle3.svg'/></a>
                    </Grid>      
        </div>
    )
}