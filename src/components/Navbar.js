import logo from '../images/world.png'

export default function Navbar() {
  return (
    <nav>
        <img src={logo} alt="logo" className='nav--logo' />
        <h4>my travel journal</h4>
    </nav>
  )
}