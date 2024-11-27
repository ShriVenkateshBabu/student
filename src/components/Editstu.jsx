import React from 'react'

const Editstu = () => {
  return (
    <div className='editstu'>
     <label><b>EDIT</b></label> 
     <input type='text'
     placeholder='Edit your Id'
     />
     <input type='text'
     placeholder='Edit your name'
     />
     <input type="text"
     placeholder="Edit yout dept"
     />
     <button>ADD TO STUDENTS</button>
    </div>
  )
}

export default Editstu