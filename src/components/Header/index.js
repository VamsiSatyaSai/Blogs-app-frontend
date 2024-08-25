import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
    <nav className='navbar'>
        <h1 className='logo'>ZueAI</h1>
        <div className='nav-items-container'>
            <Link to='/'>
            <p className='nav-item'>Home</p>
            </Link>
            <Link to='create'>
            <p className='nav-item'>Write a blog?</p>
            </Link>
        </div>
    </nav>
)

export default Header