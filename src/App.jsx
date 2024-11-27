import React, { useEffect, useRef, useState } from 'react';
import Addstudent from './components/Addstudent';
import Search from './components/Search';
import Header from './Header&Footer/Header';
import Footer from './Header&Footer/Footer';
import apirequest from './apirequest';
import './index.css';
import Searchdisplayitems from './components/Searchdisplayitems';
import Editstu from './components/Editstu';


const App = () => {
  const [stname, setName] = useState('');
  const [stid, setID] = useState('');
  const [stdept, setDept] = useState('');
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  let [error, setError] = useState('');
  let [loading, setloading] = useState(false);
  let apiurl = 'http://localhost:3500/students';
 
 const input_ref = useRef()
  useEffect(() => {
    async function fetchData() {
      try {
        setloading(true);
        let response = await fetch(apiurl);
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
    fetchData();
  }, []);

  const handleClickAdd = async () => {
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
        handleclick={handleClickAdd}
        setStudents={setStudents}
        apiurl = {apiurl}
        input_ref={input_ref}
      />
      </main>
      {/* <Editstu/> */}
      <br></br>
      <p><b>SEARCH RESULTS:
       </b></p>
   {search && (
   <Searchdisplayitems search={search} students={students} />
   )}
      <Footer />
    </div>
  );
};

export default App;
