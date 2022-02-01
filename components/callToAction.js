import {Box, Container, Typography} from '@mui/material'
import { Typewriter } from 'react-simple-typewriter'
import theme from '../components/theme'
import Image from 'next/image'
import Weather from '../public/weather.svg'
export default function CallToAction () {
    return (
     <Container maxWidth={'lg'} sx={{display : 'flex',justifyContent: 'space-between',marginTop :'6rem'}}>
         <Typography color={'error'} variant={'h3'} sx={{
             [theme.breakpoints.down('md')]: {
                     fontSize: theme.typography.h4,
             },
             [theme.breakpoints.down('sm')]: {
                 fontSize: 20,
             }
         }}>
             Live weather For every location
         </Typography>
         <Box height={200} width={400} sx={{
             [theme.breakpoints.down('sm')]: {
                 width: 180,
                 height : 170

             },
         }}>
             <Image src={Weather}  />
        </Box>
     </Container>
    )
}