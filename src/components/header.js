import { Box, Grid, Menu, MenuItem, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from "../styles_modules/header.module.css"
import { styled } from '@mui/system';
import Fade from '@mui/material/Fade';

import React, { useState } from 'react'
import { borderRadius } from '@mui/system';

export default function Header() {




    const [menu, setmenu] = useState(null);
    const open = Boolean(menu);
    const handleClick = (event) => {
        setmenu(event.currentTarget);
    };
    const handleClose = () => {
        setmenu(null);
    };

    return (
        <div>
            <Grid container className={styles.parentnav}>
                <Grid item xs={6} md={3}>
                    <img src='./img/Logo_mobile.png' />
                </Grid>
                <Grid item xs={6} md={6}   className={styles.btngrid} sx={{ display: { md: 'block', xs: 'none' } }}>
                    <Button mx={5} sx={{
                        borderRadius: '48px',
                        background: '#31303E', color: 'white', width: '20px', height: '30px', mt: '5px', mx: "10px"
                    }}>IDO</Button>
                    < Button sx={{
                        borderRadius: '48px',
                        background: '#31303E', color: 'white', width: '20px', height: '30px', mt: '5px', mx: "10px"
                    }}>IMO</Button>
                    <Button sx={{
                        borderRadius: '48px',
                        background: '#31303E', color: 'white', width: '20px', height: '30px', mt: '5px', mx: "10px"
                    }}>IGO</Button>
                </Grid>
            
                <Grid item xs={12} md={3} mt={0.5} sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}>

                    <Button variant="contained" onClick={handleClick} sx={{
                        borderRadius: '48px',
                        background: '#31303E', color: 'white'
                    }}>Accounts</Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        sx={{
                            "& .MuiList-root": {
                                backgroundColor: "#31303E",
                                color:'white'
                            }
                        }}


                        anchorEl={menu}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}

                    >
                        <MenuItem className='menuitem'  >Lockup</MenuItem>
                        <MenuItem className='menuitem'  >Staking</MenuItem>
                        <MenuItem className='menuitem'  >Linking Wallets</MenuItem>
                        <MenuItem className='menuitem' >My Portfolio</MenuItem>
                        <MenuItem className='menuitem' >Road Map</MenuItem>
                    </Menu>

                    <Button variant="contained" sx={{
                        borderRadius: '48px',
                        background: 'rgb(139 112 255)', color: 'white', mx: "10px"

                    }} >Wallets</Button>


                </Grid>
                 <Grid item xs={6} sx={{ display: { md: 'none', sm: 'block', xs: 'block' }, textAlign: 'right' }}>
                    <Button onClick={handleClick} sx={{
                        borderRadius: '48px',
                        color: 'white'
                    }}><MenuIcon /></Button>
                    
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        sx={{ display: { md: 'none', sm: 'block', xs: 'block' }, "& .MuiList-root": {
                            backgroundColor: "#31303E",
                            color:'white'
                        }}}
                        
                        anchorEl={menu}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}

                    >
                        <MenuItem onClick={handleClose} >Lockup</MenuItem>
                        <MenuItem onClick={handleClose}>Staking</MenuItem>
                        <MenuItem onClick={handleClose}>Linking Wallets</MenuItem>
                        <MenuItem onClick={handleClose}>My Portfolio</MenuItem>
                        <MenuItem onClick={handleClose}>Road Map</MenuItem>
                    </Menu>
                </Grid> 

            </Grid>

        </div >

    )
}
