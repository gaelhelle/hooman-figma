import Image from "next/image";
import { Iconly } from "react-iconly";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <aside className="px-10 py-6 h-full flex flex-col relative">
      <div className="flex justify-end">
        <div className="absolute cursor-pointer w-10 h-10 hover:bg-black/20 rounded-full flex items-center justify-center right-4">
          <svg
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[color:var(--theme-white)]"
          >
            <path
              d="M0.258451 5.9425C0.298003 5.99083 0.447345 6.1975 0.586459 6.3675C1.40205 7.43667 3.52966 9.18667 4.64325 9.72083C4.81237 9.80667 5.23994 9.98833 5.46839 10C5.68729 10 5.89596 9.94 6.09508 9.81833C6.3433 9.64833 6.54243 9.38083 6.65153 9.065C6.72177 8.84583 6.83088 8.19 6.83088 8.17833C6.93999 7.46083 7 6.295 7 5.00667C7 3.77917 6.93999 2.66083 6.85066 1.9325C6.84043 1.92083 6.73132 1.10583 6.61198 0.826667C6.39308 0.316667 5.96551 0 5.50794 0H5.46839C5.17038 0.0124998 4.54369 0.329167 4.54369 0.340834C3.49011 0.875834 1.41159 2.54 0.57623 3.64583C0.57623 3.64583 0.340964 3.93 0.238675 4.1075C0.0791039 4.3625 0 4.67833 0 4.99417C0 5.34667 0.0893331 5.675 0.258451 5.9425Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div className="flex-1 pt-12">
        <SidebarMenu />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <Image
            src="/assets/images/Hooman-Studio.svg"
            width="28"
            height="30"
          />
        </div>
        <div>
          <div className="cursor-pointer hover:opacity-80">
            <Iconly name="Logout" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
