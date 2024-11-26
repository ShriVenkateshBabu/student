import React from 'react';
import apirequest from '../apirequest';

const DeleteAllRecords = ({ setstudents, students,apiUrl }) => {
  async function updateToDb() {
    try {
      setstudents([]);
      const delOption = {
        method: "DELETE",
      };
     const response = await apirequest(apiUrl, delOption);
     
      if (response.ok) {
        console.log("All records deleted. Reload the app.");
      } else {
        console.error("Failed to delete records.");
      }
    } catch (error) {
      console.error("Error deleting records:", error);
    }
  }

  return (
    <div className="deleteAllRecords">
      <button onClick={updateToDb}><b>DELETE ALL RECORDS</b></button>
    </div>
  );
};

export default DeleteAllRecords;
