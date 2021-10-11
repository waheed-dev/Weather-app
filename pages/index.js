import Head from 'next/head'
import Photo from 'next/image'
import React, {useState} from "react";

import Form from "../components/Form";
import BasicModal from "../components/Modal";

import {Container,Box} from "@mui/material";
import CallToAction from "../components/callToAction";


export default function Home() {
    const [open, setOpen] = React.useState(false);
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