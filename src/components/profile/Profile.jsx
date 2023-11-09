import React from 'react';
import Sidebar from '../common/Sidebar';
import Header from './Header';
import { myInfo } from '../../data/myinfo';
import MyPost from './MyPost';

function Profile() {
  return (
    <div style={{display:"flex",gap:"5vw"}}>

      <Sidebar/>
      <div>
         <Header myInfo={myInfo}/>
         <MyPost post={myInfo.posts}/>
      </div>
     
      
      
    </div>
  )
}

export default Profile
