
import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({bookMarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 ml-6 mt-3 pt-3 ">
           <h1 className='text-2xl text-center mb-1 bg-gray-500 p-4 m-4' >BookMarks : {bookMarks.length}</h1>
            {
                bookMarks.map(bookmark => <BookMark key={bookmark.id} bookMark={bookmark}></BookMark>)
            }
        </div>
    );
};

BookMarks.propTypes = {
    bookMarks : PropTypes.object
  };

export default BookMarks;

