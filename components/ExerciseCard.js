import React from 'react';
import {
    Container,
    Grid,
    TextField,
    Typography,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Avatar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { getExerciseById } from '../api/axios';
import styles from '../styles/components/exercisecard.module.scss'


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

    if (!exercise) {
        return <div> carregando... </div>
    }
    return (
        <div className={styles.challenge}>
            <Container fixed >
                <Grid container>
                    <Card className={styles.challenge__card}>
                        <CardHeader avatar={
                            <Avatar>
                                <img className={styles.challenge__logo} src='/new_images/redes-03.svg' />
                            </Avatar>
                            } title={
                            <Typography>
                                <h2>
                                    Título do Desafio
                                </h2>
                            </Typography>
                        }>
                        </CardHeader>

                        <CardContent>
                            <Typography>
                                <p>
                                    Descrição do Desafio
                                </p>
                            </Typography>
                        </CardContent>

                        <CardActions disableSpacing>
                            <Button>Iniciar Exercícios</Button>
                        </CardActions>
                    </Card>
                    {/* <Grid className={styles.challenge__card}>
                        <Grid className={styles.challenge__title}>
                            <img className={styles.challenge__logo} src='/new_images/redes-03.svg' />
                            <Typography>
                                <h2>
                                    Título
                                </h2>
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography>
                                <p>
                                    Descrição do Desafio
                                </p>
                            </Typography>
                        </Grid>
                    </Grid> */}
                </Grid>
            </Container>
        </div>
        // <div className={styles.organizer}>
        //     <Container fixed>
        //         <Grid container>
        //             <Grid item className={styles.emailConfirmation} xs={8} sm={4}>
        //                 <div className={styles.challengeBox}>
        //                     <div className={styles.container}></div>
        //                     <img className={styles.progIcon} src='/new_images/redes-03.svg' />
        //                     <div className={styles.challengeTitle}>Título</div>
        //                     <div className={styles.challengeDescription}>Pequasdkashdujuashduashdasudhs uashduashdsaudhsaudhsu uashdasuhdena descrição do negócio
        //                     </div>
        //                 </div>
        //             </Grid>
        //             <Grid item >
        //                 <Button
        //                     className={styles.button}
        //                     variant="contained"
        //                     color="primary"
        //                     onClick={handleClickOpen}>
        //                     Iniciar exercício
        //                 </Button>

        //                 <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        //                     <DialogTitle id="form-dialog-title">{exercise.title}</DialogTitle>
        //                     <DialogContent>
        //                         <DialogContentText>
        //                             {exercise.title}
        //                         </DialogContentText>
        //                         <ValidationTextField
        //                             required
        //                             variant="outlined"
        //                             autoFocus
        //                             multiline
        //                             maxRows={20}
        //                             margin="dense"
        //                             id="name"
        //                             label="Respostinha marota"
        //                             type="text"
        //                             fullWidth />
        //                     </DialogContent>
        //                     <DialogActions>
        //                         <Button onClick={handleClose} variant="contained" color="primary">
        //                             Desisto, vou chorar.
        //                         </Button>
        //                         <Button onClick={handleClose} variant="contained" color="primary">
        //                             Soy fueda, acabei!
        //                         </Button>
        //                     </DialogActions>
        //                 </Dialog>
        //             </Grid>
        //         </Grid>
        //     </Container>
        // </div>
    )
}