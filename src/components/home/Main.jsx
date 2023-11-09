import React from 'react'
import Post from './Post'
import Status from './Status'

const Main = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <Status/>
      <Post/>
    </div>
  )
}

export default Main
