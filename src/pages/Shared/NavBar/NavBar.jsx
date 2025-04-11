import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBarsStaggered, FaXmark, FaUser } from "react-icons/fa6";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/providers/AuthProviders";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Appointment",
    href: "/appointment",
  },
  {
    name: "Review",
    href: "/review",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const NavBar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleAuthAction = () => {
    if (user) {
      LogOut(); // If user is logged in, sign out
    } else {
      navigate("/login");
    }
  };

  const { pathname } = useLocation();
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white text-[#07332F] shadow-md py-2" : "bg-[#07332F] text-white py-4"
    }`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img className="hidden md:flex h-10" src="/Group 1.png" alt="" />
          <h1 className="text-2xl font-bold">
            𝑴𝒆𝒅𝒊<span className="text-orange-600">𝑪𝒂𝒓𝒆</span>
          </h1>
        </div>
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-1">
              {navigation.map((nav) => (
                <NavigationMenuItem key={nav.href}>
                  <Link to={nav.href}>
                    <Button
                      variant="ghost"
                      className={`rounded-full px-5 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 ${
                        nav.href === pathname 
                          ? scrolled 
                            ? "bg-blue-100 text-blue-700" 
                            : "bg-teal-800 text-white" 
                          : ""
                      }`}
                    >
                      {nav.name}
                    </Button>
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className={`rounded-full p-2 ml-2 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 ${
                        scrolled ? "bg-gray-100" : "bg-teal-800"
                      }`}
                    >
                      <FaUser className="h-5 w-5" />
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="grid w-fit bg-white shadow-lg rounded-xl p-2 border-none">
                    <Link to="dashboard">
                      <Button variant="ghost" className="w-full justify-start hover:bg-blue-100 hover:text-blue-700 mb-1">
                        Profile
                      </Button>
                    </Link>
                    <Link to="dashboard">
                      <Button variant="ghost" className="w-full justify-start hover:bg-blue-100 hover:text-blue-700 mb-1">
                        Dashboard
                      </Button>
                    </Link>

                    <Button
                      onClick={() => {
                        handleAuthAction();
                        setIsClicked(false);
                      }}
                      variant="ghost"
                      className="w-full justify-start hover:bg-blue-100 hover:text-blue-700"
                    >
                      {user ? "Logout" : "Login"}
                    </Button>
                  </PopoverContent>
                </Popover>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Sheet open={isClicked} onOpenChange={setIsClicked}>
          <SheetTrigger className="md:hidden" asChild>
            <Button 
              onClick={handleClick} 
              variant="ghost" 
              className={`p-2 rounded-full ${scrolled ? "text-[#07332F]" : "text-white"}`}
            >
              {isClicked ? <FaXmark className="h-5 w-5" /> : <FaBarsStaggered className="h-5 w-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white">
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold text-[#07332F]">
                𝑴𝒆𝒅𝒊<span className="text-orange-600">𝑪𝒂𝒓𝒆</span>
              </SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-6">
              <div className="grid items-center gap-2">
                {navigation.map((dNav) => {
                  return (
                    <div key={dNav.href} onClick={() => setIsClicked(false)}>
                      <Link to={dNav.href}>
                        <Button
                          variant="ghost"
                          className={`w-full justify-start rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 ${
                            dNav.href === pathname ? "bg-blue-100 text-blue-700" : ""
                          }`}
                        >
                          {dNav.name}
                        </Button>
                      </Link>
                    </div>
                  );
                })}
                <div className="h-px bg-gray-200 my-2"></div>
                <Button
                  onClick={() => {
                    handleAuthAction();
                    setIsClicked(false);
                  }}
                  variant="ghost"
                  className="w-full justify-start rounded-lg hover:bg-blue-100 hover:text-blue-700"
                >
                  {user ? "Logout" : "Login"}
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavBar;
