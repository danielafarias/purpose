import Head from 'next/head';
import { Container, Grid, Typography } from '@material-ui/core';
import styles from '../styles/profile.module.scss';

export default function Profile() {

    return(

        <div className={styles.profile}>
            <Head>
                <title>Perfil</title>
            </Head>

            <Container fixed>
                <Grid container justifyContent="center" alignItems="center" spacing={4}>
                    <Grid item className={styles.profile__infos}>
                        <Grid item >
                            <img src='images/chrisevans.jpg' className={styles.profile__image} />
                        </Grid>

                        <Grid item>
                            <Typography className={styles.profile__nameTitle} >Chris Evans</Typography>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid item className={styles.profile__charInfo}>
                            <Typography className={styles.profile__charTitle}>Personagem</Typography>
                            <img src='new_images/persoicones-23.svg' className={styles.profile__charImage} />
                        </Grid>

                        <Grid item className={styles.profile__bagdesInfo}>
                            <Typography className={styles.profile__bagdesTitle}>Conquistas</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );

};