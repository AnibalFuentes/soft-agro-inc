// import Logo from "./logo";
import { ProfileDropdown } from "./profile-dropdown";
import { ModeToggle } from "./toggle-mode";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <div
      className="flex justify-between max-w-full w-full  py-2 border-b border-solid border-gray-200 sticky z-10 top-0 
     backdrop-blur-lg "
    >
      <SidebarTrigger />
      <div className="flex items-center">
        <ProfileDropdown />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
