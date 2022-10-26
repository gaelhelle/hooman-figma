import { MenuItemType } from "../data";
import { Iconly } from "react-iconly";

type SidebarMenuItemType = {
  menu: MenuItemType;
  active?: boolean;
  onClick: () => void;
};

const SidebarMenuItem = (props: SidebarMenuItemType) => {
  const { menu, active, onClick } = props;

  return (
    <div
      className={`flex items-center gap-4 text-sm cursor-pointer py-1 ${
        active
          ? "text-[color:var(--theme-text)]"
          : `text-[color:var(--theme-primary)] hover:text-[color:var(--theme-text)] hover:opacity-80`
      }`}
      onClick={onClick}
    >
      <Iconly name={menu.icon.name} />
      <span>{menu.title}</span>
    </div>
  );
};

export default SidebarMenuItem;
