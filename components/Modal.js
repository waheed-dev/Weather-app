import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DataTable from "./DataGrid";


export default function BasicModal({data,setData,open,setOpen}) {
    console.log(data.data)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{'& .MuiBox-root': {
                        backgroundColor: '#3c3c3c',
                    }}}
            >
                <Box sx={{ position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: {xs : 350,md : 500,lg:550,xl:550},


                    bgcolor: 'background.paper',

                    p: 4,

                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <DataTable data={data.data}/>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}