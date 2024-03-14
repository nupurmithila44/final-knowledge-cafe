import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handelClick, handleClickRead}) => {
   
    const [blogs, setblogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then (data => setblogs(data))
    } ,[])
    return (
        <div className="md:w-2/3">
           <h1>blogs: {blogs.length}</h1> 
           {
            blogs.map(blog => <Blog 
                handelClick={handelClick}
                handleClickRead={handleClickRead}
                key={blog.id} 
                blog={blog}
                ></Blog> )
           }
        </div>
    );
};

Blogs.propTypes = {
    handelClick: PropTypes.func, 
    handleClickRead: PropTypes.func
  };

export default Blogs;