import React from 'react';
import { Grid } from '@material-ui/core'
import LoginHeader from '../components/Header';
import FloatMenu from '../components/FloatMenu';
import styles from '../styles/pages/challenges.module.scss'

export default function challenges() {

    return (
        <div className={styles.organizer}>
            <header className={styles.header}>
                    <LoginHeader pageName='Desafios'/>
            </header>
            <Grid Container>
                <Grid className={styles.emailConfirmation} item xs={8} sm={4}>
                    <div className={styles.challengeBox}>
                    <div className={styles.container}></div>
                    <img className={styles.progIcon} src='/new_images/redes-03.svg'/>
                    <div className={styles.challengeTitle}>Título</div>  
                    <div className={styles.challengeDescription}>Pequasdkashdujuashduashdasudhs uashduashdsaudhsaudhsu uashdasuhdena descrição do negócio</div>              
                    </div> 
                </Grid>
                <Grid className={styles.emailConfirmation} item xs={8} sm={4}>
                    <div className={styles.challengeBox}>
                    <div className={styles.container}></div>
                    <img className={styles.progIcon} src='/new_images/redes-03.svg'/>
                    <div className={styles.challengeTitle}>Título</div>  
                    <div className={styles.challengeDescription}>Pequasdkashdujuashduashdasudhs uashduashdsaudhsaudhsu uashdasuhdena descrição do negócio</div>              
                    </div> 
                </Grid>
                <Grid className={styles.emailConfirmation} item xs={8} sm={4}>
                    <div className={styles.challengeBox}>
                    <div className={styles.container}></div>
                    <img className={styles.progIcon} src='/new_images/redes-03.svg'/>
                    <div className={styles.challengeTitle}>Título</div>  
                    <div className={styles.challengeDescription}>Pequasdkashdujuashduashdasudhs uashduashdsaudhsaudhsu uashdasuhdena descrição do negócio</div>              
                    </div> 
                </Grid>
                <Grid className={styles.emailConfirmation} item xs={8} sm={4}>
                    <div className={styles.challengeBox}>
                    <div className={styles.container}></div>
                    <img className={styles.progIcon} src='/new_images/redes-03.svg'/>
                    <div className={styles.challengeTitle}>Título</div>  
                    <div className={styles.challengeDescription}>Pequasdkashdujuashduashdasudhs uashduashdsaudhsaudhsu uashdasuhdena descrição do negócio</div>              
                    </div> 
                </Grid>
                <Grid className={styles.emailConfirmation} item xs={8} sm={4}>
                    <div className={styles.challengeBox}>
                    <div className={styles.container}></div>
                    <img className={styles.progIcon} src='/new_images/redes-03.svg'/>
                    <div className={styles.challengeTitle}>Título</div>  
                    <div className={styles.challengeDescription}>Pequasdkashdujuashduashdasudhs uashduashdsaudhsaudhsu uashdasuhdena descrição do negócio</div>              
                    </div> 
                </Grid>
            </Grid>
            <footer>
                <FloatMenu/>
            </footer>
            {/* <footer >
                <button className={styles.button}>A</button>
            </footer> */}
        </div>
    )
}