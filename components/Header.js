import Link from 'next/link'
import React,{useState} from "react";
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import SideDrawer from "./SideDrawer";
import Button from "@mui/material/Button";
import theme from './theme'
const Header = () => {
    const [open,setOpen] = useState(false)
    return (
        <Box >
            <AppBar position="static" sx={{backgroundColor : '#3c3c3c'}}>
                <Toolbar sx={{display :'flex',justifyContent : 'space-between'}}>
                        <Typography fontStyle={'italic'} fontSize={'xx-large'} color={'#01FF70'} fontWeight={'bold'} variant="h6" component="div" sx={{
                            [theme.breakpoints.down('md')]: {
                                fontSize :'x-large',letterSpacing : '2'
                            }}}>
                    <Link href='/'>
                        Weather
                    </Link>
                    </Typography>
                    <SideDrawer open={open} setOpen={setOpen}/>
                <IconButton onClick={()=>{setOpen(!open)}} sx={{color : '#01FF70'}} >

                    <MenuIcon/>
                </IconButton>
                </Toolbar>

            </AppBar>
        </Box>
    )
}
 export default Header