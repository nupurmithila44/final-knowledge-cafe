
import './Header.css'
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='nav-container max-w-7xl  mx-auto '>
        <h1>knowledge cafe</h1>
        <img  src={profile} alt="" />
         </div>
    );
};

export default Header;