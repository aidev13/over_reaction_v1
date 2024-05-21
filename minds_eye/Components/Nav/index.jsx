import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import Btn from '../Button';


const SideNav = () => {
   return (
      <div className="sidenav">
         <div id='arrowIcon'>
            <FontAwesomeIcon icon={faCircleRight} size='xl' />
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
