import './nav.css'

function Nav(props) {
  return (

    <nav className={props.name} style={props.showNav ? navStyle : {}}>
      <ul className="list">
        <li className="nav-list">
          <a href="#about-me" className="nav-link">About me</a>
        </li>
        <li className="nav-list">
          <a href="#projects" className="nav-link">Projects</a>
        </li>
        <li className="nav-list">
          <a href="#about-me" className="nav-link">Skills</a>
        </li>
        <li className="nav-list">
          <a  href="#about-me"className="nav-link">Contacts</a>
        </li>
      </ul>
    </nav>
  );
}
const navStyle = {
  display: "block"
}
export default Nav