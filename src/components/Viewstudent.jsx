import React from 'react'

const Viewstudent = ({students}) => {

  return (
    <>
      <main>
        <div className='allstudents'>
          <h2>STUDENT</h2>
                <table>
                  <thead>
                  <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>DEPARTMENT</th>
                    </tr>
                  </thead>
                  <tbody>
                  {students.map((stu,index)=>
                  <tr key={index}>
                    <td>{stu.id}</td>
                    <td>{stu.name}</td>
                    <td>{stu.dept}</td>
                  </tr>)}
                  </tbody>
                </table>
        </div>
      </main>
    </>
  )
}

export default Viewstudent
