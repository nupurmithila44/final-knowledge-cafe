

import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'


function App() {
 

  return (
    <>
     
     <Header></Header>
    <div className='flex justify-between'>
    <Blogs></Blogs>
    <BookMarks></BookMarks>
    </div>
     
      
    </>
  )
}

export default App
