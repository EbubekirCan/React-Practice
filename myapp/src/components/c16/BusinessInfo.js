import React, { useEffect, useState } from 'react'

const BusinessInfo = () => {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {

        const getBusinessData =async () => { 

            const resp= await fetch("https://650d9fdda8b42265ec2c80a4.mockapi.io/products")
            .then((res)=>res.json())
            .then((data)=>setdata(resp.data))
            console.log(resp.data)



         }



    
    
      return () => {
        getBusinessData()
    
      }
    }, [])
    

  return (
    <div>BusinessInfo</div>
  )
}

export default BusinessInfo