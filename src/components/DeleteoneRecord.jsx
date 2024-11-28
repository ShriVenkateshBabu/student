import React, { useState } from 'react'
import apirequest from '../apirequest'

const DeleteoneRecord = ({students,setStudents,apiurl}) => {
   
   let[deleteinput ,setDeleteinput] = useState("")
   async function handleonedel()
    {
      let deleteitm = students.filter((student)=>student.id!==deleteinput)
      setStudents(deleteitm)
      try{
        const deleterecord ={
            method:"DELETE"
        }
         let response = await apirequest(`${apiurl}/${deleteinput}`,deleterecord)
         if(response){
            throw Error("check the delete function")
         }
      }
       catch(err){
         console.log(err.message)
       }
    }
   function handledeleteinput(e)
   {
    setDeleteinput(e)
   }
  
   return (
    <>
     <input type="number"
     placeholder='Enter the id to delete'
      onChange={(e)=>handledeleteinput(e.target.value)}
     />
     <p></p>
     <button onClick={handleonedel}><b>Delete the Record</b></button>
    </>
  )
}

export default DeleteoneRecord