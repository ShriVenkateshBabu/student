import React, { useRef } from 'react'
import Viewstudent from './Viewstudent'
import DeleteallRecords from './DeleteallRecords'
import apirequest from '../apirequest'

const Addstudent = ({stdept,stid,stname,students,setDept,setID,setname,handleclick,search,setStudents
  ,apiurl,input_ref
}) => {
  
  const updateToDb = async () => {
    try {
       let response = await fetch(apiurl);

       if(!response.ok){
        throw Error("failed to Fetch")
       }
       const data = await response.json()
      for(let student of students){
         const deleteoption ={
          method:'DELETE'
         }
         const requrl = await apirequest(`${apiurl}/${student.id}`,deleteoption);
         if(!requrl){
          console.log("ALL RECORDS ARE DELETED")
         }
         setStudents([])
      }
       }
  catch(err)
  {
    console.log(err.message)
  }
}
  
    return (
    <>
     <div className='addstudent'>
     <label><b>ADD A NEW STUDENT</b></label>
     <input
        ref={input_ref}
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
       updateToDb={updateToDb}
      />
       {students.length===0 ? <p style={{marginLeft:"10px",marginTop:"15px"}}><b>NO RECORD TO SHOW</b></p>:null}
      <Viewstudent
      students={students}
      search ={search}
      />
     </div>
    </>
  )
}

export default Addstudent ;