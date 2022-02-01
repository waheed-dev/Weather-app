import moment from 'moment'
import {Box,Typography,Divider} from '@mui/material';


export default function DataTable({data}) {
    console.log(data)
    const country =  data.sys.country
    const name = data.name
    const temp = data.main.temp
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')
    const sunset =new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')
    const description = data.weather[0].main
    const humidity = data.main.humidity
    const pressre = data.main.pressure
    const day = moment().format('dddd')
    const time = moment().format("hh:mm A")
    const timeZone = data.timezone
    const degree= data.deg

    return (
        <Box sx={{display : 'flex',justifyContent : 'space-evenly'}}>
           <Box>
               <Typography color={'#01FF70'} >Country</Typography>
               <Divider color={'#01ff70'}/>
                <Typography color={'#01FF70'}>City</Typography>
               <Divider  color={'#01ff70'}/>
                <Typography color={'#01FF70'} >Temperature</Typography>
               <Divider  color={'#01ff70'}/>
                <Typography color={'#01FF70'}>Description</Typography>
               <Divider  color={'#01ff70'}/>
                <Typography color={'#01FF70'} >Humidity</Typography>
               <Divider  color={'#01ff70'}/>
                <Typography color={'#01FF70'} >Sunrise</Typography>
               <Divider  color={'#01ff70'}/>
                <Typography color={'#01FF70'}>Sunset</Typography>
               <Divider  color={'#01ff70'}/>
                <Typography color={'#01FF70'}>Day</Typography>
               <Divider  color={'#01ff70'}/>
                <Typography color={'#01FF70'} >Time</Typography>
           </Box>
            <Divider/>
            <Box>
               <Typography color={'#01FF70'}>{country}</Typography>
                <Divider  color={'#01ff70'}/>
                <Typography color={'#01FF70'}>{name}</Typography>
                <Divider  color={'#01ff70'}/>
                <Typography color={'#01FF70'}>{temp}°C</Typography>
                <Divider  color={'#01ff70'}/>
                <Typography color={'#01FF70'}>{description}</Typography>
                <Divider  color={'#01ff70'}/>
                <Typography color={'#01FF70'}>{humidity}%</Typography>
                <Divider  color={'#01ff70'}/>
                <Typography color={'#01FF70'}>{sunrise}</Typography>
                <Divider  color={'#01ff70'}/>
                <Typography color={'#01FF70'}>{sunset}</Typography>
                <Divider  color={'#01ff70'}/>
                <Typography color={'#01FF70'}>{day}</Typography>
                <Divider  color={'#01ff70'}/>
                <Typography color={'#01FF70'}>{time}</Typography>
                <Typography color={'#01FF70'}>{timeZone}</Typography>
                <Typography color={'#01FF70'}>{deg}</Typography>

            </Box>
        </Box>
    );
}
