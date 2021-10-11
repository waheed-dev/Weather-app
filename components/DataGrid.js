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
        <Box >
           <Box  sx={{display :'flex',justifyContent : 'space-around'}}>
               <Typography sx={{display : 'flex',alignContent : 'baseline'}}>Country</Typography>
               <Typography>{contry}</Typography>
           </Box>
            <Divider/>
            <Box  sx={{display :'flex',justifyContent : 'space-around',alignContent : 'baseline'}}>
                <Typography sx={{display : 'flex',alignContent : 'baseline'}}>City</Typography>
                <Typography>{name}</Typography>
            </Box>
            <Divider/>
            <Box  sx={{display :'flex',justifyContent : 'space-around',alignContent : 'baseline'}}>
                <Typography sx={{display : 'flex',alignContent : 'baseline'}}>Temperature</Typography>
                <Typography>{temp}</Typography>
            </Box>
            <Divider/>
            <Box  sx={{display :'flex',justifyContent : 'space-around',alignContent : 'baseline'}}>
                <Typography sx={{display : 'flex',alignContent : 'baseline'}}>Description</Typography>
                <Typography>{description}</Typography>
            </Box>
            <Divider/>
            <Box  sx={{display :'flex',justifyContent : 'space-around',alignContent : 'baseline'}}>
                <Typography sx={{display : 'flex',alignContent : 'baseline'}}>Humidity</Typography>
                <Typography>{ty}</Typography>
            </Box>
            <Divider/>
            <Box  sx={{display :'flex',justifyContent : 'space-around',alignContent : 'baseline'}}>
                <Typography sx={{display : 'flex',alignContent : 'baseline'}}>Sunrise</Typography>
                <Typography>{sunrise}</Typography>
            </Box>
            <Divider/>
            <Box  sx={{display :'flex',justifyContent : 'space-around',alignContent : 'baseline'}}>
                <Typography sx={{display : 'flex',alignContent : 'baseline'}}>Sunset</Typography>
                <Typography>{sunset}</Typography>
            </Box>
            <Divider/>
            <Box  sx={{display :'flex',justifyContent : 'space-around',alignContent : 'baseline'}}>
                <Typography sx={{display : 'flex',alignContent : 'baseline'}}>Day</Typography>
                <Typography>{day}</Typography>
            </Box>
            <Divider/>
            <Box  sx={{display :'flex',justifyContent : 'space-around',alignContent : 'baseline'}}>
                <Typography sx={{display : 'flex',alignContent : 'baseline'}}>Time</Typography>
                <Typography>{time}</Typography>
                </Box>
        </Box>
    );
}
