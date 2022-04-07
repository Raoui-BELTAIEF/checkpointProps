import React from 'react'
import { Button } from 'react-bootstrap'

function Profile({FullName,Bio,Profession,children,handleName} ) {
  return (
    <div className='inProfile'>
       <img src={children} alt="profile" />
       <Button onClick={()=> {handleName(FullName)}}>click here</Button>
      <span>fullName:{FullName}</span>
      <span>Bio:{Bio}</span>
      <span>Profession:{Profession}</span>  

   </div>
  )
}

export default Profile