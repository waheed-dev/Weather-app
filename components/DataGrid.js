import moment from 'moment'
import {Box,Typography,Divider} from '@mui/material';


export default function DataTable({data}) {
    const contry =  data.sys.country
    const name = data.name
    const temp = data.main.temp
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')
    const sunset =new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')
    const description = data.weather[0].main
    const ty = data.main.humidity
    const day = moment().format('dddd')
    const time = moment().format("hh:mm A")

    return (
        <Box  textAlign={'center'}>
           <Box  sx={{display :'flex',justifyContent : 'space-around'}}>
               <Typography color={'#01FF70'} textAlign={'left'}>Country</Typography>
               <Typography color={'#01FF70'}>{contry}</Typography>
           </Box>
            <Divider/>
            <Box  sx={{display :'flex',justifyContent : 'space-around',alignContent : 'baseline'}}>
                <Typography color={'#01FF70'} sx={{display : 'flex',alignContent : 'baseline'}}>City</Typography>
                <Typography color={'#01FF70'}>{name}</Typography>
            </Box>
            <Divider/>
            <Box  sx={{display :'flex',justifyContent : 'space-around',alignContent : 'baseline'}}>
                <Typography color={'#01FF70'} textAlign={'left'}>Temperature</Typography>
                <Typography color={'#01FF70'}>{temp}°</Typography>
            </Box>
            <Divider/>
            <Box  sx={{display :'flex',justifyContent : 'space-around',alignContent : 'baseline'}}>
                <Typography color={'#01FF70'}>Description</Typography>
                <Typography color={'#01FF70'}>{description}</Typography>
            </Box>
            <Divider/>
            <Box  sx={{display :'flex',justifyContent : 'space-around',alignContent : 'baseline'}}>
                <Typography color={'#01FF70'} sx={{display : 'flex',alignContent : 'baseline'}}>Humidity</Typography>
                <Typography color={'#01FF70'}>{ty}</Typography>
            </Box>
            <Divider/>
            <Box  sx={{display :'flex',justifyContent : 'space-around',alignContent : 'baseline'}}>
                <Typography color={'#01FF70'} sx={{display : 'flex',alignContent : 'baseline'}}>Sunrise</Typography>
                <Typography color={'#01FF70'}>{sunrise}</Typography>
            </Box>
            <Divider/>
            <Box  sx={{display :'flex',justifyContent : 'space-around',alignContent : 'baseline'}}>
                <Typography color={'#01FF70'} sx={{display : 'flex',alignContent : 'baseline'}}>Sunset</Typography>
                <Typography color={'#01FF70'}>{sunset}</Typography>
            </Box>
            <Divider/>
            <Box  sx={{display :'flex',justifyContent : 'space-around',alignContent : 'baseline'}}>
                <Typography color={'#01FF70'} sx={{display : 'flex',alignContent : 'baseline'}}>Day</Typography>
                <Typography color={'#01FF70'}>{day}</Typography>
            </Box>
            <Divider/>
            <Box  sx={{display :'flex',justifyContent : 'space-around',alignContent : 'baseline'}}>
                <Typography color={'#01FF70'} sx={{display : 'flex',alignContent : 'baseline'}}>Time</Typography>
                <Typography color={'#01FF70'}>{time}</Typography>
                </Box>
        </Box>
    );
}
