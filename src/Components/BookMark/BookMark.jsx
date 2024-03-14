
import PropTypes from 'prop-types';
const BookMark = ({bookMark}) => {
    const {title}=bookMark
    return (
        <div className='bg-slate-200 p-3 m-4'>
           <h3 className=' text-xl text-center mb-3'>{title}</h3> 
        </div>
    );
};
BookMark.propTypes = {
    bookMark: PropTypes.object
  };

export default BookMark;




