import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Menu from '../components/Menu';
import FloatMenu from '../components/FloatMenu';
import Footer from '../components/Footer';
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

      <header className={styles.profile__header}>
        <Header className={styles.header} pageName="Dashboard" darkmode={false} />
        <Menu className={styles.menu} pageName="Dashboard"/>
      </header>

      <main className={styles.dash}>
        <ScrollableTab />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
      <FloatMenu className={styles.floatMenu}/>
    </div>
  );

};