import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LoginHeader from '../components/Header';
import styles from '../styles/challenges.module.scss'
import { Grid, Box, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Menu from '@material-ui/core/Menu';
import FloatMenu from '../components/FloatMenu';

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
            <footer>
                <FloatMenu/>
            </footer>
            {/* <footer >
                <button className={styles.button}>A</button>
            </footer> */}
        </div>
    )
}