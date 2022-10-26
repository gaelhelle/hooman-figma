import { useState } from "react";
import { data, MenuItemType } from "../data";
import SidebarMenuItem from "./SidebarMenuItem";

const SidebarMenu = () => {
  const [activeMenuId, setMenuId] = useState("news-and-articles");

  return (
    <nav>
      <ul>
        {data.menu.map((menu: MenuItemType) => (
          <li key={menu.id}>
            <SidebarMenuItem
              menu={menu}
              onClick={() => setMenuId(menu.id)}
              active={activeMenuId == menu.id}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarMenu;
