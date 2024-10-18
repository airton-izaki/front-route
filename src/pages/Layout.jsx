import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="contact-ul">
          <li className="layout">
            <Link to="/"  className="contact-link" >Home</Link>
          </li>
          <li className="layout">
            <Link to="/blog"   className="contact-link" >Blog</Link>
          </li>
          <li className="layout">
            <Link to="/contact"   className="contact-link" >Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;