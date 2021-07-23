import LoginHeader from '../components/Header';
import styles from '../styles/challenges.module.scss'
import { Grid, Box, TextField } from '@material-ui/core'

export default function challenges() {
    return (
        <div className={styles.organizer}>
            <header className={styles.header}>
                    <LoginHeader pageName='Desafios'/>
            </header>
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
            <footer >
                <button className={styles.button}>A</button>
            </footer>
        </div>
    )
}