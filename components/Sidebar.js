import { useSession } from "next-auth/react";
import SidebarRow from "./SidebarRow";
import {
  ChevronDownIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

import {
  CalenderIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { HiDesktopComputer } from 'react-icons/hi';
import { AiFillCalendar } from 'react-icons/ai';


const Sidebar = () => {
  const { session, loading } = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px] ">
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingCartIcon} title="Marketplace" />
      <SidebarRow Icon={HiDesktopComputer} title="Watch" />
      <SidebarRow Icon={AiFillCalendar} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
};

export default Sidebar;
