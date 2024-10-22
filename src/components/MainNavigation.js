import { Link } from 'react-router-dom';
import '../styles/MainNavigation.css';

function MainNavigation(){
    return (
      <ul>
        <li><Link to="/workouts">Workouts</Link></li>
        <li><Link to="/calories">Calories</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
          
      </ul>  
    );
}

export default MainNavigation;