import React from 'react';
import apirequest from '../apirequest';

const DeleteAllRecords = ({updateToDb}) => {
 

  return (
    <div className="deleteAllRecords">
      <button onClick={updateToDb}><b>DELETE ALL RECORDS</b></button>
    </div>
    
  );
};

export default DeleteAllRecords;
