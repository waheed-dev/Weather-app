import * as React from 'react';
import Alert from '@mui/material/Alert';
import {Typography,Box} from "@mui/material";
import theme from '../components/theme'

export default function About() {
    return (
        <Box sx={{position : 'relative'}}>
        <Typography variant={'h4'} textAlign={'center'} sx={{[theme.breakpoints.down('md')]: {
                fontSize :'x-large',letterSpacing : '2'
            }}}>
            Made by
        </Typography>
            <Typography variant={'h3'} sx={{background :'linear-gradient(to left, #7928CA, #FF0080)'
                    ,backgroundClip :'text',
                color : 'transparent'

                ,mt :'32px',mb : '32px',[theme.breakpoints.down('md')]: {
                    fontSize :'x-large',letterSpacing : '2'
                }}}textAlign={'center'}>
                Abdul Waheed
            </Typography>
            <Typography variant={'h3'} sx={{background :'linear-gradient(to left, #7928CA, #FF0080)'
                ,backgroundClip :'text',
                color : 'transparent',mt :'32px',mb : '32px',[theme.breakpoints.down('md')]: {
                    fontSize :'x-large',letterSpacing : '2'
                }}}textAlign={'center'}>
                Noman Ijaz
            </Typography>
            <Typography variant={'h3'} sx={{background :'linear-gradient(to left, #7928CA, #FF0080)'
                ,backgroundClip :'text',
                color : 'transparent',mt :'32px',mb : '32px',[theme.breakpoints.down('md')]: {
                    fontSize :'x-large',letterSpacing : '2'
                }}} textAlign={'center'}>
                Irfan Ali
            </Typography>
            <Typography variant={'h3'} sx={{background :'linear-gradient(to left, #7928CA, #FF0080)'
                ,backgroundClip :'text',
                color : 'transparent',mt :'32px',mb : '32px',[theme.breakpoints.down('md')]: {
                    fontSize :'x-large',letterSpacing : '2'
                }}}textAlign={'center'}>
                Burhan Zulfiqar
            </Typography>
        </Box>
    );
}