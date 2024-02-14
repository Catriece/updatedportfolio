import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const buttonStyle = {
  backgroundColor: "transparent",
};

const MobileMenu = () => {
  return (
    <Menu>
      <MenuButton sx={buttonStyle} as={Button}>
        <HamburgerIcon boxSize={6} />
      </MenuButton>
      <MenuList>
        <MenuItem>What's happening</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem>About Me</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Let's Chat!</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MobileMenu;
