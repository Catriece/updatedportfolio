import MobileMenu from "../menu/mobile-menu";
import { Box, Image } from "@chakra-ui/react";
import logo from "../../assets/code.png";

const mobileContainer = {
  position: "relative",
  width: "100%",
  height: "100%",
};

const imageContainer = {
  position: "absolute",
  top: -8,
  left: -10,
};

const hamburgerMenuContainer = {
  position: "absolute",
  width: "50px",
  top: 3,
  right: 2,
};

const MobileHeaderComponent = () => {
  return (
    <Box sx={mobileContainer}>
      <Box sx={imageContainer}>
        <Image src={logo} alt="Catriece-Loves-Code-Logo" w="100%" />
      </Box>

      <Box sx={hamburgerMenuContainer}>
        <MobileMenu />
      </Box>
    </Box>
  );
};

export default MobileHeaderComponent;
