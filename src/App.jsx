import React, {  useState } from 'react';
import Addstudent from './components/Addstudent';
import Search from "./components/Search"
const App = () => {
  const [stname, setName] = useState('');
  const [stid, setID] = useState('');
  const [stdept, setDept] = useState('');
  const [students, setStudents] = useState([]); 
  const[search,setSearch] = useState("")
  

  const handleClickAdd = () => {
    
      const newStudent = {
        name: stname,
        id: stid,
        dept: stdept,
      };
    setStudents((prevStudents) => [...prevStudents, newStudent]);

    setName('');
    setID('');
    setDept('');
  };

  return (
    <>
    <Addstudent
     students ={students}
     stid={stid}
     stdept={stdept}
     stname={stname}
     setname={setName}
     setID={setID}
     setDept={setDept}
     handleclick={handleClickAdd}
    />
      <Search
       setsearch ={setSearch}
      />
    {search && (
     <ul>
    {students.filter((student)=>student.id === search).map((stu)=>(<li>
      stu id = {stu.id} stu name = {stu.name}
    </li>))}
    </ul>)}
    </>
  );
};

export default App;
