import React, { useContext } from 'react'
import EcommerceContext from './Context/EContext'
import CardDetails from './CardDetails'
import { Box, Grid } from '@mui/material'

export default function Product() {


 const {data,cart}  =  useContext(EcommerceContext);

 console.log(cart);
  return (
    <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>

            {

                data.map((value)=> {


                    return (<CardDetails item={value}></CardDetails>)


                })
            }

</Grid>

<div>{cart.length}</div>

</Box>
  )
}
