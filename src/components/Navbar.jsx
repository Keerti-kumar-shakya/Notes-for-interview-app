import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <nav>
      <article className="nav-link">
        <NavLink className= 'link' to= '/'> 
          {/*HTML*/}
           HTML
        </NavLink>

        <NavLink className= 'link' to = 'css'>
          CSS
        </NavLink>

        <NavLink className= 'link' to = 'javascript'>
        JAVASCRIPT
        </NavLink>

        <NavLink className= 'link' to = 'react'>
        REACT
        </NavLink>
      </article>
    </nav>
  )
}

export default Navbar
