import Head from 'next/head';
import { useRouter } from 'next/router'
import { Container, Grid, Typography, Button } from '@material-ui/core';
import axios from 'axios';
import Menu from '../components/Menu';
import Header from '../components/Header';
import FloatMenu from '../components/FloatMenu';
import styles from '../styles/pages/profile.module.scss';


export default function Profile({ profiles }) {

    const router = useRouter()
    
    return (
        <div className={styles.profile}>
            <Head>
                <title>Perfil</title>
            </Head>

            <header className={styles.profile__header}>
                <Header className={styles.header} pageName="Perfil" darkmode={false} />
                <Menu className={styles.menu} pageName="Perfil" />
            </header>

            <Container fixed>
                <Grid container justifyContent="center" alignItems="center" spacing={4}>
                    <Grid item className={styles.profile__infos}>
                        <Grid item >
                            {profiles.map(profile => (
                                <img src={profile.profileImage} key={profile.id} className={styles.profile__image} />
                            ))}
                        </Grid>

                        <Grid item>
                            {/* {profiles.map(profile => (
                                <Typography className={styles.profile__nameTitle} key={profile.id}>
                                    {profile.userName}
                                </Typography>
                            ))} */}
                        </Grid>
                    </Grid>

                    <Grid className={styles.profile__char}>
                        <Typography className={styles.profile__charTitle}>Personagem</Typography>
                        <img src='new_images/persoicones-23.svg' className={styles.profile__charImage} />
                        <Grid item>
                            <Grid item className={styles.profile__charLevel}>
                                <Typography className={styles.profile__charTexts}>Level:</Typography>
                                <Typography className={styles.profile__charTexts}>Rank:</Typography>
                            </Grid>

                            <Grid>
                                <Typography className={styles.profile__charTexts}>Exp:</Typography>
                            </Grid>

                            <Grid>
                                <Typography className={styles.profile__charTexts}>Vigor:</Typography>
                            </Grid>

                            <Typography className={styles.profile__charTexts}>Ouro:</Typography>

                            <Button 
                                variant="contained" 
                                color="primary" 
                                onClick={() => router.push('/profile/edit-char')}>
                                    Editar Personagem
                                </Button>
                        </Grid>
                    </Grid>

                    <Grid className={styles.profile__bagdes}>
                        <Typography className={styles.profile__bagdesTitle}>Conquistas</Typography>
                        <Grid>
                            <img src='badges/xing-svgrepo-com.svg' className={styles.profile__bagdesImage} />
                            <img src='badges/xing-svgrepo-com.svg' className={styles.profile__bagdesImage} />
                            <img src='badges/xing-svgrepo-com.svg' className={styles.profile__bagdesImage} />
                            <img src='badges/xing-svgrepo-com.svg' className={styles.profile__bagdesImage} />
                            <img src='badges/xing-svgrepo-com.svg' className={styles.profile__bagdesImage} />
                            <img src='badges/xing-svgrepo-com.svg' className={styles.profile__bagdesImage} />
                            <img src='badges/xing-svgrepo-com.svg' className={styles.profile__bagdesImage} />
                            <img src='badges/xing-svgrepo-com.svg' className={styles.profile__bagdesImage} />
                        </Grid>
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick={() => router.push('/profile/badges')}>
                                Ver mais
                            </Button>
                    </Grid>
                </Grid>
            </Container>
            <FloatMenu className={styles.floatMenu}/>
        </div>
    );

};

Profile.getInitialProps = async ctx => {
    try {
        const prof = await axios.get('http://purposeapi.azurewebsites.net/api/Client');
        const profiles = prof.data;
        return { profiles };
    } catch (error) {
        return { error };
    }
};

/* 

mudar o "axios.get" para o link 
http://purposeapi.azurewebsites.net​/api​/Client​/GetUsuarioByUserName​/{userName}
com a "/${id}" do cliente no lugar de "/{userName}"

*/