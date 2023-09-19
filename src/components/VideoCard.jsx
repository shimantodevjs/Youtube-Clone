import React from 'react'
import { Link } from 'react-router-dom'
import { Typography , Card , CardContent ,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl , demoVideoUrl , demoVideoTitle ,demoChannelTitle , demoChannelUrl } from '../utils/constants'

const VideoCard = ({video:{id:videoId , snippet}}) => {

    // console.log(videoId,snippet)
  return (
    <Card sx={{width:{md:'320px' , sm:'100%'} , boxShadow: 'none' , borderRadius:0}}>
      <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{width:350,height:180}}
          />
      </Link>
      <CardContent 
         sx={{backgroundColor:'#1e1e1e', height:'106px'}}
      >
         <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
            <Typography
              variant='subtitle1'
              color='#000'
              fontWeight='bold'
            >
                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
         </Link>

          <Link to={snippet?.channelId? `/channel/${snippet?.channelId}`:demoChannelUrl}>
            <Typography
              variant='subtitle2'
              color='gray'
              fontWeight='bold'
            >
                {snippet?.channelTitle || demoChannelTitle}

                <CheckCircle
                  sx={{Color:'gray', ml:'5px', fontSize:'12px'}}
                />
            </Typography>
            
         </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
