import React from 'react';
import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatMenu from '../components/FloatMenu';
import ScrollableTab from '../components/ScrollableTab';
import styles from '../styles/pages/dashboard.module.scss';


export default function Dashboard() {

  return (
    <div>
      <Head>
        <title>Purple | Dashboard</title>
        <meta name="description" content="Página de Dashboard de viajante da Purple" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header pageName='Dashboard' />
      </header>

      <main className={styles.dash}>
        <ScrollableTab />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
      <FloatMenu />
    </div>
  );

};