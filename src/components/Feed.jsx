import {useState , useEffect} from 'react'
import { Box , Stack , Typography } from '@mui/material'
import Sidebar from './Sidebar'

function Feed() {
  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>

      <Box sx={{height:{sx:'auto',md:"89vh"},
            borderRight:'1px solid #3d3d3d',
            px:{sx:0,md:2}}}>

              <Sidebar />
      </Box>
    </Stack>
  )
}

export default Feed
