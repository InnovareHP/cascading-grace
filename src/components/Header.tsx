import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Experience Sunrise", to: "/experience-sunrise" },
    { label: "Care & Living", to: "/care-living" },
    { label: "Advice & Planning", to: "/advice-planning" },
  ];

  return (
    <header className="border-b bg-white shadow-sm ">
      <div className="w-full text-right text-[13px] pr-6 py-2 text-gray-600 hidden md:block">
        Pricing & Availability:{" "}
        <span className="font-semibold">888-434-4648</span>
      </div>

      <div className="container max-w-7xl mx-auto flex items-center justify-between h-20">
        <Link to="/" className="flex items-center">
          <img
            src="/assets/image/LOGO-CascadingGrace.png"
            alt="Sunrise"
            className="h-16 sm:h-26"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-medium text-[15px]">
          {links.map(({ label, to }, i) => (
            <Link
              to={to}
              className="hover:text-orange-600 transition-colors"
              key={i}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="w-5 h-5" />
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6 space-y-6">
              <nav className="flex flex-col gap-4 text-lg">
                {links.map(({ label, to }, i) => (
                  <Link to={to} key={i}>
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
