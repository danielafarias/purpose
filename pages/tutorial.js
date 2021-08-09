import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/tutorial.module.scss';
import { Button } from 'react-bootstrap';
import { Container, Grid } from '@material-ui/core';
import { SubtitlesOutlined } from '@material-ui/icons';

export default function tutorial() {
  const [valor, setValor] = React.useState("1")
  const [valor1, setValor1] = React.useState("")
  const [valor2, setValor2] = React.useState("Próxima Página")

  function a() {
    if (valor == '1') {
      document.getElementById("mago").src = "/images/mago2.svg";
      document.getElementById("balao").src = "/images/balaofala2.svg";
      setValor('2')
    } else if (valor == '2') {
      document.getElementById("mago").src = "/images/mago3.svg";
      document.getElementById("balao").src = "/images/balaofala3.svg";
      setValor('3')
    } else if (valor == '3') {
      document.getElementById("mago").src = "/images/mago4.svg";
      document.getElementById("balao").src = "/images/balaofala4.svg";
      setValor('4')
    } else if (valor == '4') {
      document.getElementById("mago").src = "/images/mago5.svg";
      document.getElementById("balao").src = "/images/balaofala5.svg";
      setValor2('Terminar Tutorial')
      setValor1('/dashboard')
    }
  }

  return (
      <div className={styles.full}>
      <Head>
        <title>Purple</title>
      </Head>
      <main className={styles.full}>
        <Container fixed>
          <Grid className={styles.aa} container>
            <Button className={styles.botao} id='botao' href={valor1} onClick={() => a()}>{valor2}</Button>
            <div className={styles.inv}></div>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" wrap="wrap-reverse" spacing={4}>
            <Grid item xs={12} sm={7} md={5}>
              <Grid item>
                <img id='mago' src='/images/mago1.svg' />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={7} md={5}>
              <img id='balao' src='/images/balaofala1.svg' />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}