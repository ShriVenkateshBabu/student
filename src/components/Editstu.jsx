import React from 'react';

const Editstu = ({
  setEditsearch,
  handle_editbtn_click,
  editname,
  editid,
  editdept,
  seteditid,
  seteditdept,
  seteditname
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
      <button>
        <b>ADD TO EXISTING STUDENTS</b>
      </button>
    </div>
  );
};

export default Editstu;
