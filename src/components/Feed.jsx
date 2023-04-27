import {useState , useEffect} from 'react'
import { Box , Stack , Typography } from '@mui/material'
import {Sidebar , Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'


function Feed() {
  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>

      <Box sx={{height:{sx:'auto',md:"89vh"},
            borderRight:'1px solid #3d3d3d',
            px:{sx:0,md:2}}}>

              <Sidebar />
      </Box>

      <Box p={2} sx={{overflowY:'auto', height:'90vh'}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'#fff'}}>
          New<span style={{color: '#fc1503'}}>Videos</span>
        </Typography>

        <Videos />
      </Box>
    </Stack>
  )
}

export default Feed
