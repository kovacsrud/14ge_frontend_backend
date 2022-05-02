import {NavLink} from 'react-router-dom';

function Menu() {
  return (
    <div className="navbar bg-amber-200 text-amber-600">
      <div className="flex-1">
        <NavLink to={'/'} className="btn btn-ghost normal-case text-xl">Macskák</NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink to={'/facts'}>Tények</NavLink>
          </li>
          <li>
            <NavLink to={'/breeds'}>Fajták</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
