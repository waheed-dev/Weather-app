import * as React from 'react';
import Alert from '@mui/material/Alert';

export default function ColorAlerts() {
    return (
        <Alert severity="error" variant="filled" color="error" >
            please enter your correct location and make sure you are connected to the internet
        </Alert>
    );
}