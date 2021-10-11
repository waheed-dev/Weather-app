import React from "react";
import {Box, Button, Divider, Drawer, List, ListItem, Typography} from "@mui/material"
import Link from "next/link";
const SideDrawer = ({open,setOpen}) => {

    return (

        <Drawer
            anchor={'right'}
            open={open}
            onClose={()=>{setOpen(!open)}}
            c
        >
            <Typography>
                    <Box sx={{width : '150px',textAlign : 'center',marginBottom : '8px'}}>
                <Link href='/About'>

                    About
                </Link>
                    </Box>
            </Typography>
            <Divider/>
            <Typography>
                    <Box sx={{width : '150px',textAlign : 'center'}}>
                <Link href='Docs'>
                        Docs
                </Link>
                    </Box>

            </Typography>
        </Drawer>
    )
}

export default SideDrawer