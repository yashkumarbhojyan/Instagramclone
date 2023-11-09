import React from 'react'

const MyPost = ({post}) => {
  return (
    <div>
        <div style={{padding:"3vh 0vh",marginTop:"4vh",borderTop:"1px solid grey", display:"flex",justifyContent:"center",gap:"10vh", textTransform:"uppercase"}}>
            <span>Posts</span>
            <span>Reels</span>
            <span>Saved</span>
            <span>Tagged</span>
        </div>
    <div style={{width:"80%",display:"grid",gridTemplateColumns:"repeat(3,1fr)",columnGap:"1vh",rowGap:"1vh"}}>
       {post.map((ele)=>{
       return <img src={`${ele.postImages[0]}`} alt="" style={{width:"300px",height:"300px",objectFit:"contain"}}/>
       })}
    </div>
    </div>
  )
}

export default MyPost
