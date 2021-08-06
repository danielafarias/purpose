import React from 'react';
import LoginHeader from './Header';
import styles from '../styles/exercisecard.module.scss'
import { Grid, Box, Typography, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { sizing } from '@material-ui/system';


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
                        style={{ maxWidth: '40%', textTransform: 'capitalize' }}

                        onClick={handleClickOpen}
                        id={styles.login__button}>
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
                            <Button onClick={handleClose} color="primary">
                                Desisto, vou chorar.
                            </Button>
                            <Button onClick={handleClose} color="primary">
                                Soy fueda, acabei!
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>




            </Grid>
        </div>
    )
}