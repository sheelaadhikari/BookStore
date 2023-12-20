/* eslint-disable no-unused-vars */
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CreateBook from './Pages/CreateBook';
import ShowBook from './Pages/ShowBook';
import EditBook from './Pages/EditBook';
import DeleteBook from './Pages/DeleteBook';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}>Home </Route>
      <Route path='/books/create' element={<CreateBook/>}>Create Book</Route>
      <Route path='/books/details/:id' element={<ShowBook/>}>Show Book</Route>
      <Route path='/books/edit/:id' element={<EditBook/>}>Edit Book</Route>
      <Route path='/books/delete/:id' element={<DeleteBook/>}> Delete Book</Route>


    </Routes>
  )
}

export default App