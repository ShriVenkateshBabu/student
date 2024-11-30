import React, { useCallback, useEffect, useRef, useState } from 'react';
import Addstudent from './components/Addstudent';
import Search from './components/Search';
import Header from './Header&Footer/Header';
import Footer from './Header&Footer/Footer';
import apirequest from './apirequest';
import './index.css';
import Searchdisplayitems from './components/Searchdisplayitems';
import Editstu from './components/Editstu';
import Viewstudent from './components/Viewstudent';
import { Routes,Route } from 'react-router-dom';
import Login from './Loginpage/Login';


const App = () => {
  const [stname, setName] = useState('');
  const [stid, setID] = useState('');
  const [stdept, setDept] = useState('');
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  let [error, setError] = useState('');
  let [loading, setloading] = useState(false);
  let[editSearch,setEditsearch] = useState("")
  let[editid,seteditid] = useState("")
  let[editname,seteditname] = useState("")
  let[editdept,seteditdept] = useState("")

  let apiurl = 'http://localhost:3500/students';
 
 const input_ref = useRef()
 
  useEffect(() => {
    async function fetchData() {
      try {
        setloading(true);
        let response = await fetch(apiurl || []);
        if (!response.ok) {
          throw Error('API call not fetched');
        }
        let data = await response.json();
        
        setStudents(data);
        setError('');
      } catch (err) {
        setError(err.message);
      } finally {
        setloading(false);
      }
    }
    setTimeout(()=>{
      fetchData();
    },2000)
  }, []);

  const handleClick = async () => {
    const newStudent = {
      name: stname,
      id: stid,
      dept: stdept,
    };
   try{const postOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newStudent),
  };

  const result = await apirequest(apiurl, postOptions);
  setStudents((prevStudents) => [...prevStudents, newStudent]);
  if (result) {
    setError(result);
  }
}
catch(err){
 setError(err.message)
}
    setName('');
    setID('');
    setDept('');
    input_ref.current.focus()
  };
  function handle_editbtn_click(){
   console.log(editSearch)
   let edit_itm = students.filter((student)=>student.id===editSearch)
   if(edit_itm.length>0){
    
    seteditid(edit_itm[0].id)
    seteditdept(edit_itm[0].dept)
    seteditname(edit_itm[0].name) 
   }
   else{
    return null
   }
  }
  const editStudentbtn = async () => {
   const updateitm = {
    id : editid,
    name: editname,
    dept:editdept
   }
   const updateval = students.map((student)=>{if(student.id===editid){
    return updateitm
   }
  else{
    return student
  }
  })
  setStudents(updateval);
  setError("")
  try{const updateoptions = {
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(updateitm)
  };
  let requrl = `${apiurl}/${editid}`
  let response = await apirequest(requrl,updateoptions)
  if(response){
    setError(response)
  }
 }
  catch(err){
    setError(err.message)
  }
  }
  return (
    <div className='app-container'>
      
   <Routes>
     <Route path="/" element={<Login/>} />
     <Route path="/students" element ={
      <>
      <Header />
       {error && <p>{error}</p>}
       {loading && <p>Loading...</p>}
       <main>
       
       <Search setsearch={setSearch} />
       <Addstudent
         students={students}
         stid={stid}
         stdept={stdept}
         stname={stname}
         setname={setName}
         setID={setID}
         setDept={setDept}
         handleclick={handleClick}
         setStudents={setStudents}
         apiurl = {apiurl}
         input_ref={input_ref}
       />
 
       </main>
       <Editstu
        setEditsearch ={setEditsearch}
        handle_editbtn_click={handle_editbtn_click}
        editid ={editid}
        editdept={editdept}
        editname={editname}
        seteditdept={seteditdept}
        seteditid={seteditid}
        seteditname={seteditname}
        editStudentbtn={editStudentbtn}
        students={students}
        setStudents={setStudents}
        apiurl ={apiurl}
        />
       <Viewstudent
        students={students}
       />
       <>{students.length===0 ? <p style={{marginLeft:"15px",marginTop:"15px"}}>
         <b>NO RECORD TO SHOW</b></p>:null}</>
       
        
       {/* <Editstu/> */} 
    <br></br>
    {search && (
    <Searchdisplayitems search={search} students={students} />
    )}
       <Footer />
       </>
     }/>
     
      </Routes>
     
    </div>
  );
};

export default App;
