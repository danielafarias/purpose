import Head from 'next/head';
import { useRouter } from 'next/router'
import { Container, Grid, Typography, Button} from '@material-ui/core';
import FloatMenu from '../../components/FloatMenu';
import styles from '../../styles/pages/edit-char.module.scss';

export default function EditChar() {

    const router = useRouter()

    return(
        <div className={styles.editChar}>
            <Head>
                <title>Editar Personagem</title>
            </Head>
            <Container fixed>
                <Typography className={styles.editChar__texts}>Personagens</Typography>
                <Grid container direction='column' justifyContent="center" alignItems="center" spacing={4}>
                    <Grid item className={styles.editChar__selectChar}>
                        <img src='../new_images/persoicones-23.svg' className={styles.editChar__charImage} />
                        <Typography className={styles.editChar__texts}>Selecionado</Typography>
                    </Grid>
{/* Colocar ID */}
                    <Grid item className={styles.editChar__chars}>
                        <img src='../new_images/persoicones-23.svg' className={styles.editChar__charImage}  />
                        <img src='../new_images/persoicones-24.svg' className={styles.editChar__charImage}  />
                        <img src='../new_images/persoicones-25.svg' className={styles.editChar__charImage}  />
                        <img src='../new_images/persoicones-26.svg' className={styles.editChar__charImage}  />
                        <img src='../new_images/persoicones-27.svg' className={styles.editChar__charImage}  />
                        <img src='../new_images/persoicones-28.svg' className={styles.editChar__charImage}  />
                    </Grid>
                </Grid>

                <Grid className={styles.editChar__buttons}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => router.push('/profile')}>
                            Salvar
                        </Button>
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