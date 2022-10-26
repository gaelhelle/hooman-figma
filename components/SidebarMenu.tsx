import { useState } from "react";
import { data, MenuItemType } from "../data";
import { Iconly } from "react-iconly";

const SidebarMenu = () => {
  const [activeMenuId, setMenuId] = useState("news-and-articles");

  return (
    <nav>
      <ul>
        {data.menu.map((menu: MenuItemType) => (
          <li
            key={menu.id}
            className={`flex items-center gap-4 text-sm cursor-pointer py-1 ${
              activeMenuId === menu.id
                ? "text-[color:var(--theme-text)]"
                : `text-[color:var(--theme-primary)] hover:text-[color:var(--theme-text)] hover:opacity-80`
            }`}
            onClick={() => setMenuId(menu.id)}
          >
            <Iconly name={menu.icon.name} />
            <span> {menu.title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarMenu;
