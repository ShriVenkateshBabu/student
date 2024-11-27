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

    const postOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStudent),
    };

    const result = await apirequest(apiurl, postOptions);
    setStudents((prevStudents) => [...prevStudents, newStudent]);

    if (result) {
      setError(result);
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
  return (
    <div className='app-container'>
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
       />
      <Viewstudent
       students={students}
      />
      <p style={{marginLeft:"0.2cm"}}>{students.length===0 ? <p style={{marginLeft:"10px",marginTop:"15px"}}><b>NO RECORD TO SHOW</b></p>:null}</p>
       
      {/* <Editstu/> */} 
   <br></br>
   {search && (
   <Searchdisplayitems search={search} students={students} />
   )}
      <Footer />
    </div>
  );
};

export default App;
