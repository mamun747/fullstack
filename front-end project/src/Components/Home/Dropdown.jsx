import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { UserIcon } from "@heroicons/react/24/outline";
function ProfileDropdown() {
  return (
    <Dropdown>
    <DropdownTrigger>
      <Button variant="none">
        <UserIcon className="text-[#26395C] w-7 h-7" /> Account
      </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Profile">
      <DropdownItem key="new">My Profile</DropdownItem>
      <DropdownItem key="copy">My History</DropdownItem>
      <DropdownItem key="edit">Sign Out</DropdownItem>
    </DropdownMenu>
  </Dropdown>
  );
}

export default ProfileDropdown;
