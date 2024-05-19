import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SideNav = () => {
   return (
      <div className="sidenav">
         <div>
         
         </div>
         <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#" id='expand'>Our Services</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">Contact</a></li>
         </ul>
      </div>
   );
}


export default SideNav;
