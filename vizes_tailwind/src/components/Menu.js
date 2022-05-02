import {NavLink} from 'react-router-dom';

function Menu() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <NavLink to={'/'} className="btn btn-ghost normal-case text-xl">Főoldal</NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink to={'/varosok'}>Városok</NavLink>
          </li>
          <li>
            <NavLink to={'/vizallas'}>Vízállás</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
