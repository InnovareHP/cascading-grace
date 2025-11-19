import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, Search } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

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
          <Dropdown label="Experience Sunrise" />
          <Dropdown label="Care & Living" />
          <Dropdown label="Advice & Planning" />
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            className="border-gray-400 text-gray-700 hover:bg-gray-100 rounded-sm px-5 py-2 text-[15px] hidden md:flex"
          >
            Find a Sunrise <ChevronDown className="ml-2 h-4 w-4" />
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6 space-y-6">
              <nav className="flex flex-col gap-4 text-lg">
                <DropdownMobile label="Experience Sunrise" />
                <DropdownMobile label="Care & Living" />
                <DropdownMobile label="Advice & Planning" />

                <Button
                  variant="outline"
                  className="border-gray-500 w-full text-gray-800"
                >
                  Find a Sunrise
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

function Dropdown({ label }: { label: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 hover:text-orange-600 transition-colors">
        {label}
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[220px]">
        <DropdownMenuItem>Option 1</DropdownMenuItem>
        <DropdownMenuItem>Option 2</DropdownMenuItem>
        <DropdownMenuItem>Option 3</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DropdownMobile({ label }: { label: string }) {
  return (
    <details className="group">
      <summary className="flex items-center justify-between cursor-pointer pb-2 border-b">
        {label}
        <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
      </summary>
      <div className="flex flex-col mt-2 pl-4 gap-2">
        <Link to="#" className="text-gray-600">
          Option 1
        </Link>
        <Link to="#" className="text-gray-600">
          Option 2
        </Link>
        <Link to="#" className="text-gray-600">
          Option 3
        </Link>
      </div>
    </details>
  );
}
