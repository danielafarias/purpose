import LoginHeader from './Header';
import styles from '../styles/card.module.scss'
import { Grid, Box, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

export default function ExerciseCard() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {setOpen(true);
    };

    const handleClose = () => {setOpen(false);
    };

    return (
        <div className={styles.organizer}>
            <Grid className={styles.emailConfirmation} item xs={8} sm={4}>
                <div className={styles.challengeBox}>
                <div className={styles.container}></div>
                <img className={styles.progIcon} src='/new_images/redes-03.svg'/>
                <div className={styles.challengeTitle}>Título</div>  
                <div className={styles.challengeDescription}>Pequasdkashdujuashduashdasudhs uashduashdsaudhsaudhsu uashdasuhdena descrição do negócio</div>              
                </div> 
            </Grid>
        </div>
    )
}