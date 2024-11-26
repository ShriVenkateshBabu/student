import React, { useEffect, useState } from 'react';
import Addstudent from './components/Addstudent';
import Search from './components/Search';
import Header from './Header&Footer/Header';
import Footer from './Header&Footer/Footer';
import apirequest from './apirequest';
import './index.css';

const App = () => {
  const [stname, setName] = useState('');
  const [stid, setID] = useState('');
  const [stdept, setDept] = useState('');
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  let [error, setError] = useState('');
  let [loading, setloading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setloading(true);
        let response = await fetch('http://localhost:3500/students');
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

    const result = await apirequest('http://localhost:3500/students', postOptions);
    setStudents((prevStudents) => [...prevStudents, newStudent]);

    if (result) {
      setError(result);
    }

    setName('');
    setID('');
    setDept('');
  };

  return (
    <div className='app-container'>
      <Header />
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      <main>
      <Search setsearch={setSearch} />
      {search && (
        <ul>
          {students
            .filter((student) => student.id === search)
            .map((stu) => (
              <li key={stu.id}>
                stu id = {stu.id}, stu name = {stu.name}
              </li>
            ))}
        </ul>
      )}
      <Addstudent
        students={students}
        stid={stid}
        stdept={stdept}
        stname={stname}
        setname={setName}
        setID={setID}
        setDept={setDept}
        handleclick={handleClickAdd}
      />
      </main>
      <Footer />
    </div>
  );
};

export default App;
