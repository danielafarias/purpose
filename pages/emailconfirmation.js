import LoginHeader from '../components/Header';
import styles from '../styles/emailconfirmation.module.scss'
import { Grid, Box, TextField } from '@material-ui/core'

export default function emailconfirmation() {
    return (
            <div className={styles.organizer}>
                <header className={styles.header}>
                    <LoginHeader pageName='Confirme o Email!'/>
                </header>
                <div className={styles.organizeDiv}>
                    <Grid className={styles.teste} item xl={3} xs={8} sm={4}>
                        <img className={styles.scrollImg} src='/new_images/scroll3.svg'/>
                    </Grid>
                </div>
            </div>
    )
}