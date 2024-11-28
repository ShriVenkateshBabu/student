import React from 'react';
import DeleteoneRecord from './DeleteoneRecord';

const Editstu = ({
  setEditsearch,
  handle_editbtn_click,
  editname,
  editid,
  editdept,
  seteditid,
  seteditdept,
  seteditname,
  editStudentbtn,students,
  setStudents,apiurl
}) => {
  return (
    <div className='editstu'>
      {/* Search by ID input */}
      <input
        type='text'
        placeholder='Enter the id you want'
        onChange={(e) => setEditsearch(e.target.value)}
      />
      <button onClick={handle_editbtn_click}>
        <b>EDIT</b>
      </button>
      <br />

      <p>
        <b>EDIT THE DETAILS</b>
      </p>
      
      {/* Controlled inputs for the student details */}
      <input
        type='text'
        placeholder='Edit your Id'
        value={editid} // bind to state
        onChange={(e) => seteditid(e.target.value)} // update state on change
      />
      <input
        type='text'
        placeholder='Edit your name'
        value={editname} // bind to state
        onChange={(e) => seteditname(e.target.value)} // update state on change
      />
      <input
        type='text'
        placeholder='Edit your dept'
        value={editdept} // bind to state
        onChange={(e) => seteditdept(e.target.value)} // update state on change
      />
      <button onClick={()=>editStudentbtn()}>
        <b>ADD TO EXISTING STUDENTS</b>
      </button>
      <DeleteoneRecord
       students={students}
       setStudents ={setStudents}
       apiurl={apiurl}
      />
    </div>
  );
};

export default Editstu;
