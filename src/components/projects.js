
import { fontSize, textAlign } from '@mui/system'
import { Box } from '@mui/system'
import React from 'react'
import { CardData } from './card_Data'
import styles from '../styles_modules/project.module.css'


const Card = () => {
 

  return (
    <div className='bg_star' style={{  backgroundColor:"black"}}>
      <section style={{paddingTop:'88px'}}  >
        <h1  style={{textAlign :"center", fontWeight:'700' ,fontSize:'2.75rem'}} >
          KICKSALE PROJECTS
        </h1>
        <Box  p={5} className={styles.card1}>
          {CardData.map((project, id) => {
            return (
              <div key={id} className={styles.cardmain} >
                <div className={styles.cardbody}>
                  <img src={project.image} className={styles.img} alt="Project_Image" />

                  <div className={styles.cardinside}>
                    <div>
                      <h2 className={styles.title}>
                        {project.title}
                      </h2>
                      <p className={styles.subtitle}>
                        {project.subTitle}
                      </p>
                    </div>
                    <div  mt={5} px={5} className={styles.buttonbody}>
                      <span  className={styles.btn}>
                        {project.registration}
                      </span>
                      <div mx={2} className={styles.avax}>
                        <img
                          width={20}
                          height={20}
                          mx={2}
                        src='../img/avax.png'
                          className={styles.avaximg}
                        />
                        <span style={{fontWeight:'bold'}} >Avax</span>
                      </div>
                    </div>
                    <div mt={5} >
                      <h3 style={{fontWeight:'bold'}}>Whitelist end in:</h3>
                      <small className={styles.font1}>0</small>
                      <small className={styles.font2}>1 </small>
                      <small className={styles.font1}>:</small>
                      <small className={styles.font1}>0</small>
                      <small className={styles.font2}>4</small>
                      <small>:</small>
                      <small className={styles.font1}>3</small>
                      <small className={styles.font2}>2</small>
                      <small>:</small>
                      <small className={styles.font1}>1</small>
                      <small className={styles.font2}>5</small>
                    </div>
                    <Box  >
                      <button
                        className={styles.moreinfo}
                      >
                        more details
                      </button>
                    </Box>
                  </div>
                </div>
              </div>
            )
          })}
        </Box>
      </section>
    </div>
  )
}

export default Card