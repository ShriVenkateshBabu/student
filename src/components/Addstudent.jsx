import React from 'react'
import Viewstudent from './Viewstudent'
import DeleteallRecords from './DeleteallRecords'

const Addstudent = ({stdept,stid,stname,students,setDept,setID,setname,handleclick,search,setStudents
  ,apiurl
}) => {
    
    return (
    <>
     <div className='addstudent'>
     <label><b>ADD A NEW STUDENT</b></label>
     <input
        type="number"
        placeholder="Enter Student ID"
        value={stid}
        required
        onChange={(e) => setID(e.target.value)}
      />
     <input
        type="text"
        placeholder="Enter the student name"
        value={stname}
        required
        onChange={(e) => setname(e.target.value)}
      />
     
      <input
        type="text"
        placeholder="Enter Department"
        value={stdept}
        required
        onChange={(e) => setDept(e.target.value)}
      />
      <button onClick={handleclick}><b>ADD TO STUDENT LIST</b></button>
      <DeleteallRecords
      setstudents={setStudents}
      students={students}
      apiurl = {apiurl}

      />
      <Viewstudent
      students={students}
      search ={search}
      />
     </div>
     
      
    </>
  )
}

export default Addstudent