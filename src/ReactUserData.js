import React, { useState } from 'react'

export default function ReactUserData({text}) {

    const [readmore,setReadMore] = useState(true);


    const truncateData  = ()=> {

        console.log("this is the the called")

        return text.slice(0,30).concat('...');
    }

    const  trucText = React.useMemo(()=> {

       

        return text.slice(0,30).concat('...');

    },[text]);

   


  return (
    <div onClick={()=> {

        setReadMore(!readmore);
    }}>

        {readmore? trucText : text}
        
    </div>
  )
}
