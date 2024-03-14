

import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import { useState } from 'react'


function App() {
  const [ bookMarks, setbookMars]=useState([]);



  const handelClick = blog =>{
    const newBookMarks = [...bookMarks, blog];
    setbookMars(newBookMarks);
  }

  const handleClickRead = time =>{
    console.log(time)
  }


  return (
    <>
     
     <Header></Header>
    <div className='flex justify-between max-w-7xl  mx-auto '>
    <Blogs
     handelClick={handelClick}
     handleClickRead={handleClickRead}
    ></Blogs>
    <BookMarks bookMarks={bookMarks}></BookMarks>
    </div>
     
      
    </>
  )
}

export default App
