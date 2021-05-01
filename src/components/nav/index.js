import './nav.css'

function Nav(props) {
  return (

    <nav className={props.name} style={props.showNav ? navStyle : {}}>
      <ul className="list">
        <li className="nav-list">
          <a className="nav-link">About me</a>
        </li>
        <li className="nav-list">
          <a className="nav-link">Projects</a>
        </li>
        <li className="nav-list">
          <a className="nav-link">Skills</a>
        </li>
        <li className="nav-list">
          <a className="nav-link">Contacts</a>
        </li>
      </ul>
    </nav>
  );
}
const navStyle = {
  display: "block"
}
export default Nav