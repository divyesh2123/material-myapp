import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

export default function DisplayData(data) {

  const [input,setinput]= useState('')

  const getallData =  ()=> {

    fetch("https://itchy-plum-caridea.cyclic.app/api/tutorials").then(y=> y.json())
    .then(y=> {
      setRows(y)
    });
  }

    const columns = [
        { field: 'id', headerName: 'ID', width: 300 },
        { field: 'title', headerName: 'title', width: 130 ,

     
      
      
      
      },
        { field: 'description', headerName: 'description', width: 330 },
       
        {
          field: "delete",
          headerName: "Delete",
          width: 90,
          renderCell: (params) => {

            console.log(params);
             // you will find row info in params
            return (<button onClick={()=>{ 
              
              
            

              
            
              fetch(`https://itchy-plum-caridea.cyclic.app/api/tutorials/${params.row.id}`,
              {
                method : "delete"
              }).then(y=> y.json())
              .then(y=> {

                
               
         getallData();
              });
            }}>Delete</button>)
          }
        },

        {
          field: "Edit",
          headerName: "Edit",
          width: 90,
          renderCell: (params) => {

            console.log(params);
             // you will find row info in params
            return (<button onClick={()=>{ data.setId(params.row.id) }}>Edit</button>)
          }
        }
       
      ];

      const changeHandeler = (e)=> {
        setinput(e.target.value);
      }

      const searchData = ()=> {

        fetch("https://itchy-plum-caridea.cyclic.app/api/tutorials?title="+ input).then(y=> y.json())
        .then(u=> {
          setRows(u);
        })
      }

      const [rows,setRows] = useState([])

      useEffect(  ()=> {

         getallData();
      
      },[data])
  return (
    <div style={{ height: 400, width: '100%' }}>

      <input type='text'  onChange={changeHandeler}/>
      <input type='button' value="save" onClick={searchData} />
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>
  )
}
