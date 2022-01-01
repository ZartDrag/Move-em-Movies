import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">WHAT'S HOT</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              imdb={menuItem.imdb}
              rotTom={menuItem.rotTom}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
