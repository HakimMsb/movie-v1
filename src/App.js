import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import React from 'react';

function App() {

  const[movies, setMovies] = useState([]);

  const getMovies = async() => {
    try{
      const response = await api.getMovies();
      setMovies(response.data);
      console.log(response.data)
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getMovies();
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies}/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
