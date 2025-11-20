import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "#about-us" },
    { label: "Services", to: "/services" },
    { label: "Who we serve", to: "#who-we-serve" },
    { label: "Why choose us", to: "#why-choose-us" },
    { label: "Contact Us", to: "#contact-us" },
  ];

  return (
    <header className="border-b bg-white shadow-sm py-2 ">
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
              className=" hover:text-blue-600 transition-colors"
              key={i}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
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
