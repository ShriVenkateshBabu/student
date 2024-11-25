import React from 'react'
import Viewstudent from './Viewstudent'

const Addstudent = ({stdept,stid,stname,students,setDept,setID,setname,handleclick,search}) => {
    
    return (
    <>
     <input
        type="text"
        placeholder="Enter the student name"
        value={stname}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Student ID"
        value={stid}
        onChange={(e) => setID(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Department"
        value={stdept}
        onChange={(e) => setDept(e.target.value)}
      />
      <button onClick={handleclick}>+</button>
      <Viewstudent
      students={students}
      search ={search}
      
      />
    </>
  )
}

export default Addstudent