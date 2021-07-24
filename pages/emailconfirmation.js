import Header from '../components/Header';
import styles from '../styles/emailconfirmation.module.scss';

import { Grid } from '@material-ui/core';


export default function EmailConfirmation() {
    return (
            <div className={styles.confirmation}>
                <header className={styles.confirmation__header}>
                    <Header pageName='Carta de aceitação'/>
                </header>
                <div className={styles.confirmation__body}>
                    <Grid item xl={3} xs={8} sm={4}>
                        <img src='/new_images/scroll1.svg'/>
                    </Grid>
                </div>
            </div>
    )
}