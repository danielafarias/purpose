import React from 'react';
import { useState } from 'react'
import Header from '../components/Header';
import styles from '../styles/configs.module.scss';
import FloatMenu from '../components/FloatMenu';
import { Grid, TextField, Typography, FormControl, InputLabel, Input, IconButton, OutlinedInput, InputAdornment } from '@material-ui/core';

export default function Configs() {

    const [valor, setValor] = React.useState("")

     return (
         <Grid className={styles.background}>
             <header className={styles.background__header}>
                 <Header pageName='Configurações' />
             </header>
             <img className={styles.background__img} src={valor}/>
            
            <Grid>
                <input id='texto' type='text'></input>
                <button
                    onClick={() => setValor(document.getElementById("texto").value)}
                >aaa</button>
            </Grid>

            <div id="container">
                <p id="edit"><b> Click "Edit" button to edit content. </b></p>
                <button type="submit" id="edit-button">Edit</button>
                <button type="submit" id="end-editing">Done</button>
            </div>
             
             <footer>
                 <FloatMenu/>
             </footer>
            
         </Grid>
     )
 }