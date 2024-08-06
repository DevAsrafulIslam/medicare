import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Link, useLocation } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { useState } from "react";
const NAVIGATION = [
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
    name: "Login",
    href: "/login",
  },
];

const NavBar = () => {
  const { pathname } = useLocation();
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="bg-[#07332F] text-white w-full">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4 py-4">
          <img className="hidden md:flex" src="/public/Group 1.png" alt="" />
          <h1 className="text-2xl">
            Medi<span className="text-orange-600">Care</span>
          </h1>
        </div>
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {NAVIGATION.map((nav) => (
                <NavigationMenuItem key={nav.href}>
                  <Link to={nav.href}>
                    <Button
                      className={`hover:bg-teal-800 transition duration-300${
                        nav.href === pathname ? " bg-teal-800" : ""
                      }`}
                    >
                      {nav.name}
                    </Button>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Sheet onOpenChange={setIsClicked}>
          <SheetTrigger className="md:hidden" asChild>
            <Button onClick={handleClick} variant="outline">
              {isClicked ? <FaXmark /> : <FaBarsStaggered />}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-slate-300">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid items-center text-center gap-4">
                {NAVIGATION.map((nav) => (
                  <div key={nav.href}>
                    <Link to={nav.href}>
                      <Button
                        className={`hover:text-white w-full hover:bg-teal-800 transition duration-300${
                          nav.href === pathname ? " bg-teal-800" : ""
                        }`}
                      >
                        {nav.name}
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavBar;
