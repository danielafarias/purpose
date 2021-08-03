import React from 'react';
import { useState } from 'react'
import Header from '../components/Header';
import styles from '../styles/configs.module.scss';
import FloatMenu from '../components/FloatMenu';
import { Grid } from '@material-ui/core';

export default function Configs() {

    const [valor, setValor] = React.useState("")
    const [valor1, setToggle1] = React.useState(false)
    const [valor2, setToggle2] = React.useState(false)

    function toogle() {   
        if (valor1 == true) {
            document.getElementById('aaa').setAttribute('readonly', true)
            document.getElementById('end-editing').classList.add('testou')
            setToggle1(false)
        } else {
            document.getElementById('aaa').removeAttribute('readonly')
            setToggle1(true)
        }
    }

    function toogle2() {   
        if (valor2 == true) {
            document.getElementById('bbb').setAttribute('readonly', true)
            setToggle2(false)
        } else {
            document.getElementById('bbb').removeAttribute('readonly')
            setToggle2(true)
        }
    }

     return (
         <Grid className={styles.background}>
             <header className={styles.background__header}>
                 <Header pageName='Configurações' />
             </header>
             <img className={styles.background__img} src={valor}/>
            
            <Grid>
                <input className={styles.background__inputUrl} id='texto' type='text'></input>
                <button
                    onClick={() => setValor(document.getElementById("texto").value)}
                >aaa</button>
            </Grid>
            <Grid className={styles.background__gridConfig}>
            <button type="submit" className={styles.background__buttons} id="end-editing" onClick={() => toogle()}></button>
            <input id='aaa' className={styles.background__inputs} type="text" defaultValue='Usuário' readonly='true'  class="field left"></input>  
            </Grid>
            <Grid className={styles.background__gridConfig}>
            <button type="submit" className={styles.background__buttons} id="end-editing" onClick={() => toogle2()}></button>
            <input id='bbb' className={styles.background__inputs} type="text" defaultValue='Senha' readonly='true'  class="field left"></input>  
            </Grid>
             <footer>
                 <FloatMenu/>
             </footer>         
         </Grid>
     )
 }