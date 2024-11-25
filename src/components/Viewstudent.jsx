import React from 'react'

const Viewstudent = ({students}) => {

  return (
    <>
     <div>
      
        <ul>
          {students.map((stu,index)=>(
          <li key = {index}>
          stu id = {stu.id}, stu name = {stu.name}, stu dept = {stu.dept}
          </li>
          ))}
        </ul>
    
      </div> 
    </>
  )
}

export default Viewstudent