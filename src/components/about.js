import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import styles from "../styles_modules/about.module.css"

const About = () => {
  return (
    <>
    <div className='about '>
      <Box  className={styles.main}>
        <div>
          <h4  className={styles.title} >
            About studio
          </h4>
          <Typography variant='h2' p={3} className={styles.sub}>
            Say Wow to Our New KickSale Display.
          </Typography>
          <p className={styles.des}>
            Ideas that launch on Kicksale don't seem to be solely highly-vetted
            by our team of skilled analysts, however conjointly by
            industry-leading expertise.
          </p>

          <div className={styles.buttonmain}>
            <button   className={styles.btn1}>
              our project
            </button>
            <button px={5} py={2}  className={styles.btn2}>
              MetaVerse NFT
            </button>
          </div>
        </div>
      </Box>
    </div>
    </>
  )
}

export default About