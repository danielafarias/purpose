import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/forgotpassword.module.scss';

import { Grid, TextField } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';


export default function forgotPassword() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#673AB7',
      },
      secondary: {
        main: '#E0E0E0',
      },
    },
    typography: {
      fontFamily: 'Yatra One',
    },
  });

  return (
    <div className={styles.forgot}>
      <ThemeProvider theme={theme}>
        <div className={styles.forgot__div}>
          <header className={styles.forgot__div__header}>
            <Header pageName='Entrar' />
          </header>
          <Grid className={styles.forgot__div__image} item xl={3} xs={8} sm={4}>
            <img src='/new_images/persoicones-09.svg' />
          </Grid>
          <Grid className={styles.forgot__div__email} item xs={8} sm={4}>
            <form className={styles.password} noValidate autoComplete="off" disableUnderline='true'>
              <TextField className={styles.textContent} id="standard-basic" fullwidth='true' label="Confirme seu Email" InputProps={{ disableUnderline: true }} InputLabelProps={{ style: { fontSize: 15, fontWeight: 700, font: "Roboto", style: "normal", color: "rgb(0, 0, 0)" }, input: { fontSize: 50 } }} />
            </form>
          </Grid>
          <button className={styles.forgot__buttonSend}>Enviar Código</button>
          <div className={styles.forgot__codeOrganizer}>
            <div className={styles.forgot__codeBox}></div>
            <div className={styles.forgot__codeBox}></div>
            <div className={styles.forgot__codeBox}></div>
            <div className={styles.forgot__codeBox}></div>
            <div className={styles.forgot__codeBox}></div>
            <form className={styles.forgot__codeConfirmation} noValidate autoComplete="off" disableUnderline='true'>
              <TextField id="standard-basic" InputProps={{ disableUnderline: true, style: { fontSize: 40, letterSpacing: "25px" } }} inputProps={{ maxLength: 5 }} InputLabelProps={{ style: { fontSize: 35, fontWeight: 700, font: "Roboto", style: "normal", color: "rgb(0, 0, 0)", textAlign: 'center' } }} />
            </form>
          </div>
          <button className={styles.forgot__buttonUnclickable}>Confirmar</button>
          <Grid className={styles.forgot__div__email} item xs={8} sm={4}>
            <form className={styles.password} noValidate autoComplete="off" disableUnderline='true'>
              <TextField className={styles.textContent} id="standard-basic" fullwidth='true' label="Insira a nova senha" InputProps={{ disableUnderline: true }} InputLabelProps={{ style: { fontSize: 15, fontWeight: 700, font: "Roboto", style: "normal", color: "rgb(0, 0, 0)" }, input: { fontSize: 50 } }} />
            </form>
          </Grid>
          <div className={styles.forgot__invisible}></div>
          <Grid className={styles.forgot__div__email} item xs={8} sm={4}>
            <form className={styles.password} noValidate autoComplete="off" disableUnderline='true'>
              <TextField className={styles.textContent} id="standard-basic" fullwidth='true' label="Confirme sua senha" InputProps={{ disableUnderline: true }} InputLabelProps={{ style: { fontSize: 15, fontWeight: 700, font: "Roboto", style: "normal", color: "rgb(0, 0, 0)" }, input: { fontSize: 50 } }} />
            </form>
          </Grid>
          <button className={styles.forgot__buttonUnclickable}>Alterar Senha</button>
        </div>
        
        <footer className={styles.forgot__footer}>
          <Footer />
        </footer>
      </ThemeProvider>
    </div>
  )
}