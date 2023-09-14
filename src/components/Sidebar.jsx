import React from 'react'

import { Stack } from '@mui/material'

import { categories } from "../utils/constants"



const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack
       direction='row'
       sx={{overflowY:'auto',
            overflowX:'hidden',
            height:{sx:'auto', md:'85%'},
            flexDirection:{md:'column'},
            width:{sx:'auto', md : '200px'},
            pr:"10px",
            mt:'5px'
          }}
    >
     {categories.map((category)=>(
      <button 
          className='category-btn'
          key={category.name}
          onClick={()=>setSelectedCategory(category.name)}
          style={{
               background:category.name=== selectedCategory && '#fc1503',
               color:'#fff',
               fontSize: "12px"
          }}>
        <span
          style={{color:category.name=== selectedCategory ? "white" : "red"}}
        >{category.icon}</span>

        <span
           style={{opacity:category.name=== selectedCategory ? 1 : 0.8}}
        >{category.name}</span>
      </button>
     ))}   
    </Stack>
  )
}

export default Sidebar
