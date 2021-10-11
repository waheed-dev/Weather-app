import {Accordion, Box} from "@mui/material";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from "../components/theme";

const Docs = () => {
    return (
        <Box sx={{position : 'relative '}}>
            <Typography variant={'h5'} textAlign={'center'} my={'24px'}>FAQ About the App</Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant={'h6'} sx={{[theme.breakpoints.down('md')]: {
                            fontSize :'large',letterSpacing : '2'
                        }}}>which tech stack was used to create this app?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                       React,Nextjs,Material ui,Framer motion
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant={'h6'} sx={{[theme.breakpoints.down('md')]: {
                            fontSize :'large',letterSpacing : '2'
                        }}}>How to this web-app works?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This Web-app fetches data from a weather-api called openMapWeatherApi and this displays results.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant={'h6'} sx={{[theme.breakpoints.down('md')]: {
                            fontSize :'large',letterSpacing : '2'
                        }}}>The Idea!</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    the idea was to create something simple yet useful using modern tools that are currently trending in tech community
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}
export default Docs