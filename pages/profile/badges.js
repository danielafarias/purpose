import Head from 'next/head';
import { useRouter } from 'next/router'
import { Container, Grid, Typography, Button } from '@material-ui/core';
import FloatMenu from '../../components/FloatMenu';
import styles from '../../styles/pages/badges.module.scss';

export default function Badges() {

    const router = useRouter()

    return(
        <div className={styles.badges}>
            <Head>
                <title>
                    Conquistas
                </title>
            </Head>

            <Container fixed>
                <Typography className={styles.badges__title}>Conquistas</Typography>
                <Grid container justifyContent="center" alignItems="center" spacing={4}>
                    <Grid className={styles.badges__allBadges}>
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                        <img src='../badges/xing-svgrepo-com.svg' className={styles.badges__image} />
                    </Grid>
                </Grid>

                <Grid className={styles.badges__buttons}>
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={() => router.push('/profile')}>
                            Voltar
                    </Button>
                </Grid>
            </Container>
            <FloatMenu />
        </div>
    );

};