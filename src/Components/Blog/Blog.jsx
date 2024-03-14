import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog, handelClick, handleClickRead}) => {
 

 const {title,cover, author, image, posted_date, reading_time, hashtags } = blog;
    
    return (
        <div>
            <img className='w-full' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mt-6'>
                <div className='flex'>
                    <img className='w-12 rounded-full' src={image} alt="" />
               <div className='ml-4'>
                <h3 className='text-2xl' >{author}</h3>
                <p className='text-xs'>{posted_date}</p>
               </div>
                </div>
                <div>
                    <span className='text-xl '>{reading_time} min read</span>
                    <button onClick={()=> handelClick(blog)} className='text-red-400 ' ><FaBookmark></FaBookmark></button>
                </div>
            </div>
           <h1 className='text-3xl' >{title}</h1>
          <p className='mb-8'>
            {
                hashtags.map((hash,index ) => <span key={index}><a href="">{hash}</a></span>)
            }
          </p>
          <button 
           onClick={ ()=> handleClickRead(reading_time)}
           className='text-xl text-purple-500'>time on read</button>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handelClick:PropTypes.func,
    handleClickRead: PropTypes.func
}

export default Blog;