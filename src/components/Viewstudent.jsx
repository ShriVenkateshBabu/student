import React from 'react'

const Viewstudent = ({students}) => {

  return (
    <>
     <main>
     <div className='main-content'>
      
        <ul>
          {students.map((stu,index)=>(
          <li key = {index}>
          stu id = {stu.id}, stu name = {stu.name}, stu dept = {stu.dept}
          </li>
          ))}
        </ul>
    
      </div> 
      </main>
    </>
  )
}

export default Viewstudent