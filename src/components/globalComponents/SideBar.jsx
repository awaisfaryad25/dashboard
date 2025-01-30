import React, { useEffect } from "react";
import BusinessIcon from "@mui/icons-material/Business";
import { useNavigate } from "react-router-dom"; 
import { MdHome, MdLogout } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
const SideBar = ({ sidebarOpen, setSidebarOpen, activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const tabs = [
    { label: "Home", icon: <MdHome />, path: "/Home" },
    { label: "Team", icon: <HiUsers />, path: "/Team" },
    { label: "Portfolio", icon: <BusinessIcon />, path: "/Portfolio" },
  ];


  return (
    <div 
      className={`w-60 bg-gradient-to-b from-[var(--secondary)]  to-[var(--primary)] text-white flex flex-col justify-between absolute  md:top-0 left-0 h-full transition-all duration-300 z-30 ${
        sidebarOpen ? "translate-x-0 top-15" : "-translate-x-full "
      } md:translate-x-0 md:relative md:h-auto`}
    >
      <div>
        <ul className="pl-4 pt-3 space-y-2">
          {tabs.map(({ label, icon, path }) => (
            <li
              key={label}
              onClick={() => {
                setActiveTab({ name: label, path: path });
                setSidebarOpen(false);
                navigate(path);
              }}
              className={`flex items-center space-x-2 px-6 py-2 cursor-pointer ${
                activeTab.name === label
                  ? "bg-[var(--background)] text-[var(--secondary)] font-bold rounded-l-full"
                  : ""
              }`}
            >
              <span className="text-2xl">{icon}</span> 
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* <button className="w-[80%] flex items-center justify-between cursor-pointer mx-auto py-2 px-4 mb-4 rounded-lg text-white bg-[var(--secondary)] shadow-lg">
        Logout
        <span className="text-xl"><MdLogout/></span>
      </button> */}
    </div>
  );
};

export default SideBar;
