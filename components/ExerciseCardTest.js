import React from 'react';
import LoginHeader from './Header';
import styles from '../styles/components/exercisecard.module.scss'
import { Grid, Box, Typography, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { sizing } from '@material-ui/system';
import { green } from '@material-ui/core/colors';
import { withStyles, createTheme } from '@material-ui/core/styles';


export default function ExerciseCardTest() {

    const ValidationTextField = withStyles({
        root: {
            '& input:valid + fieldset': {
                borderColor: 'green',
                borderWidth: 50,
            },
            '& input:invalid + fieldset': {
                borderColor: 'red',
                borderWidth: 50,
            },
            '& input:valid:focus + fieldset': {
                borderLeftWidth: 6,
                padding: '4px !important', // override inline-style
            },
        },
    })(TextField);

    const theme = createTheme({
        palette: {
            primary: green,
        },
    });





    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.organizer}>
            <Grid >
                <Grid className={styles.emailConfirmation} item xs={8} sm={4}>
                    <div className={styles.challengeBox}>
                        <div className={styles.container}></div>
                        <img className={styles.progIcon} src='/new_images/redes-03.svg' />
                        <div className={styles.challengeTitle}>Título</div>
                        <div className={styles.challengeDescription}>Pequasdkashdujuashduashdasudhs uashduashdsaudhsaudhsu uashdasuhdena descrição do negócio
                        </div>
                    </div>
                </Grid>
                <Grid id={styles.oi} xs={8} sm={4} style={{ maxWidth: '100%' }}>
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
                            <ValidationTextField
                                required
                                variant="outlined"
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