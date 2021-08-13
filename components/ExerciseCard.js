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
                                <img className={styles.challenge__logo} src='/images/icons8-c-sharp-logo.svg' />
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
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleClickOpen}
                            >
                                Iniciar Exercícios
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Container>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    {exercise.title}
                </DialogTitle>

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
                        fullWidth
                    />
                </DialogContent>

                <DialogActions>
                    <Button
                        variant="contained" 
                        color="primary"
                        size="small"
                        onClick={handleClose}
                    >
                        Voltar
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={handleClose}
                    >
                        Responder
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}