import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import styles from '../styles/pages/dashboard.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import FloatMenu from '../components/FloatMenu';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import ScrollableTab from '../components/ScrollableTab';

export default function dashboard() {

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

    <div >
      <ThemeProvider theme={theme}>

        <Head>
          <title>Dashboard | Purple</title>
          <meta name="description" content="Página de Dashboard de viajante da Purple" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          <Header pageName='Dashboard' />
        </header>

        <main className={styles.dash}>

          <ScrollableTab />


          <Typography id={styles.dash__link}>
            <a id={styles.dash__decoration} href='/'>Voltar</a>
          </Typography>

        </main>

        <footer className={styles.footer}>
          <Footer />
        </footer>
      </ThemeProvider>

      
      <FloatMenu />
    </div>

  );

};