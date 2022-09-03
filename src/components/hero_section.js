import React from 'react'
import { Box, Grid, Button, Typography } from '@mui/material'
import Container from '@mui/material/Container';
import styles from "../styles_modules/hero.module.css"
export default function Hero_section() {
    return (
        <div >
            <Container maxWidth="lg" sx={{ height: '100vh', justifyContent: 'center' }}  >
            
                <Grid className={styles.hero}>
                 
                        
                           
                    <Box className={styles.main} mx={16} pb={20} textAlign='center' textTransform='uppercase'   >
                        <Typography variant="h1" fontWeight="bold" textAlign="center" color="white" fontFamily='Syne' className={styles.text}>
                            A Launchpad for Initial <br /> Metaverse Offerings
                        </Typography>
                        <Box mt={4}>
                            <Button variant="contained" className={styles.btn} sx={{
                                borderRadius: '48px', background: 'rgb(139 112 255)', color: 'white'

                            }}>Disover</Button>
                            <Button variant="contained" className={styles.btn} sx={{
                                borderRadius: '48px',
                                background: '#31303E', color: 'white', mx: "20px"
                            }}>Buy Token</Button>
                        </Box>
                    </Box>
                           
                </Grid>
            </Container>
        </div>
    )
}
