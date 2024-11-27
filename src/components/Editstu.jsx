import React from 'react'

const Editstu = ({setEditsearch,handle_editbtn_click,editname,editid,editdept,seteditid,seteditdept
  ,seteditname
}) => {
  return (
    <div className='editstu'>
     <input type='text'
     placeholder='Enter the id you want'
     onChange={(e)=>setEditsearch(e.target.value)}
     />
     <button onClick={handle_editbtn_click}><b>EDIT</b></button>
     <br></br>
     <label><b>EDIT THE DETAILS</b></label> 
     <input type='text'
      placeholder='Edit your Id'
      value={editid}
      onChange={(e)=>seteditid(e.target.value)}
     />
     <input type='text'
     placeholder='Edit your name'
     value={editname}
     onChange={(e)=>seteditname(e.target.value)}
     />
     <input type="text"
     placeholder="Edit yout dept"
     onChange={(e)=>seteditdept(e.target.value)}
     value={editdept}
     />
     <button><b>ADD TO EXISTING STUDENTS</b></button>
    </div>
  )
}

export default Editstu