import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../globalComponents/Navbar";
import SideBar from "../../globalComponents/SideBar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(() => {
  const savedTab = localStorage.getItem("activeTab");
    try {
      return savedTab ? JSON.parse(savedTab) : { name: "Home", path: "/Home" };
    } catch (error) {
      return { name: "Home", path: "/Home" };
    }
  });

  useEffect(() => {
    if (activeTab) {
      localStorage.setItem("activeTab", JSON.stringify(activeTab));
    }
  }, [activeTab]);

  return (
    <div className="h-screen flex flex-col">
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} activeTab={activeTab} />
      <div className="flex flex-1">
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} activeTab={activeTab} setActiveTab={setActiveTab}/>
        <div className="flex-1 p-3 bg-[var(--background)] min-h-screen flex flex-col">
          <Outlet />
          <div className="">
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </div>
    // <div className="flex flex-1">
    //   <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} activeTab={activeTab} setActiveTab={setActiveTab}/>
    //   <div className="flex-1 bg-textSecondary min-h-screen flex flex-col">
    //     <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} activeTab={activeTab} />
    //     <Outlet />
    //   </div>
    // </div>
  );
};

export default Dashboard;
