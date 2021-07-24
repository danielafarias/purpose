import Header from '../components/Header';
import styles from '../styles/emailconfirmed.module.scss'

import { Grid } from '@material-ui/core'


export default function EmailConfirmed() {
    return (
        <div className={styles.confirmation}>
            <header className={styles.confirmation__header}>
                <Header pageName='Carta recebida!' />
            </header>
            <Grid item xs={8} sm={4}>
                <div className={styles.confirmation__body}>
                    <img src='/new_images/scroll2.svg'/>
                    <a href='/'></a>             
                </div> 
            </Grid>
        </div>
    )
}