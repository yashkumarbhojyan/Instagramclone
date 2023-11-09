import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import  "../../styles/header.css";
import SavedStatus from './SavedStatus';

const Header = ({myInfo}) => {
  return (
    <div style={{display:"flex",flexDirection:"column",marginTop:"10vh", width:"100%"}}>
    <div style={{display:"flex",justifyContent:"space-around",gap:"10vh",alignItems:"center"}} className=''>
      <img style={{marginLeft:"15vh",width:"9vw",height:"9vw", borderRadius:"50%",objectFit:"cover"}} src={`${myInfo.profilePic}`}/>
      <div>
      <div style={{height:"60px",display:"flex",gap:"20px",alignItems:"center"}}>
        <span style={{fontSize:"20px"}}>{myInfo.username}</span>
        <span className='profile_header_buttons '>Edit profile</span>
        <span className='profile_header_buttons'>View Archieve</span>
        <span><SettingsIcon/></span>
      </div>
      <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}>
        <span>{myInfo.post} posts</span>
        <span>{myInfo.followers} Followers</span>
        <span>{myInfo.following} Following</span>
      </div>
  
    <div style={{marginTop:"20px",marginLeft:"20px"}}>
        {myInfo.name}
    </div>
    <p style={{marginTop:"20px",marginLeft:"20px"}}>{myInfo.Bio}</p>
    </div>
    </div>
     <SavedStatus savedStatus={myInfo.savedStatus}/>
    </div>
  )
}

export default Header
