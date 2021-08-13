import React from 'react';
import { Grid, 
    Typography, 
    TextField, 
    Button, Dialog, 
    DialogActions,
    DialogContent, 
    DialogContentText, 
    DialogTitle } from '@material-ui/core'
import { withStyles, createTheme } from '@material-ui/core/styles';
import { getExerciseById } from '../api/axios';
import styles from '../styles/components/exercisecard.module.scss'
import { getDomainLocale } from 'next/dist/next-server/lib/router/router';


export default function ExerciseCardTest() {

    
    // const [exercises, setExercises] = React.useState(undefined);

    // if (!exercises) { 
    //     getExercises().then((res) => setExercises(res))
    // }

    const [exercise, setExercise] = React.useState(undefined);

    if (!exercise) { 
        getExerciseById(1).then((res) => setExercise(res))
    }

    // const [user, setUser] = React.useState(undefined);

    // if (!user) {
    //     getUserByEmail('crossfiteira@gmail.com').then((res) => setUser(res))
    // } 

    // console.log(user)
 
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

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if(!exercise) {
        return <div> carregando... </div>
    }
    return (
        <div className={styles.organizer}>
            <Grid container>
                <Grid item className={styles.emailConfirmation} xs={8} sm={4}>
                    <div className={styles.challengeBox}>
                        <div className={styles.container}></div>
                        <img className={styles.progIcon} src='/new_images/redes-03.svg' />
                        <div className={styles.challengeTitle}>Título</div>
                        <div className={styles.challengeDescription}>Pequasdkashdujuashduashdasudhs uashduashdsaudhsaudhsu uashdasuhdena descrição do negócio
                        </div>
                    </div>
                </Grid>
                <Grid item id={styles.oi} xs={8} sm={4} style={{ maxWidth: '100%' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ maxWidth: '40%', textTransform: 'capitalize' }}
                        onClick={handleClickOpen}>
                        <Typography className={styles.typo}>Iniciar exercício</Typography>
                    </Button>

                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">{exercise.title}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                {exercise.title}
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
                                fullWidth />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} variant="contained" color="primary">
                                Desisto, vou chorar.
                            </Button>
                            <Button onClick={handleClose} variant="contained" color="primary">
                                Soy fueda, acabei!
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </Grid>
        </div>
    )
}