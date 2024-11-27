import React from 'react'

const Searchdisplayitems = ({search,students}) => {
  return (
    <div className='SearchedValues'>
       <p><b>SEARCH RESULTS:
       </b></p>
    {search && (
       
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>DEPARTMENT</th>
            </tr>
          </thead>
          <tbody>
            {students
              .filter((student) => student.id === search)
              .map((stu, index) => (
                <tr key={index}>
                  <td>{stu.id}</td>
                  <td>{stu.name}</td>
                  <td>{stu.dept}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
    
  )
}

export default Searchdisplayitems