import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '.components/Navbar';
import ExerciseList from '.components/ExerciseList';
import EditExercise from '.components/EditExercise';
import CreateExercise from '.components/CreateExercise';
import CreateUser from '.components/CreateUser';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="create" component={CreateExercise} />
      <Route path="/user" cmponent={CreateUser} />
    </Router>
  );
}

export default App;
