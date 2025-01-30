import { Menu as HamburgerIcon, } from "@mui/icons-material";
import { IoIosArrowForward  } from "react-icons/io";
import { FaPowerOff , FaBell, FaSearch, } from "react-icons/fa";
import profileImg from "../../assets/awais.jpg";
import Badge from '@mui/material/Badge';
import logo from "../../assets/logo/ghse.svg";

const Navbar = ({ sidebarOpen, setSidebarOpen, activeTab }) => {

  return (
    <div className="flex justify-between items-center px-3 py-2.5  bg-[var(--secondary)]">
      <div className="text-lg flex gap-4 font-semibold text-gray-700">
        <div className="md:hidden">
          <HamburgerIcon className="text-[var(--primary)] cursor-pointer" onClick={() => setSidebarOpen(!sidebarOpen)}/>
        </div>
        <div className="mx-auto w-24 md:w-32">
          <img src={logo} alt="Logo" className="w-full h-full"/>
        </div>
        <h3 className="text-white font-medium hidden md:flex items-center gap-"> <IoIosArrowForward  /> {activeTab.name}</h3>
      </div>
      <div className="flex items-center space-x-4">
        <Badge badgeContent={9} max={100} color="success">
          <FaBell className="text-yellow-500 text-2xl cursor-pointer" />
        </Badge>
        <img src={profileImg} alt="Profile" className="w-10 h-10 rounded-full object-cover cursor-pointer" />
        <span className="text-xl text-white"><FaPowerOff/></span> 
      </div>
    </div>
  );
};

export default Navbar;
