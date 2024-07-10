import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">
        OUSSAMA
      </div>
      <ul className='nav-menu'>
        <li>home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar