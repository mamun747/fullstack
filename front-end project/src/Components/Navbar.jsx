import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import {
  ChevronDownIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import MyModal from "./Home/Modal";
import ProfileDropdown from "./Home/Dropdown";
import { NavLink } from "react-router";
import Home from "./Home";
const value = true;
function NavbarSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(null);
  const menuItem = [
    "Eat & Drink",
    "Club",
    "Things to do",
    "Shoping",
    "Account",
    "Contact",
  ];
  return (
    <>
      <section>
        <Navbar
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          maxWidth="2xl"
        >
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle
              aria-level={isMenuOpen ? "close menu" : "open menu"}
            ></NavbarMenuToggle>
          </NavbarContent>

          <NavbarContent className="sm:hidden pr-3">
            <NavbarBrand>
              <NavLink to="/"><img className="w-44" src="/Logo.png" alt="logo" /></NavLink>
          </NavbarBrand>
          </NavbarContent>

          {/* Desktop Device */}
          <NavbarContent className="hidden sm:flex gap-4 w-full justify-center text-gray-950">
            <NavbarBrand>
              <NavLink to="/"><img src="/Logo.png" alt="" /></NavLink>
            </NavbarBrand>
            <NavbarItem>
              <NavLink style={({isActive}) => ({
                color: isActive ? "#0e8bff" : "black"
              })} to="/drink" className="text-gray-950">Eat & Drink</NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink style={({isActive}) => ({
                color: isActive ? "#0e8bff" : "black"
              })} to="/club" className="foreground">
                Club
                <sup className="bg-blue-500 p-2 rounded-2xl text-white text-[12px]">
                  Hot
                </sup>
              </NavLink>
            </NavbarItem>
            <NavbarItem>
            <Dropdown>
      <DropdownTrigger>
        <Button variant="none">
          Things to do <ChevronDownIcon className="text-[#0E8BFF] w-4 h-4" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Example with disabled actions">
        <DropdownItem key="new">Water Sports</DropdownItem>
        <DropdownItem key="copy">Day Parties</DropdownItem>
        <DropdownItem key="edit">Outdoors</DropdownItem>
        <DropdownItem key="edit">Rentals</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
            </NavbarItem>
            <NavbarItem>
              <Link className="foreground">
                <img src="/Cart.png" alt="" />
              </Link>
            </NavbarItem>
            <NavbarItem>
            {value == true ? <MyModal/> : <ProfileDropdown/>}
            </NavbarItem>
            <NavbarItem>
              <Button color="primary">Contact Now</Button>
            </NavbarItem>
          </NavbarContent>
          <div className="lg:hidden">
            <NavbarContent className="w-full" justify="end">
              <NavbarItem className="hidden lg:flex"></NavbarItem>
              <NavbarItem className="sm:hidden">
                <img src="/Cart.png" alt="" />
              </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="bg-[#f5faff]">
              {menuItem.map((value, index) => (
                <NavbarItem key={index}>
                  <Link className="w-full text-[#26395C] capitalize">
                    {value}
                  </Link>
                </NavbarItem>
              ))}
            </NavbarMenu>
          </div>
        </Navbar>
      </section>
    </>
  );
}

export default NavbarSection;