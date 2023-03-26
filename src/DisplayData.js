import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

export default function DisplayData(data) {

    const columns = [
        { field: 'Id', headerName: 'ID', width: 70 },
        { field: 'PatientName', headerName: 'Patient Name', width: 130 },
        { field: 'AppointmentDate', headerName: 'Appointment Date', width: 330 },
        {
          field: 'City',
          headerName: 'City',
          width: 90,
        },
        {
            field: 'State',
            headerName: 'State',
            sortable: false,
            width: 160,
        },
        {
            field: 'Zipcode',
            headerName: 'ZipCode',
            width: 90,
        },
        {
          field: "delete",
          headerName: "Delete",
          width: 90,
          renderCell: (params) => {

            console.log(params);
             // you will find row info in params
            return (<button onClick={()=>{ data.removedata(params.row.id) }}>Delete</button>)
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
  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={data.rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>
  )
}
