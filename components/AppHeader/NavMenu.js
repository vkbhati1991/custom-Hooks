import React, { useEffect, useState } from 'react';
import { useGetData } from "../../Hooks/GetData";
import { NavLink } from 'react-router-dom';

function NavMenuSubList(navItem) {

  if (!navItem || (navItem && navItem.length === 0)) {
    return;
  }

  const navItemSubMenu = navItem.map((subMenuItem, idx) => {
    return (
      <li key={idx} className="app-nav-sub-list-item">
        <NavLink className="app-nav-item-link" to={subMenuItem.href}> {subMenuItem.name}</NavLink>
      </li>
    );
  });

  return (
    <ul className="app-nav-sub-list trans-3">
      {navItemSubMenu}
    </ul>
  );
}

function NavMenuList(navMenuArry) {

  if (!navMenuArry) return;

  const { Navigations } = navMenuArry;

  if (!Navigations || (Navigations && Navigations.length === 0)) {
    return;
  }

  return Navigations.map((navItem, index) => {
    return (
      <li key={index} className="app-nav-list-item">
        <NavLink className="app-nav-item-link" to="/students" activeClassName="selected"> <span className="app-nav-item-link-text">{navItem.name}</span></NavLink>
        {NavMenuSubList(navItem && navItem.childrens)}
      </li>
    );
  });
}

function NavMenu() {

  const [navMenuArry, setNavMenuList] = useState({});
  const { data } = useGetData("/api/menu");

  useEffect(() => {
    setNavMenuList(data);
  }, [data]);

  console.log(navMenuArry);

  return (
    <div className="app-nav bg-white relative z-10">
      <div className="app-nav-container relative">
        <ul className="app-nav-list">
          {NavMenuList(navMenuArry)}
        </ul>
      </div>
    </div>
  )
}

export { NavMenu }
