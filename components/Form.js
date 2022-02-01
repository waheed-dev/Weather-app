import {TextField, Button, Box, Typography, Alert, Stack} from '@mui/material'
import {useEffect, useState} from "react";
import axios from 'axios'
import ColorAlerts from "./Toast";
import theme from "./theme";
const Form = ({data,setData,setOpen,open}) => {
    const [Toast,setToast] = useState(false)
    const [value,setValue] = useState()
const api = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=1a4e0e3363994f29e822786ae61b425b`
    const submitHandler =(e) => {
        setToast(false)
        setData('')
        e.preventDefault();
        if (!value) {return null}
        const getLoc = async () => {
            await axios.get(api)
                .then((res1)=>{
                    setData(res1)}).catch((error)=>{
                       setToast(true)
                }) }

        getLoc();
        setValue('')
    }
function changeHandler(e) {
    setValue(e.target.value)

}
    return (
            <form onSubmit={submitHandler}>

                {Toast ? <ColorAlerts/> : null}
        <Box sx={{display : 'flex', justifyContent :'center',marginTop :'12px', [theme.breakpoints.down('md')]: {
                marginTop : ''
            },alignContent : 'center'}}>
                <TextField value={value} size={'small'} onChange={changeHandler} label='Location' color='secondary'/>
                <Button size={'small'} onClick={setOpen} type='submit' variant={"contained"} sx={{marginLeft : '16px',paddingX : '16px',[theme.breakpoints.down('sm')]: {
                        size: 'small',
                        paddingX : '4px',
                        fontsize : '6px'
                    },}}>Search</Button>
        </Box>
                {!data ? <div/> : <Typography>&nbsp; &nbsp;</Typography>}
            </form>
    )
}
export default Form