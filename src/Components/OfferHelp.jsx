<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const OfferHelp = () => {
    const [userData, setUserData] = useState({})
  const history = useNavigate();
  const verifyPage=async()=>{
    try{
        const res=await fetch('/about',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        });
        const data=await res.json();
        console.log(data);
        setUserData(data);
        
        if(!res.status===200){
            const err=new Error(res.error);
            throw err;
        }
    }catch(err) {
        console.log(err);
        history("/login");
    }
}

useEffect(()=>{
    verifyPage();
},[])


  return (
    <>
    
    </>
  )
}

export default OfferHelp
=======
import React from 'react'

const OfferHelp = () => {
  return (
    <div>
      OFFER HELP
    </div>
  )
}

export default OfferHelp
>>>>>>> e688a57dd8934500f217f4804685e52e83fb012b
