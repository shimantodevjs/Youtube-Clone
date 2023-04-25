import React from 'react'
import { Stack } from '@mui/material'
import {Link} from "react-router-dom"
import SearchBar from './SearchBar'
const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/YouTube_dark_logo_2017.svg/640px-YouTube_dark_logo_2017.svg.png'


const Navbar=()=>(
    <Stack
       direction='row'
       alignItems='center'
       p={2}
       pl={4}
       sx={{position:"sticky",backgroundColor:'#000',top:0,justifyContent:"space-between"}}    
    >
     <Link to="/"
           style={{display:'flex',alignItems:'center'}}
           >
      <img src={logo} alt="logo" height={25} />
     </Link>
     <SearchBar />
    </Stack>
  )

export default Navbar
