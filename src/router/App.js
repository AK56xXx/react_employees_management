import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import AddEmployee from '../components/AddEmployee';
import EmployeesList from '../components/EmployeesList';
import useLocalStorage from '../components/hooks/useLocalStorage';
import EditEmployee from '../components/EditEmployee';
import About from '../components/About';


const App = () => {
  /* using local storage */
  const [employees, setEmployees] = useLocalStorage('employees', []);
  /*** rendering the props ***/
  const RenderAdd = (props) => (
    <AddEmployee {...props} employees={employees} setEmployees={setEmployees} />
  )
  const RenderList = (props) => (
    <EmployeesList {...props} employees={employees} setEmployees={setEmployees} />
  )

  const RenderEdit = (props) => (
    <EditEmployee {...props} employees={employees} setEmployees={setEmployees} />
  )

  /*** ***/
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">

          <Routes>
            <Route element={<RenderList />} path="/" exact={true} />



            <Route

              /*  render={(props) => (
                 <AddEmployee {...props} employees={employees} setEmployees={setEmployees} />
               )}
               path="/add"*/

              element={<RenderAdd />}


              path="/add"


            />


            <Route
              element={<RenderEdit />}
              path="/edit/:id"
            />




            <Route element={<About />} path="/about" />



          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );



};

export default App;