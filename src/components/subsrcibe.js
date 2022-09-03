import React from 'react'

import { Box } from '@mui/system';
import styles from '../styles_modules/subscribe.module.css';
import { Card } from '@mui/material';

import { fontSize, textAlign } from '@mui/system'




const Subscibe = () => {


    return (
        <Box py={10} sx={{ backgroundColor: 'black' }}>
            <Box pt={20}>


                <Box className={styles.boxoutside}  >
                    <div className={styles.picsection}>
                        <img className={styles.logo} src='../img/subscibelogo.png' />
                    </div>
                    <div className={styles.contentsec}>
                        <h2 className={styles.heading}> FOLLOW & SUBSCRIBE TO OUR NEWSLETTER.</h2>
                        <p className={styles.dec}>Ready to get started, Get our Newsletter and join the Community!</p>

                        <div className={styles.emailsec}>
                            <input
                                type="text"
                                placeholder="Your Email"
                                className={styles.email}
                            />
                            <button  className={styles.btn2}>
                                Subscribe
                            </button>

                        </div>
                    </div>
                </Box>

            </Box>
        </Box>

    )
}

export default Subscibe

