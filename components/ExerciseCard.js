import React from 'react';
import { 
    Grid, 
    Typography, 
    TextField, 
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle } from '@material-ui/core'
import styles from '../styles/components/exercisecard.module.scss'

export default function ExerciseCardTest() {

    const [open, setOpen] = React.useState(false);



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.organizer}>
            <Grid Container>
                <Grid item className={styles.emailConfirmation} xs={8} sm={4}>
                    <div className={styles.challengeBox}>
                        <div className={styles.container}></div>
                        <img className={styles.progIcon} src='/new_images/redes-03.svg' />
                        <div className={styles.challengeTitle}>Título</div>
                        <div className={styles.challengeDescription}>Pequasdkashdujuashduashdasudhs uashduashdsaudhsaudhsu uashdasuhdena descrição do negócio
                        </div>
                    </div>
                </Grid>
                <Grid item id={styles.oi} xs={8} sm={4} style={{ maxWidth:'100%'}}>
                    <Button
                        variant="contained" 
                        color="primary"
                        style={{ maxWidth: '40%', textTransform: 'capitalize' }}
                        onClick={handleClickOpen}>
                            <Typography id={styles.typo}>Iniciar exercício</Typography>
                    </Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Exercício x</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Aqui está seu primeiro desafio: resiliência. Qual o segredo para não surtar durante o Bluetcamp?
                            </DialogContentText>
                            <TextField
                                autoFocus
                                multiline
                                maxRows={20}
                                margin="dense"
                                id="name"
                                label="Respostinha marota"
                                type="text"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button 
                                variant="contained" 
                                color="primary"
                                onClick={handleClose}>
                                    Desisto, vou chorar.
                            </Button>
                            <Button  
                                variant="contained" 
                                color="primary"
                                onClick={handleClose}>
                                    Soy fueda, acabei!
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </Grid>
        </div>
    )
}