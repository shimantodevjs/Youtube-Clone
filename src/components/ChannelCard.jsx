import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, CardContent ,CardMedia, Box } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = (channelDetail) => {
  console.log(channelDetail)
  return (
    <Box
      sx={{ boxShadow: 'none' , borderRadius:'20px'}} 
    >
     <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
         sx={{ display: 'flex' , flexDirection: 'column' , alignItems:'center', justifyContent:'center', textAlign:'center',color:'#fff'}}
      >
        <CardMedia
           image={channelDetail?.snippet?.thumbnails?.default?.url || demoProfilePicture}
           alt={channelDetail?.snippet?.title}
           sx={{borderRadius: '50%' , height :'180px' , width:'180px' ,mb:2, border: '1px solid #1e1e1e'}}
        />

        <Typography variant='h6' color='gray'>
             {channelDetail?.snippet?.title}
             <CheckCircle
                  sx={{Color:'gray', ml:'5px', fontSize:'14px'}}
             />
        </Typography>
      </CardContent>  
     </Link>     
    </Box>
  )
}

export default ChannelCard
