import React from 'react'

const Editstu = () => {
  return (
    <div className='editstu'>
     <input type='text'
     placeholder='Enter the id you want'
     />
     <button><b>EDIT</b></button>
     <br></br>
     <label><b>EDIT THE DETAILS</b></label> 
     <input type='text'
     placeholder='Edit your Id'
     />
     <input type='text'
     placeholder='Edit your name'
     />
     <input type="text"
     placeholder="Edit yout dept"
     />
     <button><b>ADD TO EXISTING STUDENTS</b></button>
    </div>
  )
}

export default Editstu