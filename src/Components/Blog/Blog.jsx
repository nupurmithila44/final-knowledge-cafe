import PropTypes from 'prop-types';

const Blog = ({ blog }) => {

 const {title,cover, author, image, posted_date, reading_time, hashtags } = blog;
    
    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mt-6'>
                <div className='flex'>
                    <img className='w-12 rounded-full' src={image} alt="" />
               <div className='ml-4'>
                <h3 className='text-2xl' >{author}</h3>
                <p className='text-xs'>{posted_date}</p>
               </div>
                </div>
                <div>
                    <span className='text-xl'>{reading_time} min read</span>
                </div>
            </div>
           <h1 className='text-3xl' >{title}</h1>
          <p>
            {
                hashtags.map((hash,index ) => <span key={index}><a href="">{hash}</a></span>)
            }
          </p>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired
}

export default Blog;