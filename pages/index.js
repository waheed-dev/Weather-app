
import React, {useState} from "react";

import Form from "../components/Form";
import BasicModal from "../components/Modal";

import {Box} from "@mui/material";
import CallToAction from "../components/callToAction";


export default function Home() {
    const [open, setOpen] = useState(false);
    const [data,setData] = useState()
  return (
    <Box>
        <Box>
        <CallToAction/>
        <Form open={open} setOpen={setOpen} data={data} setData={setData}/>
        {!data ? <div/> : <BasicModal open={open} setOpen={setOpen} data={data} setData={setData}/>}
        </Box>

    </Box>
  )
}