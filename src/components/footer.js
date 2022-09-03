import { Box, Grid, Menu, MenuItem, Button } from '@mui/material'

import styles from "../styles_modules/footer.module.css"


import React, { useState } from 'react'
import { borderRadius } from '@mui/system';

export default function Footer() {

    const tabs = ['home', 'About us', 'Metaverse', 'Faq', 'Contact']


 

    return (
        <div>
            <Box  p={2} backgroundColor='black'>
                <Grid container p={3}>
                    <Grid item xs={12} md={2} className={styles.main}>
                        <img src='./img/Logo_mobile.png' />
                    </Grid>

                    <Grid item xs={12} md={5}    >

                        <ul className={styles.nav} >
                            {tabs.map((list, id) => {
                                return (
                                    <div key={id}>

                                        <div className={styles.item}>
                                            {list}
                                        </div>

                                    </div>
                                )
                            })}
                        </ul>
                    </Grid>
                    <Grid item md={5} xs={12} className={styles.icon}>
                        <a href="#">
                            <img src='./img/icon_1.png' />
                        </a>
                        <a href="#">
                            <img src='./img/icon_2.png' />
                        </a>
                        <a href="#">
                            <img src='./img/icon_3.png' />
                        </a>
                        <a href="#">
                            <img src='./img/icon4.png' />
                        </a>
                    </Grid>

                </Grid>
                <Box className={styles.lastsec}>
                   
                        <Box py={3}>Copyright Kicksale © 2022. All rights reserved</Box>
                        <ul className={styles.rules}>
                            <a className={styles.privacy}>Privacy Poliacy</a>
                            <a className={styles.privacy}>
                                Terms & Condition
                            </a>
                            <a className={styles.privacy}>Disclaimer</a>
                        </ul>
                    
                </Box>

            </Box>

        </div >

    )
}
