import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  FaChartBar,
  FaHouse,
  FaUserDoctor,
  FaUserGear,
  FaUsersLine,
  FaAngleRight,
} from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: "/dashboard", icon: <FaChartBar />, label: "Dashboard" },
    { path: "/allusers", icon: <FaUsersLine />, label: "All Users" },
    { path: "/addDoctor", icon: <FaUserDoctor />, label: "Add a Doctor" },
    { path: "/manageDoctor", icon: <FaUserGear />, label: "Manage Doctors" },
    { path: "/", icon: <FaHouse />, label: "Home" },
  ];

  return (
    <div className="relative h-screen">
      <div 
        className={cn(
          "h-full transition-all duration-300 bg-white border-r border-gray-200 shadow-sm py-6 flex flex-col",
          expanded ? "w-[250px]" : "w-[80px]"
        )}
      >
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute -right-3 top-6 h-6 w-6 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-100"
          onClick={() => setExpanded(!expanded)}
        >
          <FaAngleRight className={cn("h-3 w-3 transition-transform", !expanded && "rotate-180")} />
        </Button>
        
        <div className="space-y-1 px-3 mt-4">
          {menuItems.map((item) => (
            <Link to={item.path} key={item.path}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 py-3 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors",
                  isActive(item.path) && "bg-blue-50 text-blue-600 font-medium"
                )}
              >
                <span className="text-xl">{item.icon}</span>
                {expanded && <span>{item.label}</span>}
              </Button>
            </Link>
          ))}
        </div>
        
        <div className="mt-auto px-3">
          {expanded && (
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <p className="text-sm text-blue-600 font-medium">Need help?</p>
              <p className="text-xs text-gray-500 mt-1">Contact support team</p>
              <Button 
                variant="outline" 
                className="mt-2 w-full text-xs h-8 border-blue-200 text-blue-600 hover:bg-blue-100"
              >
                Contact Support
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
