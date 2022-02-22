import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__left">
                    <h1>The Todos!</h1>
                </div>
                <div className="header__right">
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/create">Create</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;